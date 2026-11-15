"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand } from "./Brand";
const links = [
  { title: "Home", href: "/" },
  { title: "Work", href: "/#work" },
  { title: "Experiments", href: "/lab" },
  { title: "Archive", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" }
];
export function Navbar() {
  const pathname=usePathname(),[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false);
  const { scrollYProgress }=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:100,damping:30,restDelta:.001});
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>12);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn);},[]);
  useEffect(()=>setOpen(false),[pathname]);
  return <><header className={`site-navbar${scrolled?" scrolled":""}`}>
    <div className="nav-inner container"><Brand />
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(link=><Link href={link.href} key={link.title} className={pathname===link.href&&pathname!=="/"?"is-current":""}>{link.title}</Link>)}</nav>
      <div className="nav-right"><a href="https://github.com/Torrayz" target="_blank" rel="noopener noreferrer" className="nav-github" aria-label="Torrayz on GitHub"><span className="github-glyph" aria-hidden="true">GH</span><span>GitHub</span><ArrowUpRight size={15}/></a><Link href="/#work" className="nav-cta">Explore Work <ArrowUpRight size={17}/></Link><button type="button" className="mobile-menu-button" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>{open?<X size={25}/>:<Menu size={25}/>}</button></div>
    </div><motion.div className="scroll-progress" style={{scaleX:progress}} aria-hidden="true"/>
  </header>
  <AnimatePresence>{open&&<motion.nav aria-label="Mobile navigation" className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.2}}>{links.map((item,i)=><Link onClick={()=>setOpen(false)} key={item.href} href={item.href}><span>0{i+1}</span>{item.title}<ArrowUpRight size={19}/></Link>)}</motion.nav>}</AnimatePresence></>;
}