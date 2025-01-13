import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Skill } from "./components/Skill"
import { Project } from "./components/Project"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Skill />
    <Project />
    {/* <Contact /> */}
    <Footer />
   </div>
  );
}