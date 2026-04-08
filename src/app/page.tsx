import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
// import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="max-w-5xl mx-auto px-5 sm:px-8">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Process />
        <Projects />
        {/* <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}
