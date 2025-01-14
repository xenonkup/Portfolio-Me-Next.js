import { Navbar } from "./components/Navbar"
import { Hero } from "./components/Hero"
import { Skill } from "./components/Skill"
import { Project } from "./components/Project"
import { Add } from "./components/Add"
import { Footer } from "./components/Footer"

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Skill />
    <Project />
    <Add />
    <Footer />
   </div>
  );
}