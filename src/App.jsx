import React, { useState } from 'react'
import { siteConfig } from './data/projects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SelectedProjects from './components/SelectedProjects'
import AboutMe from './components/AboutMe'
import SoftwareTools from './components/SoftwareTools'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import ContactModal from './components/ContactModal'
import './App.css'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const handleOpenProject = (project) => {
    setSelectedProject(project)
    setIsVideoModalOpen(true)
  }

  const handleWatchShowreel = () => {
    if (siteConfig.showreel) {
      setSelectedProject(siteConfig.showreel)
      setIsVideoModalOpen(true)
    }
  }

  const handleCloseVideoModal = () => {
    setIsVideoModalOpen(false)
  }

  const handleOpenContact = () => {
    setIsContactModalOpen(true)
  }

  const handleCloseContact = () => {
    setIsContactModalOpen(false)
  }

  return (
    <div className="portfolio-app">
      {/* Sticky Top Header */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Page Content */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onWatchShowreel={handleWatchShowreel} />

        {/* Selected Projects Gallery */}
        <SelectedProjects onSelectProject={handleOpenProject} />

        {/* Editorial Bottom Trio (About Me, Software Tools, Contact) */}

        {/* About Me and Software Tools */}
        <section
          className="editorial-bottom-section"
          aria-label="About Me and Software Tools"
        >
          <div className="container">
            <div className="editorial-bottom-grid">
              <AboutMe onMoreAboutMe={handleOpenContact} />
              <SoftwareTools />
            </div>
          </div>
        </section>

        {/* Full-width Contact Section below About and Tools */}
        <div className="contact-section-wrapper">
          <div className="container">
            <ContactSection onOpenContact={handleOpenContact} />
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

      {/* Video Playback Modal */}
      {isVideoModalOpen && (
        <VideoModal
          key={selectedProject?.id || 'modal'}
          project={selectedProject}
          isOpen={isVideoModalOpen}
          onClose={handleCloseVideoModal}
        />
      )}

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  )
}
