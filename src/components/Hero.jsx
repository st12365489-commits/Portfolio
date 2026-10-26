import React from 'react'
import { siteConfig } from '../data/projects'

export default function Hero({ onWatchShowreel }) {
  const scrollToProjects = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById('projects')
    if (targetElement) {
      const headerEl = document.querySelector('.site-header')
      const navHeight = headerEl ? headerEl.offsetHeight : 72
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      <div className="container hero-container">
        {/* Left Editorial Copy */}
        <div className="hero-content">
          {/* Eyebrow Label */}
          <div className="hero-eyebrow">
            <span>{siteConfig.role}</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline">
            GOOD
            <br />
            STORIES
            <br />
            DESERVE
            <br />
            <span className="headline-highlight">
              GREAT EDITING.
              <svg
                className="headline-underline"
                viewBox="0 0 320 20"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 4 14 C 70 8, 160 16, 316 10"
                  stroke="#F7B62D"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="hero-copy">{siteConfig.supportingCopy}</p>

          {/* Call to Actions */}
          <div className="hero-actions">
            {siteConfig.showreel ? (
              <button
                type="button"
                className="btn-primary btn-showreel"
                onClick={onWatchShowreel}
                aria-label="Watch Showreel modal"
              >
                <span className="play-triangle" aria-hidden="true">▶</span>
                <span>Watch Showreel</span>
                <span className="chevron-right" aria-hidden="true">›</span>
              </button>
            ) : null}

            <a
              href="#projects"
              className="btn-outline btn-view-work"
              onClick={scrollToProjects}
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Right Editorial Portrait Composition */}
        <div className="hero-portrait-wrap">
          <div className="portrait-composition">
            <img
              src="/images/profile.svg"
              alt="Suraj Thakur - Video Editor & Storyteller portrait"
              className="editor-portrait-img"
              width="560"
              height="640"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
