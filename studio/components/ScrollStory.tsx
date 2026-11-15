"use client";
import{useEffect,useRef}from"react";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import {Reveal} from "./Reveal";
export function ScrollStory(){
 const ref=useRef<HTMLElement>(null);
 useEffect(()=>{let alive=true;let cleanup=()=>{};
  async function init(){const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduced)return;
   const [{gsap},{ScrollTrigger}]=await Promise.all([import("gsap"),import("gsap/ScrollTrigger")]);if(!alive||!ref.current)return;
   gsap.registerPlugin(ScrollTrigger);
   const ctx=gsap.context(()=>{gsap.fromTo(".statement-row-one",{xPercent:-5},{xPercent:5,ease:"none",scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom top",scrub:1}});gsap.fromTo(".statement-row-two",{xPercent:5},{xPercent:-5,ease:"none",scrollTrigger:{trigger:ref.current,start:"top bottom",end:"bottom top",scrub:1}})},ref);
   cleanup=()=>ctx.revert();
  }init();return()=>{alive=false;cleanup()};
 },[]);
 return <section className="statement-section" ref={ref}><div className="statement-pattern"/><div className="statement-rails" aria-hidden="true"><div className="statement-row-one">ENGINEERING <span>MEETS</span> IMAGINATION <i>///</i></div><div className="statement-row-two">DESIGN <i>+</i> CODE <i>+</i> MOTION <i>+</i> CURIOSITY</div></div><Reveal className="statement-content container"><p className="eyebrow">THE APPROACH / 001</p><div className="statement-columns"><h2>Not just<br/><span>another page.</span></h2><div><p>Setiap proyek adalah kesempatan untuk mempelajari pendekatan baru: membuat interaksi lebih intuitif, struktur kode lebih terjaga, dan visual yang tidak sekadar dekorasi.</p><Link className="text-link" href="/about">The story behind the work <ArrowUpRight size={18}/></Link></div></div></Reveal></section>;
}