<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travon Mayo - Cloud Engineer Portfolio</title>
    <style>
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

        /* Navigation Bar */
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

        /* Hero Dashboard */
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

        /* Experience Timeline */
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

        /* Projects Dashboard */
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

        /* Skills Matrix */
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

        /* Resume Section */
        .resume-section {
            max-width: 1400px;
            margin: 60px auto;
            padding: 0 40px;
        }

        .resume-container {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 60px;
        }

        .resume-header {
            text-align: center;
            margin-bottom: 60px;
            padding-bottom: 40px;
            border-bottom: 2px solid rgba(99, 102, 241, 0.3);
        }

        .resume-header h1 {
            font-size: 3.5em;
            color: #fff;
            margin-bottom: 15px;
        }

        .resume-header .title {
            font-size: 1.5em;
            color: #6366f1;
            margin-bottom: 20px;
        }

        .resume-header .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            color: #a0a0a0;
            font-size: 1em;
        }

        .resume-header .contact-info a {
            color: #6366f1;
            text-decoration: none;
        }

        .resume-header .contact-info a:hover {
            text-decoration: underline;
        }

        .resume-section-block {
            margin-bottom: 50px;
        }

        .resume-section-block:last-child {
            margin-bottom: 0;
        }

        .resume-section-title {
            font-size: 2em;
            color: #6366f1;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 2px solid rgba(99, 102, 241, 0.3);
        }

        .resume-item {
            margin-bottom: 35px;
            padding-left: 30px;
            border-left: 3px solid rgba(99, 102, 241, 0.3);
        }

        .resume-item:last-child {
            margin-bottom: 0;
        }

        .resume-item-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-bottom: 10px;
        }

        .resume-item h3 {
            font-size: 1.5em;
            color: #fff;
        }

        .resume-date {
            color: #6366f1;
            font-weight: 600;
            font-size: 0.95em;
        }

        .resume-subtitle {
            color: #a0a0a0;
            margin-bottom: 15px;
            font-size: 1.05em;
        }

        .resume-description {
            color: #b0b0b0;
            line-height: 1.7;
            margin-bottom: 15px;
        }

        .resume-achievements {
            list-style: none;
            margin-top: 15px;
        }

        .resume-achievements li {
            padding: 8px 0 8px 25px;
            position: relative;
            color: #b0b0b0;
            line-height: 1.6;
        }

        .resume-achievements li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: #6366f1;
            font-weight: bold;
        }

        .resume-skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .resume-skill-category {
            background: rgba(255, 255, 255, 0.03);
            padding: 25px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .resume-skill-category h4 {
            color: #6366f1;
            font-size: 1.2em;
            margin-bottom: 15px;
        }

        .resume-skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .resume-skill-tag {
            background: rgba(99, 102, 241, 0.15);
            color: #a5b4fc;
            padding: 6px 14px;
            border-radius: 15px;
            font-size: 0.9em;
            border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .download-resume-btn {
            display: inline-block;
            background: #6366f1;
            color: white;
            padding: 15px 40px;
            border-radius: 12px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1em;
            margin-top: 40px;
            transition: all 0.3s;
        }

        .download-resume-btn:hover {
            background: #7c3aed;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(99, 102, 241, 0.3);
        }

        /* Certifications Section */
        .certifications-section {
            max-width: 1400px;
            margin: 60px auto;
            padding: 0 40px;
        }

        .cert-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
            max-width: 900px;
            margin: 0 auto;
        }

        .cert-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
            display: flex;
            gap: 20px;
            transition: all 0.3s;
            text-decoration: none;
            color: inherit;
        }

        .cert-card:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(99, 102, 241, 0.5);
            transform: translateY(-5px);
            cursor: pointer;
        }

        .cert-badge {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #6366f1, #a855f7);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2em;
            flex-shrink: 0;
        }

        .cert-info h4 {
            font-size: 1.2em;
            color: #fff;
            margin-bottom: 8px;
        }

        .cert-info .cert-issuer {
            color: #888;
            font-size: 0.9em;
            margin-bottom: 8px;
        }

        .cert-status {
            display: inline-block;
            background: rgba(99, 102, 241, 0.2);
            color: #a5b4fc;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.75em;
        }

        /* Contact Dashboard */
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

        /* Footer */
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

            .resume-item-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav>
        <div class="nav-container">
            <div class="logo-area">
                <div class="logo">TM</div>
                <span style="color: #fff; font-weight: 600;">Travon Mayo</span>
            </div>
            <div class="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#resume">Resume</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    </nav>

    <!-- Hero Dashboard -->
    <div class="hero-dashboard">
        <div class="hero-grid">
            <div class="hero-main">
                <h1>Travon Mayo</h1>
                <p class="tagline">Cloud Engineer specializing in AWS Infrastructure & Automation</p>
                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-icon">🚀</div>
                        <div class="stat-info">
                            <h3>3+</h3>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">☁️</div>
                        <div class="stat-info">
                            <h3>AWS</h3>
                            <p>Certified</p>
                        </div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">⚡</div>
                        <div class="stat-info">
                            <h3>100%</h3>
                            <p>Success Rate</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-side">
                <div class="info-card">
                    <h3>Quick Info</h3>
                    <ul class="info-list">
                        <li>
                            <span class="info-label">Experience</span>
                            <span class="info-value">Entry Level</span>
                        </li>
                        <li>
                            <span class="info-label">Focus</span>
                            <span class="info-value">Cloud/IAC/DevOps/Security</span>
                        </li>
                        <li>
                            <span class="info-label">Specialization</span>
                            <span class="info-value">AWS</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Timeline Section -->
    <div class="timeline-section" id="about">
        <h2 class="section-title">My Journey</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">Current</div>
                <div class="timeline-card">
                    <h3>Learning & Building</h3>
                    <div class="role">Hands-on Cloud Engineering projects</div>
                    <p>Actively building AWS projects, earning certifications, and mastering Infrastructure as Code. Focusing on hands-on experience with real-world scenarios to prepare for cloud engineering roles.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2025</div>
                <div class="timeline-card">
                    <h3>AWS Solution Architect Associate</h3>
                    <div class="role">Certification</div>
                    <p>Comprehensive understanding of AWS services and technologies. Demonstrated the ability to build secure and robust solutions using architectural design principles based on customer requirements. Able to strategically design well-architected distributed systems that are scalable, resilient, efficient, and fault-tolerant.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2025</div>
                <div class="timeline-card">
                    <h3>Cloud Engineer Academy</h3>
                    <div class="role">Cloud Learning Path</div>
                    <p>Fully commited learning path for AWS cloud studies on Security, CI/CD pipeline, version control, automation, DevOps, Infrastructure as Code etc.. </p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2024-Current</div>
                <div class="timeline-card">
                    <h3>Technical Support Specialist</h3>
                    <div class="role">Skanska Inc.</div>
                    <p>Manage enterprise identity and access management using Azure Entra ID and Microsoft Active Directory. Responsible for user lifecycle administration including onboarding, offboarding, and permissions management across the organization. Administer Azure Virtual Desktop environments, multi-factor authentication (MFA) methods. </p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2024</div>
                <div class="timeline-card">
                    <h3>AWS Cloud Practitioner</h3>
                    <div class="role">Certification</div>
                    <p>Fundamental understanding of IT services and their uses in the AWS Cloud. Demonstrates cloud fluency and foundational AWS knowledge. Able to identify essential AWS services necessary to set up AWS-focused projects.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Projects Dashboard -->
    <div class="projects-dashboard" id="projects">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid-advanced">
            <!-- Project 1 -->
            <div class="project-card-advanced">
                <div class="project-header">
                    <span class="project-number">01</span>
                    <h3>IAM Security Implementation</h3>
                    <span class="project-status">✓ Completed</span>
                </div>
                <div class="project-body">
                    <p>Comprehensive IAM security implementation using Terraform. Created role-based access controls, service control policies, and automated permission management following AWS best practices.</p>
                    
                    <div class="project-metrics">
                        <div class="metric">
                            <span class="metric-value">15+</span>
                            <span class="metric-label">Policies</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">100%</span>
                            <span class="metric-label">Secure</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">IaC</span>
                            <span class="metric-label">Automated</span>
                        </div>
                    </div>

                    <div class="tech-stack-advanced">
                        <span class="tech-badge-advanced">AWS IAM</span>
                        <span class="tech-badge-advanced">Terraform</span>
                        <span class="tech-badge-advanced">Security</span>
                        <span class="tech-badge-advanced">Least Privilege</span>
                    </div>

                    <div class="project-footer">
                        <a href="https://github.com/vonongit/StartUpCo-IAM-Security-Project" target="_blank" class="project-link-btn">
                            View on GitHub →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project 2 -->
            <div class="project-card-advanced">
                <div class="project-header">
                    <span class="project-number">02</span>
                    <h3>Infrastructure as Code Migration</h3>
                    <span class="project-status">✓ Completed</span>
                </div>
                <div class="project-body">
                    <p>Migrated manually-created AWS infrastructure to fully automated Infrastructure as Code using AWS CDK. Improved deployment consistency, version control, and disaster recovery.</p>
                    
                    <div class="project-metrics">
                        <div class="metric">
                            <span class="metric-value">20+</span>
                            <span class="metric-label">Resources</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">95%</span>
                            <span class="metric-label">Time Saved</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">CDK</span>
                            <span class="metric-label">Framework</span>
                        </div>
                    </div>

                    <div class="tech-stack-advanced">
                        <span class="tech-badge-advanced">AWS CDK</span>
                        <span class="tech-badge-advanced">TypeScript</span>
                        <span class="tech-badge-advanced">CloudFormation</span>
                        <span class="tech-badge-advanced">CI/CD</span>
                    </div>

                    <div class="project-footer">
                        <a href="https://github.com/vonongit/TechHealth-CDK-Migration" target="_blank" class="project-link-btn">
                            View on GitHub →
                        </a>
                    </div>
                </div>
            </div>

            <!-- Project 3 -->
            <div class="project-card-advanced">
                <div class="project-header">
                    <span class="project-number">03</span>
                    <h3>AWS Portfolio Website</h3>
                    <span class="project-status">✓ Completed</span>
                </div>
                <div class="project-body">
                    <p>Serverless portfolio website using Next.js, S3, CloudFront, and AWS CDK. Implemented secure origin access, HTTPS encryption, and automated deployment pipelines.</p>
                    
                    <div class="project-metrics">
                        <div class="metric">
                            <span class="metric-value">$2</span>
                            <span class="metric-label">Per Month</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">99.9%</span>
                            <span class="metric-label">Uptime</span>
                        </div>
                        <div class="metric">
                            <span class="metric-value">Fast</span>
                            <span class="metric-label">CDN</span>
                        </div>
                    </div>

                    <div class="tech-stack-advanced">
                        <span class="tech-badge-advanced">Next.js</span>
                        <span class="tech-badge-advanced">S3</span>
                        <span class="tech-badge-advanced">CloudFront</span>
                        <span class="tech-badge-advanced">CDK</span>
                    </div>

                    <div class="project-footer">
                        <a href="https://github.com/vonongit/Amplify-Portfolio" target="_blank" class="project-link-btn">
                            View on GitHub →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Skills Matrix -->
    <div class="skills-matrix" id="skills">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-categories">
            <div class="skill-category">
                <div class="category-header">
                    <div class="category-icon">☁️</div>
                    <h3>Cloud Platforms</h3>
                </div>
                <ul class="skill-list-advanced">
                    <li>AWS S3</li>
                    <li>CloudFront</li>
                    <li>AWS IAM</li>
                    <li>Lambda</li>
                </ul>
            </div>

            <div class="skill-category">
                <div class="category-header">
                    <div class="category-icon">🔧</div>
                    <h3>Infrastructure as Code</h3>
                </div>
                <ul class="skill-list-advanced">
                    <li>Terraform</li>
                    <li>AWS CDK</li>
                    <li>CloudFormation</li>
                </ul>
            </div>

            <div class="skill-category">
                <div class="category-header">
                    <div class="category-icon">💻</div>
                    <h3>Programming</h3>
                </div>
                <ul class="skill-list-advanced">
                    <li>TypeScript</li>
                    <li>Python</li>
                    <li>Next.js/React</li>
                    <li>Git/GitHub</li>
                </ul>
            </div>

            <div class="skill-category">
                <div class="category-header">
                    <div class="category-icon">🔒</div>
                    <h3>Security & Best Practices</h3>
                </div>
                <ul class="skill-list-advanced">
                    <li>Cloud Security</li>
                    <li>IAM Policies</li>
                    <li>Least Privilege</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Resume Section -->
    <div class="resume-section" id="resume">
        <h2 class="section-title">Resume</h2>
        <div class="resume-container">
            <div class="resume-header">
                <h1>Travon Mayo</h1>
                <p class="title">Cloud Engineer</p>
                <div class="contact-info">
                    <span><a href="mailto:travon@example.com">travon@example.com</a></span>
                    <span>•</span>
                    <span><a href="https://github.com/travonmayo" target="_blank">github.com/travonmayo</a></span>
                    <span>•</span>
                    <span><a href="https://linkedin.com/in/travonmayo" target="_blank">linkedin.com/in/travonmayo</a></span>
                </div>
            </div>

            <!-- Professional Summary -->
            <div class="resume-section-block">
                <h2 class="resume-section-title">Professional Summary</h2>
                <p class="resume-description">
                    Entry-level Cloud Engineer with hands-on AWS experience in infrastructure automation, security, and Infrastructure as Code. Proven track record of implementing production-ready solutions that emphasize security, cost optimization, and best practices. Passionate about building scalable, secure cloud solutions and continuously expanding technical expertise.
                </p>
            </div>

            <!-- Experience -->
            <div class="resume-section-block">
                <h2 class="resume-section-title">Experience</h2>
                
                <div class="resume-item">
                    <div class="resume-item-header">
                        <h3>Infrastructure as Code</h3>
                        <span class="resume-date">October 2024</span>
                    </div>
                    <p class="resume-subtitle">Terraform, AWS CDK and CloudFormation</p>
                    <p class="resume-description">
                        Completed Infrastructure as Code modernization project by transitioning console created AWS resources to Infrastructure as Code using AWS CDK and TypeScript.
                    </p>
                    <ul class="resume-achievements">
                        <li>Migrated 20+ AWS resources with zero downtime</li>
                        <li>Reduced deployment time by 95% through automation</li>
                        <li>Implemented version control and DevOps workflows</li>
                        <li>Created comprehensive disaster recovery procedures</li>
                    </ul>
                </div>

                <div class="resume-item">
                    <div class="resume-item-header">
                        <h3>Personal Cloud Projects</h3>
                        <span class="resume-date">2024 - Present</span>
                    </div>
                    <p class="resume-subtitle">Self-Directed Learning</p>
                    <p class="resume-description">
                        Built multiple production-ready AWS projects demonstrating cloud engineering capabilities and best practices.
                    </p>
                    <ul class="resume-achievements">
                        <li>Implemented comprehensive IAM security framework using Terraform</li>
                        <li>Deployed serverless portfolio website with 99.9% uptime at $2/month</li>
                        <li>Automated infrastructure provisioning and deployment pipelines</li>
                        <li>Applied security best practices including least-privilege access</li>
                    </ul>
                </div>
            </div>

            <!-- Projects -->
            <div class="resume-section-block">
                <h2 class="resume-section-title">Key Projects</h2>
                
                <div class="resume-item">
                    <div class="resume-item-header">
                        <h3>IAM Security Implementation</h3>
                        <span class="resume-date">September 2024</span>
                    </div>
                    <p class="resume-description">
                        Designed and implemented comprehensive IAM security policies using Terraform, following AWS security best practices and the principle of least privilege.
                    </p>
                    <ul class="resume-achievements">
                        <li>Created 15+ IAM policies with role-based access control</li>
                        <li>Automated permission management with Terraform</li>
                        <li>Reduced security configuration time by 95%</li>
                    </ul>
                </div>

                <div class="resume-item">
                    <div class="resume-item-header">
                        <h3>AWS Portfolio Website</h3>
                        <span class="resume-date">November 2024</span>
                    </div>
                    <p class="resume-description">
                        Architected and deployed the very serverless portfolio website that you are now viewing using Next.js, S3, CloudFront, and AWS CDK with automated deployment pipelines.
                    </p>
                    <ul class="resume-achievements">
                        <li>Implemented secure architecture with HTTPS and Origin Access Identity</li>
                        <li>Achieved 99.9% uptime with under $2/month operational costs</li>
                        <li>Built automated CI/CD pipeline using AWS CDK</li>
                    </ul>
                </div>
            </div>

            <!-- Certifications -->
            <div class="resume-section-block">
                <h2 class="resume-section-title">Certifications</h2>
                
                <div class="resume-item">
                    <div class="resume-item-header">
                        <h3>AWS Certified Solutions Architect - Associate</h3>
                        <span class="resume-date">September 2025</span>
                    </div>
                    <p class="resume-subtitle">Amazon Web Services</p>
                    <p class="resume-description">Demonstrated expertise in designing distributed systems and applications on AWS platform.</p>
                </div>

                <div class="resume-item">
                    <div class="resume-item-header">
                        <h3>AWS Certified Cloud Practitioner</h3>
                        <span class="resume-date">August 2023</span>
                    </div>
                    <p class="resume-subtitle">Amazon Web Services</p>
                    <p class="resume-description">Foundational understanding of AWS Cloud, services, and best practices.</p>
                </div>
            </div>

            <!-- Technical Skills -->
            <div class="resume-section-block">
                <h2 class="resume-section-title">Technical Skills</h2>
                <div class="resume-skills-grid">
                    <div class="resume-skill-category">
                        <h4>Cloud Platforms</h4>
                        <div class="resume-skill-tags">
                            <span class="resume-skill-tag">AWS S3</span>
                            <span class="resume-skill-tag">CloudFront</span>
                            <span class="resume-skill-tag">AWS IAM</span>
                            <span class="resume-skill-tag">Lambda</span>
                            <span class="resume-skill-tag">EC2</span>
                        </div>
                    </div>
                    <div class="resume-skill-category">
                        <h4>Infrastructure as Code</h4>
                        <div class="resume-skill-tags">
                            <span class="resume-skill-tag">Terraform</span>
                            <span class="resume-skill-tag">AWS CDK</span>
                            <span class="resume-skill-tag">CloudFormation</span>
                            <span class="resume-skill-tag">Git/GitHub</span>
                        </div>
                    </div>
                    <div class="resume-skill-category">
                        <h4>Programming Languages</h4>
                        <div class="resume-skill-tags">
                            <span class="resume-skill-tag">TypeScript</span>
                            <span class="resume-skill-tag">Python</span>
                            <span class="resume-skill-tag">JavaScript</span>
                            <span class="resume-skill-tag">Bash</span>
                        </div>
                    </div>
                    <div class="resume-skill-category">
                        <h4>Frameworks & Tools</h4>
                        <div class="resume-skill-tags">
                            <span class="resume-skill-tag">Next.js</span>
                            <span class="resume-skill-tag">React</span>
                            <span class="resume-skill-tag">Node.js</span>
                            <span class="resume-skill-tag">CI/CD</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Download Button (placeholder) -->
            <div style="text-align: center;">
                <a href="resume.pdf" class="download-resume-btn">Download PDF Resume</a>
            </div>
        </div>
    </div>

    <!-- Certifications -->
    <div class="certifications-section">
        <h2 class="section-title">Certifications & Learning</h2>
        <div class="cert-grid">
            <a href="https://www.credly.com/badges/c803d6df-37b5-4eca-a928-36a995c8f962/linked_in_profile" class="cert-card" id="cert-cloud-practitioner" target="_blank">
                <div class="cert-badge">🎯</div>
                <div class="cert-info">
                    <h4>AWS Certified Cloud Practitioner</h4>
                    <p class="cert-issuer">Amazon Web Services</p>
                    <span class="cert-status" style="background: rgba(34, 197, 94, 0.2); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.3);">✓ Completed August 2023</span>
                </div>
            </a>
            <a href="https://www.credly.com/badges/e4809d19-b7b9-445a-81fb-b7eb72dbef8b" class="cert-card" id="cert-solutions-architect" target="_blank">
                <div class="cert-badge">☁️</div>
                <div class="cert-info">
                    <h4>AWS Certified Solutions Architect - Associate</h4>
                    <p class="cert-issuer">Amazon Web Services</p>
                    <span class="cert-status" style="background: rgba(34, 197, 94, 0.2); color: #22c55e; border: 1px solid rgba(34, 197, 94, 0.3);">✓ Completed September 2025</span>
                </div>
            </a>
        </div>
    </div>

    <!-- Contact Dashboard -->
    <div class="contact-dashboard" id="contact">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-grid-advanced">
            <div class="contact-main">
                <h3>Let's Connect</h3>
                <p>I'm currently seeking entry-level cloud engineering or DevOps opportunities. If you're looking for someone experienced with AWS, infrastructure automation, and building secure, scalable solutions, I'd love to hear from you!</p>
                
                <div class="contact-methods">
                    <a href="https://github.com/vonongit" target="_blank" class="contact-method">
                        <div class="contact-method-icon">💻</div>
                        <div class="contact-method-info">
                            <h4>GitHub</h4>
                            <p>Check out my projects and code</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/travon-mayo/" target="_blank" class="contact-method">
                        <div class="contact-method-icon">💼</div>
                        <div class="contact-method-info">
                            <h4>LinkedIn</h4>
                            <p>Connect professionally</p>
                        </div>
                    </a>
                    <a href="mailto:travondm2@gmail.com" class="contact-method">
                        <div class="contact-method-icon">✉️</div>
                        <div class="contact-method-info">
                            <h4>Email</h4>
                            <p>travondm2@gmail.com</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>Built with Next.js, and AWS Amplify with AWS CDK | © 2025 Travon Mayo</p>
        <p style="margin-top: 10px; font-size: 0.9em;">Designed & Developed with ☁️</p>
    </footer>
</body>
</html>