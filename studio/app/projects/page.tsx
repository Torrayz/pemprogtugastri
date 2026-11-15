import type {Metadata} from "next";
import {Navbar} from "@/components/Navbar";
import {Archive} from "@/components/Archive";
import {SelectedWork} from "@/components/SelectedWork";
import {Footer} from "@/components/Footer";
export const metadata:Metadata={title:"Projects & Public GitHub Archive",description:"Explore selected case studies and an auto-updated public repository archive from Torrayz GitHub."};
export default function ProjectsPage(){return <><Navbar/><main className="inner-main"><div className="container inner-hero"><p className="eyebrow">WORK / OPEN PROJECTS</p><h1>AN ARCHIVE OF<br/><span>IDEAS IN MOTION.</span></h1><p>Studi kasus, latihan, dan eksperimen. Lihat proyek unggulan atau jelajahi arsip repository publik yang diperbarui dari GitHub.</p></div><SelectedWork/><Archive full/></main><Footer/></>}