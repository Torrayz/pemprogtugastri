"use client";
import Image from "next/image";
import Link from "next/link";
import {ArrowUpRight, BadgeCheck, ExternalLink} from "lucide-react";
import {motion, useReducedMotion} from "motion/react";

// This is the current avatar URL returned by the connected @Torrayz GitHub profile.
// We never generate a substitute face or modify this image.
export const GITHUB_AVATAR = "https://avatars.githubusercontent.com/u/152534285?v=4";

export function GithubPortrait({variant="hero"}: {variant?:"hero"|"about"}){
 const reduced=useReducedMotion();
 return <motion.div className={`github-portrait github-portrait--${variant}`}
   initial={reduced?false:{opacity:0,scale:.86,rotate:-7,y:40}}
   whileInView={{opacity:1,scale:1,rotate:variant==="hero"?5:0,y:0}}
   viewport={{once:true,amount:.2}}
   whileHover={reduced?{}:{rotate:0,scale:1.035,y:-7}}
   transition={{type:"spring",stiffness:105,damping:17,mass:.75}}>
   <div className="portrait-topline"><span className="portrait-live-dot"/> VERIFIED SOURCE / GITHUB <BadgeCheck size={13}/></div>
   <Link className="portrait-image" href="https://github.com/Torrayz" target="_blank" rel="noopener noreferrer" aria-label="Buka foto profil GitHub Torrayz">
      <Image src={GITHUB_AVATAR} alt="Foto profil yang digunakan akun GitHub @Torrayz" fill sizes={variant==="about"?"(max-width: 760px) 85vw, 390px":"(max-width: 760px) 180px, 230px"} className="portrait-real-image" unoptimized priority={variant==="hero"}/>
      <span className="portrait-image-link"><ExternalLink size={16}/></span>
   </Link>
   <div className="portrait-caption"><div><span>THE PERSON BEHIND THE CODE</span><strong>@Torrayz</strong></div><ArrowUpRight size={20}/></div>
 </motion.div>
}