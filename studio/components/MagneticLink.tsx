"use client";
import Link from "next/link";
import type {ReactNode,MouseEvent} from "react";
import {motion,useMotionValue,useReducedMotion,useSpring} from "motion/react";
export function MagneticLink({href,children,className=""}:{href:string;children:ReactNode;className?:string}){
 const x=useMotionValue(0),y=useMotionValue(0);
 const sx=useSpring(x,{stiffness:160,damping:18,mass:.5});
 const sy=useSpring(y,{stiffness:160,damping:18,mass:.5});
 const reduced=useReducedMotion();
 const move=(event:MouseEvent<HTMLAnchorElement>)=>{
  if(reduced||window.matchMedia("(pointer: coarse)").matches)return;
  const rect=event.currentTarget.getBoundingClientRect();
  x.set((event.clientX-rect.left-rect.width/2)*.19);
  y.set((event.clientY-rect.top-rect.height/2)*.21);
 };
 return <motion.div className="magnetic-wrap" style={reduced?{}:{x:sx,y:sy}}>
  <Link href={href} className={className} onMouseMove={move} onMouseLeave={()=>{x.set(0);y.set(0)}}>{children}</Link>
 </motion.div>
}