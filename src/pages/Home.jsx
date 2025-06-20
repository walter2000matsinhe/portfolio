import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import ProjectsSection from '../components/ProjectsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <ThemeToggle/>
      <NavBar/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
