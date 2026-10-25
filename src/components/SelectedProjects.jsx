import React, { useRef } from 'react'
import { projectCategories } from '../data/projects'

function ProjectCard({ project, onSelectProject }) {
  const videoRef = useRef(null)

  const handleMouseEnter = () => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {})
      }
    }
  }

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <article
      className="project-card project-card-vertical"
      onClick={() => onSelectProject(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelectProject(project)
        }
      }}
      aria-label={`Open project video: ${project.title}`}
    >
      {/* 9:16 Vertical Video Thumbnail Wrapper */}
      <div className="project-thumbnail-wrapper vertical-wrapper">
        <video
          ref={videoRef}
          src={`${project.videoUrl}#t=0.001`}
          poster={project.thumbnail}
          preload="metadata"
          muted
          playsInline
          loop
          className="project-preview-video"
        />

        {/* 9:16 Format Tag */}
        <div className="vertical-format-badge" aria-label="9:16 Vertical Video">
          <span>9:16 REEL</span>
        </div>

        {/* Play Button Overlay */}
        <button
          type="button"
          className="play-overlay-btn"
          tabIndex={-1}
          aria-hidden="true"
        >
          <span className="play-circle">
            <svg
              className="play-icon"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>

        {/* Video Duration Badge */}
        {project.duration && (
          <div className="duration-badge">
            <span>{project.duration}</span>
          </div>
        )}
      </div>

      {/* Card Captions */}
      <div className="project-info">
        <h4 className="project-title">{project.title}</h4>
        <p className="project-category-label">{project.categoryLabel}</p>
      </div>
    </article>
  )
}

export default function SelectedProjects({ onSelectProject }) {
  return (
    <section id="projects" className="projects-section" aria-label="Selected Projects">
      <div className="container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="projects-title-wrap">
            <h2 className="projects-title">
              SELECTED PROJECTS<span className="yellow-dot">.</span>
              <svg
                className="title-highlight-loop"
                viewBox="0 0 420 50"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 10 25 C 80 5, 340 5, 410 25 C 415 38, 320 48, 120 45 C 30 42, 5 30, 25 15"
                  stroke="#F7B62D"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </h2>
          </div>

          <div className="projects-header-info">
            <p className="projects-header-copy">
              A collection of videos across different styles and formats.
              <br className="desktop-br" />
              Edited specifically in 9:16 vertical format for high retention.
            </p>
            <a
              href="#category-01"
              className="view-all-link"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('category-01')
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <span>View All Projects</span>
              <span className="arrow-icon">↗</span>
            </a>
          </div>
        </div>

        {/* Categories List */}
        <div className="categories-list">
          {projectCategories.map((category) => (
            <div
              key={category.id}
              id={`category-${category.id}`}
              className="category-row"
            >
              {/* Category Sidebar / Meta Column */}
              <div className="category-meta">
                <div className="category-number-wrap">
                  <span className="category-number">{category.number}</span>
                  <svg
                    className="number-underline"
                    viewBox="0 0 60 12"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 2 8 C 18 3, 38 10, 58 4"
                      stroke="#F7B62D"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="category-heading-block">
                  <h3 className="category-title">{category.title}</h3>
                  <p className="category-tags">{category.subtitle}</p>
                </div>

                <p className="category-description">{category.description}</p>
              </div>

              {/* Projects Grid / Cards Column */}
              <div
                className={`category-cards-grid vertical-cards-grid ${
                  category.projects.length === 1 ? 'single-card-grid' : 'dual-card-grid'
                }`}
              >
                {category.projects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelectProject={onSelectProject}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
