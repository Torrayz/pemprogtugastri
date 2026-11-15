"use client";
import {motion,useReducedMotion} from "motion/react";
const words=["CODE","DESIGN","MOTION","RESEARCH","SYSTEMS","3D","EXPERIMENTS"];
export function MarqueeRibbon(){const reduced=useReducedMotion();return <section className="studio-ribbon" aria-label="Areas of exploration"><div className="studio-ribbon-inner">{[0,1].map(i=><motion.div key={i} className="studio-ribbon-track" aria-hidden={i===1} animate={reduced?{}:{x:["0%","-100%"]}} transition={{duration:28,ease:"linear",repeat:Infinity}}>{words.map((w,j)=><span key={w+j}>{w}<b>✳</b></span>)}</motion.div>)}</div></section>}