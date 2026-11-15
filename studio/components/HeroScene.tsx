"use client";
import dynamic from "next/dynamic";
import {useEffect,useState} from "react";
import { Pause, Play } from "lucide-react";
const ChromeCanvas=dynamic(()=>import("./ChromeCanvas"),{ssr:false,loading:()=>null});
export function HeroScene(){
  const [supported,setSupported]=useState(false),[enabled,setEnabled]=useState(true);
  useEffect(()=>{
    const media=window.matchMedia("(prefers-reduced-motion: reduce)");
    let webgl=false;
    try{const c=document.createElement("canvas");webgl=!!(c.getContext("webgl2")||c.getContext("webgl"));}catch{}
    const update=()=>{setSupported(webgl&&!media.matches&&window.innerWidth>=700);};
    update();media.addEventListener("change",update);window.addEventListener("resize",update);
    return()=>{media.removeEventListener("change",update);window.removeEventListener("resize",update);};
  },[]);
  const show3D=supported&&enabled;
  return <div className="hero-visual" aria-label="Stylized chrome T emblem with orbital rings">
    <div className="visual-sphere visual-sphere-a"/><div className="visual-sphere visual-sphere-b"/>
    <div className="visual-orbit orbit-outer"/><div className="visual-orbit orbit-inner"/>
    <div className="hero-sculpture"><div className={`hero-sculpture-fallback${show3D?" fade-fallback":""}`} style={{backgroundImage:"url(/hero-mark.svg)"}}/>
      {show3D&&<ChromeCanvas/>}
    </div>
    <div className="visual-ground"/><div className="floating-spec spec-top">01 / DIGITAL FORM</div><div className="floating-spec spec-bottom">CHROME / MOTION / LIGHT</div>
    {supported&&<button className="visual-motion-control" aria-label={enabled?"Pause 3D animation":"Resume 3D animation"} type="button" onClick={()=>setEnabled(!enabled)}>{enabled?<Pause size={14}/>:<Play size={14}/>}<span>3D {enabled?"ON":"OFF"}</span></button>}
  </div>;
}