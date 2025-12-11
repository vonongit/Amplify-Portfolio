"use client"

export default function Home() {
  return (
    <>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0f0f1e;
          color: #e0e0e0;
          line-height: 1.6;
        }

        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(15, 15, 30, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.2);
          padding: 20px 0;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .logo {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 1.2em;
          color: white;
        }

        .nav-links {
          display: flex;
          gap: 40px;
        }

        .nav-links a {
          color: #a0a0a0;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s;
          font-size: 0.95em;
        }

        .nav-links a:hover {
          color: #6366f1;
        }

        .hero-dashboard {
          margin-top: 85px;
          padding: 80px 40px;
          max-width: 1400px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 30px;
          margin-bottom: 30px;
        }

        .hero-main {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 60px;
          position: relative;
          overflow: hidden;
        }

        .hero-main::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          100% { transform: rotate(360deg); }
        }

        .hero-main h1 {
          font-size: 4.5em;
          font-weight: 900;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff 0%, #a0a0a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 2;
        }

        .hero-main .tagline {
          font-size: 1.5em;
          color: #a0a0a0;
          margin-bottom: 30px;
          position: relative;
          z-index: 2;
        }

        .hero-stats {
          display: flex;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .stat-icon {
          width: 50px;
          height: 50px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
        }

        .stat-info h3 {
          font-size: 1.8em;
          color: #6366f1;
        }

        .stat-info p {
          font-size: 0.85em;
          color: #888;
        }

        .hero-side {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .info-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
        }

        .info-card h3 {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #fff;
        }

        .info-list {
          list-style: none;
        }

        .info-list li {
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95em;
        }

        .info-list li:last-child {
          border-bottom: none;
        }

        .info-label {
          color: #888;
        }

        .info-value {
          color: #fff;
          font-weight: 600;
        }

        .timeline-section {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .section-title {
          font-size: 2.5em;
          font-weight: 800;
          margin-bottom: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .section-title::before {
          content: '';
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #6366f1, transparent);
        }

        .timeline {
          position: relative;
          padding-left: 40px;
          border-left: 2px solid rgba(99, 102, 241, 0.3);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 40px;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -46px;
          top: 0;
          width: 14px;
          height: 14px;
          background: #6366f1;
          border: 3px solid #0f0f1e;
          border-radius: 50%;
        }

        .timeline-date {
          color: #6366f1;
          font-weight: 600;
          font-size: 0.9em;
          margin-bottom: 10px;
        }

        .timeline-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 30px;
          transition: all 0.3s;
        }

        .timeline-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(10px);
        }

        .timeline-card h3 {
          font-size: 1.5em;
          color: #fff;
          margin-bottom: 10px;
        }

        .timeline-card .role {
          color: #888;
          margin-bottom: 15px;
          font-size: 0.95em;
        }

        .timeline-card p {
          color: #b0b0b0;
          line-height: 1.7;
        }

        .projects-dashboard {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .projects-grid-advanced {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .project-card-advanced {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s;
        }

        .project-card-advanced:hover {
          transform: translateY(-10px);
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 20px 60px rgba(99, 102, 241, 0.2);
        }

        .project-header {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
          padding: 40px 30px;
          position: relative;
        }

        .project-number {
          position: absolute;
          top: 20px;
          right: 30px;
          font-size: 3em;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.1);
        }

        .project-header h3 {
          font-size: 1.8em;
          color: #fff;
          margin-bottom: 10px;
        }

        .project-status {
          display: inline-block;
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 0.8em;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .project-body {
          padding: 30px;
        }

        .project-body p {
          color: #b0b0b0;
          margin-bottom: 25px;
          line-height: 1.7;
        }

        .project-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 25px;
        }

        .metric {
          text-align: center;
          padding: 15px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 10px;
        }

        .metric-value {
          font-size: 1.5em;
          font-weight: 700;
          color: #6366f1;
          display: block;
        }

        .metric-label {
          font-size: 0.8em;
          color: #888;
          margin-top: 5px;
        }

        .tech-stack-advanced {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 25px;
        }

        .tech-badge-advanced {
          background: rgba(99, 102, 241, 0.15);
          color: #a5b4fc;
          padding: 6px 14px;
          border-radius: 15px;
          font-size: 0.8em;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-link-btn {
          background: #6366f1;
          color: white;
          padding: 12px 25px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .project-link-btn:hover {
          background: #7c3aed;
          transform: translateX(5px);
        }

        .skills-matrix {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .skills-categories {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 35px;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 25px;
        }

        .category-icon {
          width: 50px;
          height: 50px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5em;
        }

        .category-header h3 {
          font-size: 1.4em;
          color: #fff;
        }

        .skill-list-advanced {
          list-style: none;
        }

        .skill-list-advanced li {
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          color: #e0e0e0;
          font-weight: 500;
        }

        .skill-list-advanced li:last-child {
          border-bottom: none;
        }

        .contact-dashboard {
          max-width: 1400px;
          margin: 60px auto;
          padding: 0 40px;
        }

        .contact-grid-advanced {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .contact-main {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 50px;
        }

        .contact-main h3 {
          font-size: 2em;
          color: #fff;
          margin-bottom: 20px;
        }

        .contact-main p {
          color: #a0a0a0;
          margin-bottom: 40px;
          font-size: 1.1em;
          line-height: 1.7;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-method {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 25px;
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          transition: all 0.3s;
        }

        .contact-method:hover {
          background: rgba(99, 102, 241, 0.1);
          border-color: #6366f1;
          transform: translateX(10px);
        }

        .contact-method-icon {
          width: 60px;
          height: 60px;
          background: rgba(99, 102, 241, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8em;
        }

        .contact-method-info h4 {
          color: #fff;
          font-size: 1.2em;
          margin-bottom: 5px;
        }

        .contact-method-info p {
          color: #888;
          margin: 0;
          font-size: 0.9em;
        }

        footer {
          max-width: 1400px;
          margin: 80px auto 0;
          padding: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          color: #666;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-main h1 {
            font-size: 3em;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo-area">
            <div className="logo">TM</div>
            <span style={{ color: '#fff', fontWeight: 600 }}>Travon Mayo</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Dashboard */}
      <div className="hero-dashboard">
        <div className="hero-grid">
          <div className="hero-main">
            <h1>Travon Mayo</h1>
            <p className="tagline">Aspiring Cloud Engineer building with AWS Infrastructure, AI & Automation</p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-icon">🚀</div>
                <div className="stat-info">
                  <h3>4+</h3>
                  <p>Projects</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">☁️</div>
                <div className="stat-info">
                  <h3>AWS</h3>
                  <p>Certified</p>
                </div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">⚡</div>
                <div className="stat-info">
                  <h3>100%</h3>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-side">
            <div className="info-card">
              <h3>Quick Info</h3>
              <ul className="info-list">
                <li>
                  <span className="info-label">Experience</span>
                  <span className="info-value">Entry Level</span>
                </li>
                <li>
                  <span className="info-label">Focus</span>
                  <span className="info-value">Cloud, IAC, AI, DevOps, Security</span>
                </li>
                <li>
                  <span className="info-label">Specialization</span>
                  <span className="info-value">AWS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section" id="about">
        <h2 className="section-title">My Journey</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">Current</div>
            <div className="timeline-card">
              <h3>Learning & Building</h3>
              <div className="role">Hands-on Cloud Engineering projects</div>
              <p>Actively building AWS projects, earning certifications, and mastering Infrastructure as Code. Focusing on hands-on experience with real-world scenarios to prepare for cloud engineering roles.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-card">
              <h3>AWS Solution Architect Associate</h3>
              <div className="role">Certification</div>
              <p>Comprehensive understanding of AWS services and technologies. Demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2025</div>
            <div className="timeline-card">
              <h3>Cloud Engineer Academy</h3>
              <div className="role">Cloud Learning Path</div>
              <p>Fully commited learning path for AWS cloud studies on Security, CI/CD pipeline, version control, automation, DevOps, Infrastructure as Code etc..</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024-Current</div>
            <div className="timeline-card">
              <h3>Technical Support Specialist</h3>
              <div className="role">Skanska Inc.</div>
              <p>Manage enterprise identity and access management using Azure Entra ID and Microsoft Active Directory. Responsible for user lifecycle administration including onboarding, offboarding, and permissions management.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2024</div>
            <div className="timeline-card">
              <h3>AWS Cloud Practitioner</h3>
              <div className="role">Certification</div>
              <p>Fundamental understanding of IT services and their uses in the AWS Cloud. Demonstrates cloud fluency and foundational AWS knowledge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Dashboard */}
      <div className="projects-dashboard" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid-advanced">
          {/* Project 1 - Infrastructure as Code Migration */}
          <div className="project-card-advanced">
            <div className="project-header">
              <span className="project-number">01</span>
              <h3>Infrastructure as Code Migration</h3>
              <span className="project-status">✓ Completed</span>
            </div>
            <div className="project-body">
              <p>Migrated Console-created AWS infrastructure to fully automated Infrastructure as Code using AWS CDK. Improved deployment consistency, version control, and disaster recovery.</p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">20+</span>
                  <span className="metric-label">Resources</span>
                </div>
                <div className="metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Time Saved</span>
                </div>
                <div className="metric">
                  <span className="metric-value">CDK</span>
                  <span className="metric-label">Framework</span>
                </div>
              </div>

              <div className="tech-stack-advanced">
                <span className="tech-badge-advanced">AWS CDK</span>
                <span className="tech-badge-advanced">TypeScript</span>
                <span className="tech-badge-advanced">CloudFormation</span>
                <span className="tech-badge-advanced">CI/CD</span>
              </div>

              <div className="project-footer">
                <a href="https://github.com/vonongit/TechHealth-CDK-Migration" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 - AI-Powered IT Support Chatbot */}
          <div className="project-card-advanced">
            <div className="project-header">
              <span className="project-number">02</span>
              <h3>AI-Powered IT Support Automation</h3>
              <span className="project-status">✓ Completed</span>
            </div>
            <div className="project-body">
              <p>Engineered serverless AI chatbot using AWS Bedrock (Claude) to automate 5 high-frequency IT support scenarios, reducing estimated ticket volume by 30-40% while maintaining operational costs under $3/month.</p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">30-40%</span>
                  <span className="metric-label">Ticket Reduction</span>
                </div>
                <div className="metric">
                  <span className="metric-value">95%</span>
                  <span className="metric-label">Cost Optimized</span>
                </div>
                <div className="metric">
                  <span className="metric-value">2-3 min</span>
                  <span className="metric-label">Redeploy Time</span>
                </div>
              </div>

              <div className="tech-stack-advanced">
                <span className="tech-badge-advanced">AWS Bedrock</span>
                <span className="tech-badge-advanced">Lambda</span>
                <span className="tech-badge-advanced">API Gateway</span>
                <span className="tech-badge-advanced">CDK</span>
                <span className="tech-badge-advanced">Python</span>
                <span className="tech-badge-advanced">TypeScript</span>
              </div>

              <div className="project-footer">
                <a href="https://github.com/vonongit/AWS-Bedrock-AI-Chatbot-Project" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - AWS Portfolio Website */}
          <div className="project-card-advanced">
            <div className="project-header">
              <span className="project-number">03</span>
              <h3>AWS Portfolio Website</h3>
              <span className="project-status">✓ Completed</span>
            </div>
            <div className="project-body">
              <p>Serverless portfolio website using Next.js, S3, CloudFront, and Route 53 using AWS CDK. Ensured secure origin access with CloudFront, HTTPS encryption, and automated deployment pipelines with GitHub and Amplify.</p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">$2</span>
                  <span className="metric-label">Per Month</span>
                </div>
                <div className="metric">
                  <span className="metric-value">99.9%</span>
                  <span className="metric-label">Uptime</span>
                </div>
                <div className="metric">
                  <span className="metric-value">Fast</span>
                  <span className="metric-label">CDN</span>
                </div>
              </div>

              <div className="tech-stack-advanced">
                <span className="tech-badge-advanced">Next.js</span>
                <span className="tech-badge-advanced">S3</span>
                <span className="tech-badge-advanced">CloudFront</span>
                <span className="tech-badge-advanced">Route 53</span>
                <span className="tech-badge-advanced">CDK</span>
              </div>

              <div className="project-footer">
                <a href="https://github.com/vonongit/Amplify-Portfolio" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 - IAM Security Implementation */}
          <div className="project-card-advanced">
            <div className="project-header">
              <span className="project-number">04</span>
              <h3>IAM Security Implementation</h3>
              <span className="project-status">✓ Completed</span>
            </div>
            <div className="project-body">
              <p>Comprehensive IAM security implementation using Terraform. Created role-based access controls, service control policies, and automated permission management following AWS best practices.</p>
              
              <div className="project-metrics">
                <div className="metric">
                  <span className="metric-value">15+</span>
                  <span className="metric-label">Policies</span>
                </div>
                <div className="metric">
                  <span className="metric-value">100%</span>
                  <span className="metric-label">Secure</span>
                </div>
                <div className="metric">
                  <span className="metric-value">IaC</span>
                  <span className="metric-label">Automated</span>
                </div>
              </div>

              <div className="tech-stack-advanced">
                <span className="tech-badge-advanced">AWS IAM</span>
                <span className="tech-badge-advanced">Terraform</span>
                <span className="tech-badge-advanced">Security</span>
                <span className="tech-badge-advanced">Least Privilege</span>
              </div>

              <div className="project-footer">
                <a href="https://github.com/vonongit/StartUpCo-IAM-Security-Project" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="skills-matrix" id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-categories">
          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">☁️</div>
              <h3>Cloud Platforms</h3>
            </div>
            <ul className="skill-list-advanced">
              <li>AWS S3</li>
              <li>CloudFront</li>
              <li>Route 53</li>
              <li>AWS IAM</li>
              <li>Lambda</li>
              <li>AWS Bedrock</li>
              <li>API Gateway</li>
            </ul>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">🔧</div>
              <h3>Infrastructure as Code</h3>
            </div>
            <ul className="skill-list-advanced">
              <li>Terraform</li>
              <li>AWS CDK</li>
              <li>CloudFormation</li>
            </ul>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">💻</div>
              <h3>Programming</h3>
            </div>
            <ul className="skill-list-advanced">
              <li>TypeScript</li>
              <li>Python</li>
              <li>Next.js/React</li>
              <li>Git/GitHub</li>
            </ul>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <div className="category-icon">🔒</div>
              <h3>Security & Best Practices</h3>
            </div>
            <ul className="skill-list-advanced">
              <li>Cloud Security</li>
              <li>IAM Policies</li>
              <li>Least Privilege</li>
              <li>API Security</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact Dashboard */}
      <div className="contact-dashboard" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid-advanced">
          <div className="contact-main">
            <h3>Let&apos;s Connect</h3>
            <p>I&apos;m currently seeking entry-level cloud engineering or DevOps opportunities. If you&apos;re looking for someone experienced with AWS, infrastructure automation, and building secure, scalable solutions, I&apos;d love to hear from you!</p>
            
            <div className="contact-methods">
              <a href="https://github.com/vonongit" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method-icon">💻</div>
                <div className="contact-method-info">
                  <h4>GitHub</h4>
                  <p>Check out my projects and code</p>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/travon-mayo/" target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method-icon">💼</div>
                <div className="contact-method-info">
                  <h4>LinkedIn</h4>
                  <p>Connect professionally</p>
                </div>
              </a>
              <a href="mailto:travondm2@gmail.com" className="contact-method">
                <div className="contact-method-icon">✉️</div>
                <div className="contact-method-info">
                  <h4>Email</h4>
                  <p>travondm2@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <p>Built with Next.js, and AWS Amplify with AWS CDK | © 2025 Travon Mayo</p>
        <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Designed & Developed with ☁️</p>
      </footer>
    </>
  );
}