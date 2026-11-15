"use client";
import Link from "next/link";
import {useMotionValue,useSpring,motion,useReducedMotion} from "motion/react";
import type {MouseEvent} from "react";
import {ArrowUpRight} from "lucide-react";
import {selectedProjects} from "@/lib/projects";
import {ProjectArtwork} from "./ProjectArtwork";
import {Reveal} from "./Reveal";
import type {Project} from "@/lib/projects";

function TiltCard({project,index}:{project:Project;index:number}){
 const reduced=useReducedMotion();
 const x=useMotionValue(0),y=useMotionValue(0);
 const rotateX=useSpring(x,{stiffness:140,damping:20});
 const rotateY=useSpring(y,{stiffness:140,damping:20});
 const tilt=(e:MouseEvent<HTMLElement>)=>{
  if(reduced||window.matchMedia("(pointer:coarse)").matches)return;
  const r=e.currentTarget.getBoundingClientRect();
  const px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;
  x.set(-py*7);y.set(px*7);
 };
 return <motion.article className="feature-card feature-card-tilt"
  initial={reduced?false:{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.05}}
  transition={{delay:reduced?0:index*.11,duration:.7,ease:[.22,1,.36,1]}}
  style={reduced?{}:{rotateX,rotateY,transformPerspective:1000}}
  onMouseMove={tilt} onMouseLeave={()=>{x.set(0);y.set(0)}}>
   <Link href={`/projects/${project.slug}`} className="feature-link" aria-label={`See ${project.name} case study`}>
    <ProjectArtwork project={project}/><div className="feature-info"><div><span className="project-kicker">{project.kicker}</span><h3>{project.name}</h3><p>{project.summary}</p></div><span className="circle-arrow"><ArrowUpRight size={19}/></span></div>
   </Link><div className="feature-tags">{project.stack.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div>
 </motion.article>;
}
export function SelectedWork(){return <section className="selected-work section-dark" id="work"><div className="container">
 <Reveal><div className="section-heading work-heading"><div><p className="eyebrow"><span className="three-slashes">///</span> FEATURED PROJECTS / 2026</p><h2>SELECTED <span>WORK</span><b> /</b></h2></div><div className="section-heading-right"><p>Kurasi proyek utama dari eksperimen dan pengembangan produk digital.</p><Link className="text-link" href="/projects">Lihat semua proyek <ArrowUpRight size={17}/></Link></div></div></Reveal>
 <div className="selected-grid">{selectedProjects.map((project,i)=><TiltCard project={project} index={i} key={project.slug}/>)}</div>
 </div></section>}