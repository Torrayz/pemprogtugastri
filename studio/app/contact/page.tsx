import type {Metadata} from "next";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {ContactExperience} from "@/components/ContactExperience";
export const metadata:Metadata={title:"Contact / Start a Conversation",description:"Contact Torrayz privately about web development, technology projects, and creative digital experiences."};
export default function ContactPage(){return <><Navbar/><ContactExperience/><Footer/></>}