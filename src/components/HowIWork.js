// src/components/HowIWork.js
import React from "react";

const HowIWork = () => {
  return (
    <section id="how-i-work" className="how-i-work">
      <div className="container">
        {/* ✅ Removed repeated "How I Work" label/title duplication */}
        <div className="section-heading">
          <h2 className="section-title">How I Work</h2>
          <p className="section-description">
            How I learn, collaborate, and solve problems in a practical way.
          </p>
        </div>

        <div className="faq-grid">
          <article className="card faq-card">
            <h3 className="faq-question">How do you learn new technologies?</h3>
            <p className="faq-answer">
              I start with official documentation, then build a small prototype
              to confirm the fundamentals. I take notes and restate concepts in
              simple words so I can explain them clearly later.
            </p>
          </article>

          <article className="card faq-card">
            <h3 className="faq-question">How do you work in a team?</h3>
            <p className="faq-answer">
              I communicate early, push small changes, and keep progress visible
              through Git/GitHub. I ask clarifying questions upfront, respect
              deadlines, and use feedback to improve quickly.
            </p>
          </article>

          <article className="card faq-card">
            <h3 className="faq-question">
              What is your approach to problem-solving?
            </h3>
            <p className="faq-answer">
              I clarify requirements first, then break work into smaller steps.
              I build a working baseline and iterate using logs, debugging
              tools, and tests instead of guessing.
            </p>
          </article>

          <article className="card faq-card">
            <h3 className="faq-question">
              What kind of roles are you looking for?
            </h3>
            <p className="faq-answer">
              Entry-level backend or full-stack roles focused on APIs, web apps,
              and data-driven systems. I’m open to AI/ML-adjacent work where I
              can apply strong engineering fundamentals.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
