import React from 'react'
import { softwareTools } from '../data/projects'

export default function SoftwareTools() {
  return (
    <div className="tools-block" aria-label="Software and Editing Tools">
      <h3 className="tools-heading">TOOLS I USE</h3>

      <div className="tools-grid">
        {softwareTools.map((tool) => (
          <div key={tool.name} className="tool-card">
            {/* Tool Icon */}
            <div className="tool-icon-wrapper">
              {tool.shortName === 'Pr' && (
                <div className="adobe-badge badge-pr">
                  <span>Pr</span>
                </div>
              )}
              {tool.shortName === 'Ae' && (
                <div className="adobe-badge badge-ae">
                  <span>Ae</span>
                </div>
              )}
              {tool.shortName === 'Ps' && (
                <div className="adobe-badge badge-ps">
                  <span>Ps</span>
                </div>
              )}
            </div>

            {/* Tool Names */}
            <div className="tool-details">
              <span className="tool-name">{tool.name}</span>
              <span className="tool-specialty">{tool.specialty}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
