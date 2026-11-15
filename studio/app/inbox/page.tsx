import type {Metadata} from "next";
import {Navbar} from "@/components/Navbar";
import {Footer} from "@/components/Footer";
import {StudioInbox} from "@/components/StudioInbox";
export const metadata:Metadata={title:"Studio Inbox / Private",robots:{index:false,follow:false},description:"Private TORRAYZ STUDIO message inbox."};
export default function InboxPage(){return <><Navbar/><main className="inner-main"><StudioInbox/></main><Footer/></>}