import React, { useState, useEffect, useRef } from 'react'

export default function VideoModal({ project, isOpen, onClose }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isPlayingSim, setIsPlayingSim] = useState(true)
  const [simProgress, setSimProgress] = useState(25)
  const [isMuted, setIsMuted] = useState(true)

  const videoRef = useRef(null)
  const modalRef = useRef(null)
  const previousFocusRef = useRef(null)

  // Save previous focus and trap focus inside modal
  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement
      document.body.style.overflow = 'hidden'

      // Focus close button on mount
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('.modal-close-btn')
        closeBtn?.focus()
      }, 50)
    } else {
      document.body.style.overflow = ''
      if (previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') {
        onClose()
      }
      // Tab trapping
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return

        const firstElement = focusable[0]
        const lastElement = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  // Simulation timer for fallback preview mode
  useEffect(() => {
    if (hasError && isPlayingSim) {
      const interval = setInterval(() => {
        setSimProgress((prev) => (prev >= 100 ? 0 : prev + 1))
      }, 300)
      return () => clearInterval(interval)
    }
  }, [hasError, isPlayingSim])

  if (!isOpen || !project) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleVideoCanPlay = () => {
    setIsLoading(false)
  }

  const handleVideoError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  const isVertical = project.aspectRatio === '9/16' || true

  return (
    <div
      className="video-modal-backdrop"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
      ref={modalRef}
    >
      <div className={`video-modal-container ${isVertical ? 'vertical-player-modal' : ''}`}>
        {/* Modal Top Bar */}
        <div className="video-modal-header">
          <div className="modal-header-text">
            <span className="modal-badge">{isVertical ? '9:16 Vertical Reel' : (project.categoryLabel || 'Showreel')}</span>
            <h3 id="video-modal-title" className="modal-title">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close video player"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Video Player Area */}
        <div className={`video-player-wrap ${isVertical ? 'vertical-player-wrap' : ''}`}>
          {isLoading && (
            <div className="video-loading-overlay">
              <div className="editorial-spinner" aria-label="Loading video..."></div>
              <span>Loading Media...</span>
            </div>
          )}

          {!hasError ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.thumbnail}
              controls
              playsInline
              preload="auto"
              autoPlay
              className={`video-element ${isVertical ? 'vertical-video-element' : ''}`}
              onCanPlay={handleVideoCanPlay}
              onError={handleVideoError}
            >
              <source src={project.videoUrl} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          ) : (
            /* Graceful Fallback Interactive Preview Player */
            <div className="interactive-preview-player">
              <div
                className="preview-poster"
                style={{ backgroundImage: `url(${project.thumbnail})` }}
              >
                {/* Dark Vignette Overlay */}
                <div className="preview-vignette"></div>

                {/* Simulated Audio Waveform & Status */}
                <div className="preview-playback-hud">
                  <div className="hud-top">
                    <span className="hud-rec-tag">● 4K PRORES 422 HQ</span>
                    <span className="hud-timecode">
                      00:01:{Math.floor(simProgress * 0.6).toString().padStart(2, '0')} / {project.duration || '03:00'}
                    </span>
                  </div>

                  {/* Sound Waveform Visualization */}
                  <div className="hud-waveform">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <span
                        key={i}
                        className="waveform-bar"
                        style={{
                          height: isPlayingSim
                            ? `${20 + Math.sin(i * 0.4 + simProgress * 0.2) * 20 + (i % 5) * 6}%`
                            : '20%',
                          opacity: (i / 36) * 100 <= simProgress ? 1 : 0.35,
                        }}
                      ></span>
                    ))}
                  </div>

                  {/* HUD Interactive Controls */}
                  <div className="hud-controls">
                    <button
                      type="button"
                      className="hud-ctrl-btn"
                      onClick={() => setIsPlayingSim(!isPlayingSim)}
                      aria-label={isPlayingSim ? 'Pause preview' : 'Play preview'}
                    >
                      {isPlayingSim ? '❚❚ Pause' : '▶ Play'}
                    </button>

                    <div className="hud-seek-bar">
                      <div
                        className="hud-seek-fill"
                        style={{ width: `${simProgress}%` }}
                      ></div>
                    </div>

                    <button
                      type="button"
                      className="hud-ctrl-btn"
                      onClick={() => setIsMuted(!isMuted)}
                      aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                      {isMuted ? '🔇 Muted' : '🔊 Sound'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Informative Editor Banner */}
              <div className="preview-info-banner">
                <div className="banner-icon">🎬</div>
                <div className="banner-copy">
                  <strong>Media Path Ready:</strong> <code>{project.videoUrl}</code>
                  <p>
                    Local video is currently in preview mode. To link your final edit, drop your file in <code>public{project.videoUrl}</code> or update the URL in <code>src/data/projects.js</code> to an external Vimeo, YouTube, or AWS S3 link.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Project Metadata Footer */}
        <div className="video-modal-footer">
          <p className="modal-description">{project.description}</p>
          {project.tools && (
            <div className="modal-tools-list">
              <span className="tools-title">Tools & Techniques:</span>
              {project.tools.map((tool) => (
                <span key={tool} className="tool-pill">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
