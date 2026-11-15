"use client";
import {useEffect,useMemo,useState} from "react";
import Link from "next/link";
import {ArrowRight,ArrowUpRight,BookOpen,Code2,ExternalLink,Filter,GitBranch, Search,Star} from "lucide-react";
import {motion,useReducedMotion} from "motion/react";
import type {PublicRepository} from "@/lib/github";
import {projects} from "@/lib/projects";
import {Reveal} from "./Reveal";

type Category = "All" | "Web apps" | "Systems" | "Creative" | "Data & AI" | "Archived";
type Order = "recent"|"stars"|"name";
const categories:Category[]=["All","Web apps","Systems","Creative","Data & AI","Archived"];
const fallback:PublicRepository[]=projects.map((p,i)=>({id:i+1,name:p.repo.split("/").pop()||p.slug,description:p.summary,html_url:p.repo,homepage:p.live||null,language:p.stack[0],stargazers_count:0,forks_count:0,archived:false,updated_at:"",topics:[p.category.toLowerCase()]}));
function inferCategory(repo:PublicRepository):Exclude<Category,"All"|"Archived">{
 const text=[repo.name,repo.description||"",...(repo.topics||[])].join(" ").toLowerCase();
 if(/ai|fuzzy|screener|saham|stock|data|random|machine|kecerdasan|analyt|prediksi/.test(text))return "Data & AI";
 if(/bunga|flower|portfolio|dotfile|motion|animation|design|galery|song|vidio|eksperimen/.test(text))return "Creative";
 if(/manufactur|perusahaan|sistem|portal|work|student|crud|backend|router|database|supabase/.test(text))return "Systems";
 return "Web apps";
}
export function Archive({full=false}:{full?:boolean}){
 const [repos,setRepos]=useState<PublicRepository[]>(fallback),[loading,setLoading]=useState(true),[remote,setRemote]=useState(false),[error,setError]=useState(false);
 const [category,setCategory]=useState<Category>("All"),[search,setSearch]=useState(""),[sort,setSort]=useState<Order>("recent"),[limit,setLimit]=useState(full?18:8);
 const reduced=useReducedMotion();
 useEffect(()=>{const controller=new AbortController();(async()=>{try{
 const response=await fetch("/api/github",{signal:controller.signal});if(!response.ok)throw Error("GitHub API unavailable");const data=await response.json();
 if(!controller.signal.aborted){if(Array.isArray(data.repos)&&data.repos.length>0){setRepos(data.repos);setRemote(true)}else setError(true);}
 }catch(e){if(!controller.signal.aborted){setError(true)}}finally{if(!controller.signal.aborted)setLoading(false)}})();return()=>controller.abort()},[]);
 useEffect(()=>setLimit(full?18:8),[category,search,sort,full]);
 const filtered=useMemo(()=>{
 let output=repos.filter(repo=>{
 const query=search.toLowerCase().trim();const matchText=[repo.name,repo.description||"",repo.language||"",...(repo.topics||[])].join(" ").toLowerCase();
 const matchCategory=category==="All" || (category==="Archived"?repo.archived:inferCategory(repo)===category);
 return matchCategory && (!query||matchText.includes(query));
 });
 output=[...output].sort((a,b)=>sort==="name"?a.name.localeCompare(b.name):sort==="stars"?b.stargazers_count-a.stargazers_count:(Date.parse(b.updated_at||"1970-01-01")||0)-(Date.parse(a.updated_at||"1970-01-01")||0));
 return output;
 },[repos,search,category,sort]);
 return <section className={`archive-section${full?" archive-full":""}`} id="archive"><div className="container">
  <Reveal><div className="section-heading archive-heading"><div><p className="eyebrow"><span className="three-slashes">///</span> THE GITHUB ARCHIVE / LIVE INDEX</p><h2>PROJECT <span>ARCHIVE</span><b> /</b></h2></div><div className="archive-heading-note"><p>Semua repository <strong>publik</strong> yang tersedia di akun GitHub. Repo privat tetap tidak ditampilkan.</p><div className="archive-live"><span className="pulse-dot"/>{remote?`${repos.length} PUBLIC REPOSITORIES`:loading?"SYNCING WITH GITHUB":"CURATED FALLBACK"}</div></div></div></Reveal>
  <div className="archive-controls"><div className="archive-categories" role="group" aria-label="Filter project categories">{categories.map(item=><button key={item} className={item===category?"active":""} onClick={()=>setCategory(item)}>{item}</button>)}</div><div className="archive-inputs"><label className="archive-search"><Search size={15}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search repositories..." aria-label="Search public repositories"/></label><label className="archive-sort"><Filter size={14}/><select value={sort} onChange={e=>setSort(e.target.value as Order)} aria-label="Sort repositories"><option value="recent">Recently updated</option><option value="stars">Most starred</option><option value="name">Name A-Z</option></select></label></div></div>
  {error&&<p className="archive-notice"><BookOpen size={17}/> Live GitHub index belum tersedia. Menampilkan proyek publik pilihan sementara.</p>}
  <div className="repo-grid" aria-live="polite">{filtered.slice(0,limit).map((repo,i)=>
   <motion.a key={repo.id+":"+repo.name} className="repo-card" href={repo.html_url} target="_blank" rel="noopener noreferrer" initial={reduced?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.05}} transition={{duration:.36,delay:Math.min(i%8,5)*.035}} whileHover={reduced?{}:{y:-5}}>
     <div className="repo-card-top"><span className="repo-card-symbol"><Code2 size={23}/></span><ArrowUpRight size={18}/></div><h3>{repo.name}</h3><p>{repo.description?.trim()||"Public GitHub repository. Lihat kode dan dokumentasi untuk detail proyek."}</p><div className="repo-card-footer"><span>{repo.language||inferCategory(repo)}</span><span><Star size={12}/>{repo.stargazers_count}</span>{repo.archived&&<span className="archive-label">Archived</span>}</div>
   </motion.a>
  )}</div>
  {!filtered.length&&<div className="repo-empty"><Search size={25}/><h3>Tidak ada repository yang cocok.</h3><p>Coba ganti kata kunci atau pilih kategori lain.</p></div>}
  <div className="archive-bottom"><span>{filtered.length?`Showing ${Math.min(limit,filtered.length)} of ${filtered.length} visible repositories`:`0 public repositories found`}</span>{full&&filtered.length>limit?<button className="button button-outline" onClick={()=>setLimit(limit+18)}>Load more <ArrowRight size={16}/></button>:!full?<Link href="/projects" className="button button-outline">Explore full archive <ArrowUpRight size={17}/></Link>:<a className="text-link" href="https://github.com/Torrayz?tab=repositories" target="_blank" rel="noopener noreferrer">Explore on GitHub <ExternalLink size={17}/></a>}</div>
 </div></section>;
}