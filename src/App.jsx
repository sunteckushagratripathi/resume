import { useState } from 'react'
import './App.css'
import resumeData from './resumeData.js'
import Chatbot from './components/Chatbot.jsx'

function App() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Awards', icon: '🏆' },
    { id: 'accomplishments', label: 'Accomplishments', icon: '🌟' }
  ]

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId)
    // Smooth scroll to content section
    setTimeout(() => {
      const contentElement = document.querySelector('.resume-content')
      if (contentElement) {
        contentElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        })
      }
    }, 100)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="content-section">
            <h2>About Me</h2>
            <div className="about-content">
              <p className="summary">{resumeData.summary}</p>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href={`mailto:${resumeData.personalInfo.email}`}>{resumeData.personalInfo.email}</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <span>{resumeData.personalInfo.phone}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">Location:</span>
                <span>{resumeData.personalInfo.location}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">LinkedIn:</span>
                <a href={`https://${resumeData.personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.linkedin}
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">GitHub:</span>
                <a href={`https://${resumeData.personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                  {resumeData.personalInfo.github}
                </a>
              </div>
              {resumeData.personalInfo.website && (
                <div className="contact-item">
                  <span className="contact-label">Website:</span>
                  <a href={`https://${resumeData.personalInfo.website}`} target="_blank" rel="noopener noreferrer">
                    {resumeData.personalInfo.website}
                  </a>
                </div>
              )}
            </div>
          </div>
        )
      
      case 'experience':
        return (
          <div className="content-section">
            <h2>Professional Experience</h2>
            {resumeData.experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="job-header">
                  <h3>{job.position}</h3>
                  <span className="duration">{job.duration}</span>
                </div>
                <h4 className="company">{job.company}</h4>
                <ul className="responsibilities">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      
      case 'skills':
        return (
          <div className="content-section">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              {Object.entries(resumeData.skills).map(([category, skillList]) => (
                <div key={category} className="skill-category">
                  <h3>{category}</h3>
                  <div className="skill-tags">
                    {skillList.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'projects':
        return (
          <div className="content-section">
            <h2>Featured Projects</h2>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  <strong>Technologies:</strong>
                  <div className="tech-tags">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="project-highlights">
                  <strong>Key Achievements:</strong>
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )
      
      case 'education':
        return (
          <div className="content-section">
            <h2>Education</h2>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <h3>{edu.degree}</h3>
                <div className="school-info">
                  <span className="school">{edu.school}</span>
                  <span className="year">{edu.year}</span>
                </div>
                {edu.location && <p className="location">{edu.location}</p>}
                {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        )
      
      case 'certifications':
        return (
          <div className="content-section">
            <h2>Certifications</h2>
            <div className="certifications-grid">
              {resumeData.certifications.map((cert, index) => (
                <div key={index} className="certification-item">
                  <h3>{cert.name}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                  <span className="cert-year">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>
        )
      
      case 'accomplishments':
        return (
          <div className="content-section">
            <h2>Accomplishments</h2>
            <div className="accomplishments-list">
              {resumeData.accomplishments.map((accomplishment, index) => (
                <div key={index} className="accomplishment-item">
                  <p>{accomplishment}</p>
                </div>
              ))}
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="resume-container">
      <header className="resume-header">
        <div className="header-content">
          {resumeData.personalInfo.profileImage && (
            <div className="profile-image-container">
              <img 
                src={resumeData.personalInfo.profileImage} 
                alt={`${resumeData.personalInfo.name} Profile`}
                className="profile-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          <div className="header-text">
            <h1>{resumeData.personalInfo.name}</h1>
            <p className="title">{resumeData.personalInfo.title}</p>
          </div>
        </div>
      </header>
      
      <nav className="resume-nav">
        {sections.map(section => (
          <button
            key={section.id}
            className={`nav-button ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => handleSectionClick(section.id)}
          >
            <span className="nav-icon">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </nav>
      
      <main className="resume-content">
        {renderContent()}
      </main>
      
      <footer className="resume-footer">
        <p>© 2025 Kushagra Tripathi. All rights reserved. | Built with React & Vite | Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
      
      {/* Chatbot Component */}
      <Chatbot />
    </div>
  )
}

export default App
