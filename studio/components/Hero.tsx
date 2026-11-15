"use client";
import Link from "next/link";
import {ArrowDownRight,ArrowRight,ArrowUpRight,Code2,Globe2,Layers3,Sparkles} from "lucide-react";
import {motion,useReducedMotion} from "motion/react";
import {HeroScene} from "./HeroScene";
import {GithubPortrait} from "./GithubPortrait";
import {MagneticLink} from "./MagneticLink";
export function Hero(){
 const reduced=useReducedMotion();
 const initial=reduced?false:{opacity:0,y:24};
 return <section className="hero-section" id="top"><div className="hero-noise"/><div className="hero-grid"/><div className="hero-gradient"/>
 <div className="container hero-layout">
  <div className="hero-main">
   <motion.div initial={initial} animate={{opacity:1,y:0}} transition={{duration:.8}} className="hero-path"><span className="accent-rule"/>PORTFOLIO <span>/</span> DEVELOPMENT <span>/</span> CREATIVE TECH</motion.div>
   <motion.p initial={initial} animate={{opacity:1,y:0}} transition={{delay:.15,duration:.7}} className="hero-name">TRI PUJI ANTORO <span className="hero-name-line"/></motion.p>
   <motion.h1 className="hero-title-cinematic" aria-label="Creative Developer and Digital Builder" initial={reduced?false:"hidden"} animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:.15,delayChildren:.18}}}}>
     <motion.span className="hero-title-row" aria-hidden="true" variants={{hidden:{opacity:0,y:70,filter:"blur(9px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}}} transition={{duration:.88,ease:[.22,1,.36,1]}}>CREATIVE</motion.span>
     <motion.span className="hero-title-row" aria-hidden="true" variants={{hidden:{opacity:0,y:70,filter:"blur(9px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}}} transition={{duration:.88,ease:[.22,1,.36,1]}}>DEVELOPER <span>&amp;</span></motion.span>
     <motion.span className="hero-title-row" aria-hidden="true" variants={{hidden:{opacity:0,y:70,filter:"blur(9px)"},visible:{opacity:1,y:0,filter:"blur(0px)"}}} transition={{duration:.88,ease:[.22,1,.36,1]}}><strong>DIGITAL</strong> BUILDER<span className="hero-period">.</span></motion.span>
   </motion.h1>
   <motion.p className="hero-description" initial={initial} animate={{opacity:1,y:0}} transition={{delay:.4,duration:.8}}>Membangun pengalaman digital melalui kode, desain, dan eksplorasi teknologi. Dari aplikasi web yang fungsional sampai eksperimen visual yang punya karakter.</motion.p>
   <motion.div className="hero-actions" initial={initial} animate={{opacity:1,y:0}} transition={{delay:.52,duration:.7}}><MagneticLink href="/#work" className="button button-lime">Explore Work <ArrowUpRight size={19}/></MagneticLink><a className="button button-outline" href="https://github.com/Torrayz" target="_blank" rel="noopener noreferrer"><Code2 size={17}/> View GitHub <ArrowUpRight size={16}/></a></motion.div>
   <motion.div initial={initial} animate={{opacity:1,y:0}} transition={{delay:.66,duration:.7}} className="hero-stack"><span><Code2 size={15}/> WEB</span><span><Layers3 size={15}/> SYSTEMS</span><span><Globe2 size={15}/> UI / UX</span><span><Sparkles size={15}/> MOTION / 3D</span></motion.div>
  </div><HeroScene/>
  <div className="hero-profile-float"><GithubPortrait/></div>
  <div className="hero-side-label" aria-hidden="true"><span/>WEB<br/>SYSTEM<br/>UI / UX<br/>MOTION<br/>3D<br/>EXPERIMENTS</div>
 </div><div className="hero-bottom-line container"><div className="hero-online"><span className="pulse-dot"/>INDEPENDENT DEVELOPER / PROFILE SYNCED WITH GITHUB</div><a href="#work" className="hero-scroll">SCROLL TO EXPLORE <ArrowDownRight size={17}/></a></div>
 </section>;
}