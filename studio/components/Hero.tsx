"use client";
import Link from "next/link";
import {ArrowDownRight,ArrowRight,ArrowUpRight,Code2,Globe2,Layers3,Sparkles} from "lucide-react";
import {motion,useReducedMotion} from "motion/react";
import {HeroScene} from "./HeroScene";
export function Hero(){
 const reduced=useReducedMotion();
 const initial=reduced?false:{opacity:0,y:24};
 return <section className="hero-section" id="top"><div className="hero-noise"/><div className="hero-grid"/><div className="hero-gradient"/>
 <div className="container hero-layout">
  <div className="hero-main">
   <motion.div initial={initial} animate={{opacity:1,y:0}} transition={{duration:.8}} className="hero-path"><span className="accent-rule"/>PORTFOLIO <span>/</span> DEVELOPMENT <span>/</span> CREATIVE TECH</motion.div>
   <motion.p initial={initial} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.7}} className="hero-name">TRI PUJI ANTORO <span className="hero-name-line"/></motion.p>
   <motion.h1 initial={initial} animate={{opacity:1,y:0}} transition={{delay:.22,duration:.85,ease:[.22,1,.36,1]}}>CREATIVE<br/>DEVELOPER <span>&amp;</span><br/><strong>DIGITAL</strong> BUILDER<span className="hero-period">.</span></motion.h1>
   <motion.p className="hero-description" initial={initial} animate={{opacity:1,y:0}} transition={{delay:.4,duration:.8}}>Membangun pengalaman digital melalui kode, desain, dan eksplorasi teknologi. Dari aplikasi web yang fungsional sampai eksperimen visual yang punya karakter.</motion.p>
   <motion.div className="hero-actions" initial={initial} animate={{opacity:1,y:0}} transition={{delay:.52,duration:.7}}><Link href="/#work" className="button button-lime">Explore Work <ArrowUpRight size={19}/></Link><a className="button button-outline" href="https://github.com/Torrayz" target="_blank" rel="noopener noreferrer"><Code2 size={17}/> View GitHub <ArrowUpRight size={16}/></a></motion.div>
   <motion.div initial={initial} animate={{opacity:1,y:0}} transition={{delay:.66,duration:.7}} className="hero-stack"><span><Code2 size={15}/> WEB</span><span><Layers3 size={15}/> SYSTEMS</span><span><Globe2 size={15}/> UI / UX</span><span><Sparkles size={15}/> MOTION / 3D</span></motion.div>
  </div><HeroScene/>
  <div className="hero-side-label" aria-hidden="true"><span/>WEB<br/>SYSTEM<br/>UI / UX<br/>MOTION<br/>3D<br/>EXPERIMENTS</div>
 </div><div className="hero-bottom-line container"><div className="hero-online"><span className="pulse-dot"/>INDEPENDENT DEVELOPER / OPEN TO IDEAS</div><a href="#work" className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight size={17}/></a></div>
 </section>;
}