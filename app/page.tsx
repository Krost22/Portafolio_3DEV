import dynamic from "next/dynamic"

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false })
const Projects = dynamic(() => import("@/components/Projects"), { ssr: false })
const About = dynamic(() => import("@/components/About"), { ssr: false })
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false })
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false })
const Contact = dynamic(() => import("@/components/Contact"), { ssr: false })
const FloatingContact = dynamic(() => import("@/components/FloatingContact"), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Testimonials />
      <Contact />
      <FloatingContact />
    </main>
  )
}

