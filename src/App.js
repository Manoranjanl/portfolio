// src/App.js
import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./components/Navbar";
import HowIWork from "./components/HowIWork";

const App = () => {
  const [theme, setTheme] = useState("light"); // ✅ simple default

  const EMAIL = "manoranjanl8292@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/manoranjanl";
  const GITHUB = "https://github.com/manoranjanl";
  const RESUME_URL =
    "https://drive.google.com/file/d/1UWbMVZQrRVeGD0PfbgchbSh0hGzlcYa6/view?usp=share_link";

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const scrollToSection = useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 72;
    const elementPosition = target.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, []);

  return (
    <div className="page">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavClick={scrollToSection}
      />

      <main>
        {/* HERO */}
        <section className="hero" id="hero">
          <div className="container">
            {/* ✅ Layout simplified: single column; Focus card removed */}
            <div className="hero-simple">
              <div className="badge">
                <span className="badge-dot" />
                Open to Entry-Level Roles
              </div>

              <h1 className="hero-title">
                Software Engineer (New Grad) — Full-Stack & AI/ML
              </h1>

              <p className="hero-subtitle">
                M.S. Computer Science (Cleveland State University, Dec 2025, GPA
                3.5). Built and deployed full-stack applications using React,
                Node/Express, and MongoDB—focused on clean APIs, solid data
                flow, and production deployment.
              </p>

              <div className="hero-meta">
                <span>📍 Cleveland, Ohio · Remote-friendly</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span>🎓 M.S. Computer Science</span>
              </div>
              <br></br>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </button>
                <a
                  className="btn btn-ghost"
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume (PDF)
                </a>
              </div>

              <div className="hero-links">
                <a href="mailto:manoranjanl8292@gmail.com">Email</a>
                <a
                  href="https://www.linkedin.com/in/manoranjanl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/manoranjanl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">About</h2>
              <p className="section-description">
                A quick overview of my background and what I build.
              </p>
            </div>

            <div className="about-grid">
              <div className="card">
                <p className="about-text">
                  I build full-stack web applications with React and
                  Node/Express—designing APIs, integrating databases, and
                  deploying to production (Render).
                </p>
                <p className="about-text">
                  I’m looking for an entry-level role where I can contribute to
                  real features, learn through code reviews, and ship reliable
                  improvements.
                </p>
              </div>

              <div className="card">
                <div className="about-highlights">
                  <div className="about-highlight">
                    <strong>M.S. Computer Science</strong>
                    <span>Cleveland State University</span>
                  </div>

                  <div className="about-highlight">
                    <strong>Undergraduate in CS</strong>
                    <span>Sri Venkateshwara College of Engineering</span>
                  </div>

                  <div className="about-highlight">
                    <strong>Interests</strong>
                    <span>Web, Backend, Databases, Algorithms</span>
                  </div>

                  <div className="about-highlight">
                    <strong>Work Style</strong>
                    <span>
                      Communicate early, ship small, document decisions
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Projects</h2>
              <p className="section-description">
                Projects that demonstrate full-stack development and deployment.
              </p>
            </div>
          </div>

          <div className="projects-grid-wrapper">
            <div className="projects-grid">
              {/* Trading Platform */}
              <article className="card project-card">
                <div className="project-header">
                  <h3 className="project-title">
                    Full-Stack Trading Platform (Zerodha-style Clone)
                  </h3>
                  <span className="project-badge">Full-Stack</span>
                </div>
                <p className="project-tech">
                  React · Node.js · Express · MongoDB
                </p>
                <ul className="project-list">
                  <li>
                    Built REST APIs for core flows and integrated MongoDB
                    persistence.
                  </li>
                  <li>
                    Developed responsive React UI with reusable components.
                  </li>
                  <li>
                    Set up production deployment with environment-based
                    configuration on Render.
                  </li>
                  <li>
                    Structured code for clarity (routes/controllers +
                    predictable data flow).
                  </li>
                </ul>
                <div className="project-footer">
                  <div className="project-actions">
                    <a
                      className="btn btn-primary"
                      href="https://zerodha-clone-frontend-gldw.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="btn btn-ghost"
                      href="https://github.com/Manoranjanl/Zerodha-clone"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>

              {/* Connecta */}
              <article className="card project-card">
                <div className="project-header">
                  <h3 className="project-title">
                    Connecta — video call paltform
                  </h3>
                  <span className="project-badge">Full-Stack</span>
                </div>
                <p className="project-tech">
                  React · Node.js · Express · MongoDB
                </p>
                <ul className="project-list">
                  <li>
                    Built a full-stack app with React UI + Node/Express API +
                    MongoDB.
                  </li>
                  <li>
                    Defined a clean API contract for reliable integration.
                  </li>
                  <li>Improved maintainability with reusable UI components.</li>
                  <li>Deployed to Render and validated end-to-end flows.</li>
                </ul>
                <div className="project-footer">
                  <div className="project-actions">
                    <a
                      className="btn btn-primary"
                      href="https://connecta-frontend.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="btn btn-ghost"
                      href="https://github.com/Manoranjanl/Connecta"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>

              {/* Wanderlust */}
              <article className="card project-card">
                <div className="project-header">
                  <h3 className="project-title">
                    Wanderlust — Travel Listing Web App
                  </h3>
                  <span className="project-badge">Full-Stack</span>
                </div>
                <p className="project-tech">
                  Node.js · Express · MongoDB · EJS
                </p>
                <ul className="project-list">
                  <li>
                    Built CRUD workflows with MongoDB-backed routes and
                    server-rendered views.
                  </li>
                  <li>
                    Implemented validation and error handling for consistent
                    data.
                  </li>
                  <li>Organized routes/controllers for readability.</li>
                  <li>Deployed on Render and verified core flows.</li>
                </ul>
                <div className="project-footer">
                  <div className="project-actions">
                    <a
                      className="btn btn-primary"
                      href="https://wanderlust-ak0d.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                    <a
                      className="btn btn-ghost"
                      href="https://github.com/Manoranjanl/Wanderlust"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>

              {/* KNN */}
              <article className="card project-card">
                <div className="project-header">
                  <h3 className="project-title">
                    Network Traffic Classification using KNN
                  </h3>
                  <span className="project-badge">Machine Learning</span>
                </div>
                <p className="project-tech">Python · Scikit-learn · Pandas</p>
                <ul className="project-list">
                  <li>
                    Built a KNN classifier to label network traffic by
                    application type.
                  </li>
                  <li>
                    Cleaned data, normalized features, and evaluated using
                    train/test split.
                  </li>
                  <li>Reported results using accuracy and confusion matrix.</li>
                  <li>Compared against baseline models for validation.</li>
                </ul>
                <div className="project-footer">
                  <div className="project-actions">
                    <a
                      className="btn btn-ghost"
                      href="https://github.com/Manoranjanl/Network-Traffic-Analysis#"
                      aria-disabled="true"
                    >
                      GitHub (coming soon)
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Skills</h2>
              <p className="section-description">
                Technologies I use to build and ship projects.
              </p>
            </div>

            <div className="skills-grid">
              <div className="card skill-card">
                <h3 className="skill-title">Languages &amp; Frameworks</h3>
                <p className="skill-text">
                  JavaScript (ES6+), React<br></br> Node.js, Express
                </p>
              </div>

              <div className="card skill-card">
                <h3 className="skill-title">Databases</h3>
                <p className="skill-text">MongoDB, PostgreSQL, MySQL</p>
              </div>

              <div className="card skill-card">
                <h3 className="skill-title">Engineering</h3>
                <p className="skill-text">
                  Git/GitHub, REST APIs, CRUD, MVC <br></br> Error Handling,
                  Deployment
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Education</h2>
              <p className="section-description">
                Projects that demonstrate full-stack development and deployment.
              </p>
            </div>
          </div>
          <div className="container">
            <div className="card education-card">
              <h3>Master of Science in Computer Science</h3>

              <div className="education-meta">
                Cleveland State University — December 2025
              </div>

              <div className="education-gpa">GPA: 3.5 / 4.0</div>

              <div className="education-label">Relevant Coursework</div>

              <div className="education-courses">
                Data Structures & Algorithms, Software Engineering, Database
                Systems, Machine Learning, Information Security
              </div>
            </div>
          </div>
        </section>

        {/* HOW I WORK */}
        <HowIWork />

        {/* CONTACT */}
        <section id="contact">
          <div className="container">
            <div className="section-heading">
              <h2 className="section-title">Contact</h2>
              <p className="section-description">
                For entry-level software engineering roles (backend /
                full-stack).
              </p>
            </div>

            <div className="contact-card">
              <p className="contact-intro">
                The fastest way to reach me is via email or LinkedIn. I’m happy
                to share more details about my projects and experience.
              </p>

              <ul className="contact-list">
                <li>
                  <span className="contact-label">Email</span>
                  <a href="mailto:manoranjanl8292@gmail.com">
                    manoranjanl8292@gmail.com
                  </a>
                </li>

                <li>
                  <span className="contact-label">LinkedIn</span>
                  <a
                    href="https://www.linkedin.com/in/manoranjanl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/manoranjanl
                  </a>
                </li>

                <li>
                  <span className="contact-label">GitHub</span>
                  <a
                    href="https://github.com/manoranjanl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/manoranjanl
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="footer-left">
            © 2025 Manoranjan Lakshminarayanappa. All rights reserved.
          </div>

          <div className="footer-right">
            <button
              className="footer-link-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to top
            </button>

            <a href="mailto:manoranjanl36822@gmail.com">Email</a>
            <a
              href="https://www.linkedin.com/in/manoranjanl"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/manoranjanl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
