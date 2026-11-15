"use client";
import {useEffect,useState} from "react";
import {motion,useMotionValue,useReducedMotion,useSpring} from "motion/react";
export function PointerAura(){
 const reduced=useReducedMotion();const [ready,setReady]=useState(false);
 const x=useMotionValue(-400),y=useMotionValue(-400);
 const smoothX=useSpring(x,{stiffness:85,damping:25});
 const smoothY=useSpring(y,{stiffness:85,damping:25});
 useEffect(()=>{
  if(reduced||!window.matchMedia("(pointer:fine)").matches)return;
  setReady(true);
  const move=(e:PointerEvent)=>{x.set(e.clientX);y.set(e.clientY)};
  window.addEventListener("pointermove",move,{passive:true});
  return()=>window.removeEventListener("pointermove",move);
 },[reduced,x,y]);
 if(reduced||!ready)return null;
 return <motion.div aria-hidden="true" className="pointer-aura" style={{x:smoothX,y:smoothY}}/>;
}