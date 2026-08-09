import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import ProjectPreview from '../components/ProjectPreview';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <ProjectPreview />
      <Experience />
      <Contact />
    </div>
  );
}
