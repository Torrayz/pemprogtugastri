"use client";
import Link from "next/link";
import {ArrowUpRight, Box, Flower2, MonitorPlay, Orbit, Sparkles} from "lucide-react";
import {Reveal} from "./Reveal";
const items=[
 {number:"01",label:"WEBGL / 3D",title:"Form studies",description:"Eksplorasi cahaya, material, dan gerak objek dalam ruang tiga dimensi.",icon:Orbit,className:"lab-orbit"},
 {number:"02",label:"CSS / MOTION",title:"Organic motion",description:"Komposisi animasi yang responsif terhadap preferensi gerak pengguna.",icon:Flower2,className:"lab-organic"},
 {number:"03",label:"INTERACTION",title:"Micro moments",description:"Transisi, feedback, dan detail interaktif yang mendukung alur pengguna.",icon:Sparkles,className:"lab-micro"}
];
export function Experiments(){return <section className="experiments-section" id="experiments"><div className="container"><Reveal><div className="section-heading"><div><p className="eyebrow"><span className="three-slashes">///</span> THE PLAYGROUND</p><h2>BEYOND <span>THE CODE</span><b> /</b></h2></div><Link className="text-link" href="/lab">Visit the Lab <ArrowUpRight size={17}/></Link></div></Reveal><div className="experiment-grid">{items.map(item=><Reveal key={item.number}><div className={`experiment-card ${item.className}`}><div className="experiment-head"><span>{item.number} / EXPERIMENT</span><span><item.icon size={19}/></span></div><div className="experiment-visual"><div className="exp-shape"/><div className="exp-ring exp-ring-a"/><div className="exp-ring exp-ring-b"/></div><span className="project-kicker">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></div></Reveal>)}</div></div></section>}