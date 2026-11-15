import type {Project} from "@/lib/projects";
import {ArrowUpRight,Code2,LayoutDashboard,GraduationCap,NotebookPen,ShoppingBag,Flower2} from "lucide-react";

const iconBySlug: Record<string,typeof Code2>={stryde:ShoppingBag,"madura-store":Code2,newshub:NotebookPen,"mister-komputer":GraduationCap,"torray-student":LayoutDashboard,"blooming-garden":Flower2};
export function ProjectArtwork({project,large=false}:{project:Project;large?:boolean}){
 const Icon=iconBySlug[project.slug]||Code2;
 return <div className={`project-artwork artwork-${project.tint} artwork-${project.slug}${large?" artwork-large":""}`}>
  <div className="artwork-lights"/><span className="artwork-orbit orbit-a"/><span className="artwork-orbit orbit-b"/>
  <div className="artwork-platform">
   <div className="artwork-browser"><div className="artwork-browser-top"><span/><span/><span/><i>{project.slug==="stryde"?"S T R Y D E":project.name}</i></div><div className="artwork-browser-body">
    <div className="mockup-nav"><span className="mockup-nav-brand">{project.name}</span><span>Discover</span><span>About</span><span className="mockup-nav-pill">Explore</span></div>
    <div className="mockup-main"><div className="mockup-copy"><small>{project.kicker}</small><strong>{project.slug==="stryde"?<>NEXT<br/>LEVEL<br/><em>SNEAKERS.</em></>:project.slug==="madura-store"?<>RESEP<br/>AUTENTIK<br/><em>MADURA.</em></>:project.slug==="newshub"?<>IDEAS.<br/>WORDS.<br/><em>STORIES.</em></>:project.slug==="mister-komputer"?<>LEARN.<br/>BUILD.<br/><em>GROW.</em></>:project.slug==="torray-student"?<>STUDENT<br/><em>SPACE.</em></>:<>CREATIVE<br/><em>CODE.</em></>}</strong><span className="mockup-button">Explore <ArrowUpRight size={8}/></span></div><div className="mockup-feature" aria-hidden="true"><Icon size={large?74:48} strokeWidth={1}/><span className="mockup-glow"/></div></div>
   </div></div>
  </div><span className="artwork-index">{project.number} / 06</span><span className="artwork-code">DESIGN x CODE x SYSTEMS</span>
 </div>;
}