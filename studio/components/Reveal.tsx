"use client";
import type {ReactNode} from "react";
import {motion,useReducedMotion} from "motion/react";
export function Reveal({children,className="",delay=0}: {children:ReactNode;className?:string;delay?:number}){
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced?false:{opacity:0,y:26}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:reduced?0:.7,ease:[.22,1,.36,1],delay:reduced?0:delay}}>{children}</motion.div>;
}