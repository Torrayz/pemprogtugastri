"use client";
import Link from "next/link";
import {ArrowUpRight,ArrowRight} from "lucide-react";
import {motion,useReducedMotion} from "motion/react";
import {selectedProjects} from "@/lib/projects";
import {ProjectArtwork} from "./ProjectArtwork";
import {Reveal} from "./Reveal";
export function SelectedWork(){
 const reduced=useReducedMotion();
 return <section className="selected-work section-dark" id="work"><div className="container">
  <Reveal><div className="section-heading work-heading"><div><p className="eyebrow"><span className="three-slashes">///</span> FEATURED PROJECTS / 2026</p><h2>SELECTED <span>WORK</span><b> /</b></h2></div><div className="section-heading-right"><p>Kurasi proyek utama dari eksperimen dan pengembangan produk digital.</p><Link className="text-link" href="/projects">Lihat semua proyek <ArrowUpRight size={17}/></Link></div></div></Reveal>
  <div className="selected-grid">{selectedProjects.map((project,i)=><motion.article key={project.slug} className="feature-card" initial={reduced?false:{opacity:0,y:50}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.05}} transition={{delay:reduced?0:i*.11,duration:.7}} whileHover={reduced?{}:{y:-7}}>
    <Link href={`/projects/${project.slug}`} className="feature-link" aria-label={`See ${project.name} case study`}><ProjectArtwork project={project}/><div className="feature-info"><div><span className="project-kicker">{project.kicker}</span><h3>{project.name}</h3><p>{project.summary}</p></div><span className="circle-arrow"><ArrowUpRight size={19}/></span></div></Link><div className="feature-tags">{project.stack.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div>
  </motion.article>)}</div>
 </div></section>;
}