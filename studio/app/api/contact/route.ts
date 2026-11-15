import {NextRequest,NextResponse} from "next/server";
import {createClient} from "@supabase/supabase-js";
export const runtime="nodejs";

type Inquiry={name?:unknown;email?:unknown;subject?:unknown;message?:unknown;website?:unknown;startedAt?:unknown};
const allowed=new Set(["Project collaboration","Product idea","Technical discussion","Other"]);
function safeString(value:unknown){return typeof value==="string"?value.trim():"";}
export async function POST(request:NextRequest){
 const origin=request.headers.get("origin");
 if(origin){try{if(new URL(origin).host!==request.nextUrl.host)return NextResponse.json({ok:false,message:"Invalid request origin."},{status:403});}catch{return NextResponse.json({ok:false,message:"Invalid origin."},{status:403});}}
 const type=request.headers.get("content-type")||"";
 if(!type.includes("application/json"))return NextResponse.json({ok:false,message:"Invalid content type."},{status:415});
 const raw=await request.text();
 if(raw.length>10500)return NextResponse.json({ok:false,message:"Message too long."},{status:413});
 let form:Inquiry;try{form=JSON.parse(raw) as Inquiry;}catch{return NextResponse.json({ok:false,message:"Invalid form payload."},{status:400});}
 if(form.website)return NextResponse.json({ok:true}); // honeypot for automated bots
 const age=Date.now()-Number(form.startedAt);
 if(!Number.isFinite(age)||age<1400||age>45*60*1000)return NextResponse.json({ok:false,message:"Refresh the form and try again."},{status:400});
 const display_name=safeString(form.name),email=safeString(form.email).toLowerCase(),subject=safeString(form.subject),message=safeString(form.message);
 if(display_name.length<2||display_name.length>90||email.length<5||email.length>180||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||!allowed.has(subject)||message.length<20||message.length>4000){
   return NextResponse.json({ok:false,message:"Please check each field and try again."},{status:422});
 }
 const url=process.env.NEXT_PUBLIC_SUPABASE_URL,key=process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
 if(!url||!key)return NextResponse.json({ok:false,message:"Contact inbox is temporarily unavailable. Use GitHub instead."},{status:503});
 const supabase=createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}});
 const {error}=await supabase.from("portfolio_inquiries").insert({display_name,email,subject,message});
 if(error){
   // Never echo database details or visitor data to a public caller.
   const limited=error.message.includes("limit")||error.message.includes("90 seconds")||error.code==="23505";
   return NextResponse.json({ok:false,message:limited?"Too many messages. Try again later, or use GitHub.":"Could not save the message right now. Please try later."},{status:limited?429:503});
 }
 return NextResponse.json({ok:true},{status:201,headers:{"Cache-Control":"no-store"}});
}