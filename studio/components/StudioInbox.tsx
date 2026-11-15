"use client";
import {useEffect,useMemo,useState} from "react";
import type {FormEvent} from "react";
import {createClient,SupabaseClient,User} from "@supabase/supabase-js";
import {Check,Clock3,Inbox,LockKeyhole,LogOut,RefreshCcw} from "lucide-react";

type Inquiry={id:string;display_name:string;email:string;subject:string;message:string;created_at:string;reviewed_at:string|null};
const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const supabase:SupabaseClient|null=url&&key?createClient(url,key):null;
export function StudioInbox(){
 const[user,setUser]=useState<User|null>(null),[email,setEmail]=useState(""),[password,setPassword]=useState(""),[authorized,setAuthorized]=useState(false),[loading,setLoading]=useState(true),[busy,setBusy]=useState(false),[error,setError]=useState(""),[rows,setRows]=useState<Inquiry[]>([]);
 useEffect(()=>{if(!supabase){setLoading(false);return;}const client=supabase;let live=true;
  client.auth.getUser().then(({data})=>{if(live)setUser(data.user||null)}).finally(()=>{if(live)setLoading(false)});
  const{data:{subscription}}=client.auth.onAuthStateChange((_event,session)=>{if(live){setUser(session?.user||null);if(!session)setAuthorized(false);}});
  return()=>{live=false;subscription.unsubscribe()};
 },[]);
 useEffect(()=>{if(!user||!supabase){setRows([]);return;}const client=supabase;let live=true;
  (async()=>{const{data,error}=await client.from("app_memberships").select("role").eq("user_id",user.id).eq("app_key","TORRAYZ_STUDIO").maybeSingle();if(!live)return;if(error||!data||!["owner","admin"].includes(data.role)){setAuthorized(false);setError("Akun ini tidak mempunyai akses ke inbox portfolio.");return;}setAuthorized(true);setError("");const result=await client.from("portfolio_inquiries").select("id,display_name,email,subject,message,created_at,reviewed_at").order("created_at",{ascending:false}).limit(100);if(!live)return;if(result.error)setError(result.error.message);else setRows(result.data||[]);})();
  return()=>{live=false};
 },[user]);
 const unread=useMemo(()=>rows.filter(r=>!r.reviewed_at).length,[rows]);
 const login=async(e:FormEvent<HTMLFormElement>)=>{e.preventDefault();if(!supabase)return;setBusy(true);setError("");const r=await supabase.auth.signInWithPassword({email,password});setBusy(false);setPassword("");if(r.error)setError(r.error.message);};
 const refresh=async()=>{if(!supabase||!authorized)return;setBusy(true);const r=await supabase.from("portfolio_inquiries").select("id,display_name,email,subject,message,created_at,reviewed_at").order("created_at",{ascending:false}).limit(100);setBusy(false);if(r.error)setError(r.error.message);else setRows(r.data||[]);};
 const mark=async(id:string)=>{if(!supabase)return;const{error}=await supabase.from("portfolio_inquiries").update({reviewed_at:new Date().toISOString()}).eq("id",id);if(error)setError(error.message);else await refresh();};
 const logOut=async()=>{await supabase?.auth.signOut();setRows([]);setAuthorized(false);};
 return <section className="container inbox-shell"><header className="inbox-header"><p className="eyebrow">PRIVATE / OWNER ACCESS</p><h1>STUDIO <span>INBOX.</span></h1><p>Area privat untuk membaca pesan yang dikirim lewat formulir portfolio. Login menggunakan akun Supabase milik pemilik website.</p></header>
 {!supabase?<p className="contact-error">Supabase configuration is not available.</p>:loading?<p>Checking session...</p>:!user?<form className="inbox-login" onSubmit={login}><LockKeyhole size={27}/><h2>Owner sign in.</h2><label>Email<input type="email" required autoComplete="username" value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input type="password" required autoComplete="current-password" value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="button button-lime" disabled={busy} type="submit">{busy?"Signing in...":"Unlock inbox"}</button>{error&&<p role="alert" className="contact-error">{error}</p>}</form>:<>{authorized?<div className="inbox-toolbar"><div><Inbox size={21}/><b>{rows.length} messages</b><span>{unread} unread</span></div><div><button onClick={refresh} disabled={busy}><RefreshCcw size={17}/> Refresh</button><button onClick={logOut}><LogOut size={17}/> Sign out</button></div></div>:<p className="contact-error" role="alert">{error||"Checking access..."}</p>}{authorized&&<div className="inbox-message-list">{rows.map(r=><article key={r.id} className={`inbox-message${r.reviewed_at?" is-read":""}`}><header><div><span className="inbox-subject">{r.subject}</span><h2>{r.display_name}</h2><p>{r.email}</p></div><span><Clock3 size={13}/>{new Date(r.created_at).toLocaleString("id-ID")}</span></header><p className="inbox-message-body">{r.message}</p>{!r.reviewed_at?<button onClick={()=>mark(r.id)}><Check size={15}/> Mark as read</button>:<span className="inbox-read">✓ Read</span>}</article>)}{!rows.length&&<div className="inbox-empty">Belum ada pesan masuk.</div>}</div>}{error&&authorized&&<p role="alert" className="contact-error">{error}</p>}</>}
 </section>
}