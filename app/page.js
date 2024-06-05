import Image from 'next/image'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Main/>
      <About/>
      {/* <Skills/> */}
  
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}
