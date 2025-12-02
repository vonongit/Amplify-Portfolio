# Portfolio Website with AWS Amplify & Next.js

> **A modern, cloud-native portfolio showcasing automated deployment pipelines and Infrastructure as Code practices**

[![Live Site](https://img.shields.io/badge/Live-Portfolio-brightgreen?style=for-the-badge)](https://main.d3example.amplifyapp.com)
[![AWS](https://img.shields.io/badge/AWS-Amplify-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/amplify/)
[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## 📋 Project Overview

This project demonstrates building and deploying a production-ready portfolio website using modern cloud infrastructure. The site automatically deploys through a CI/CD pipeline that triggers on every GitHub push, showcasing real-world DevOps practices.

**🚨 📖 [View Full Documentation](DOCUMENTATION.md)** in "DOCUMENTATION.md" for detailed step-by-step implementation. 🚨

## 🏗️ Architecture

![Architecture Diagram](screenshots/architecture-diagram.png)

**Workflow:** Next.js Application → GitHub Repository → AWS Amplify → Automated Build & Deploy

## 🚀 Key Features

- **Automated CI/CD Pipeline** - Instant deployments on git push
- **Infrastructure as Code** - AWS CDK with TypeScript
- **Secure Token Management** - AWS Secrets Manager integration
- **Static Site Generation** - Optimized Next.js export for performance
- **Build Caching** - Faster subsequent deployments

## 🛠️ Technologies

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 14, TypeScript, Tailwind CSS |
| **Infrastructure** | AWS Amplify, AWS CDK, AWS Secrets Manager |
| **CI/CD** | GitHub, AWS CodeBuild |
| **Deployment** | Automated via Amplify with CloudFront CDN |

## 💡 What I Learned

✅ Modern web development with Next.js and TypeScript  
✅ AWS Amplify deployment workflows and configuration  
✅ Infrastructure as Code using AWS CDK  
✅ CI/CD pipeline implementation and troubleshooting  
✅ Secure credential management with AWS Secrets Manager  
✅ Static site optimization and build processes  

## 📁 Project Structure

```
amplify-portfolio-nextjs/
├── portfolio/                 # Next.js application
│   ├── src/app/              # Application source code
│   ├── public/               # Static assets
│   └── package.json          # Dependencies
└── portfolio-infrastructure/  # AWS CDK code
    ├── bin/                  # CDK app entry point
    ├── lib/                  # Infrastructure stack
    └── cdk.json              # CDK configuration
```

## 🔧 Key Implementation Highlights

### AWS CDK Infrastructure
- Automated GitHub integration with secure token handling
- Custom build specifications for Next.js static export
- Branch-specific deployment configurations
- Intelligent build caching for faster deployments

### Challenges Overcome
- ✅ Resolved CDK version conflicts
- ✅ Configured proper GitHub authentication
- ✅ Fixed build script configuration
- ✅ Implemented static export for Amplify

## 📚 Documentation

For a complete walkthrough including:
- Detailed setup instructions
- Screenshots of each step
- Troubleshooting solutions
- Code explanations

**➡️ [Read the Full Documentation](DOCUMENTATION.md)**

## 🤝 Connect With Me

<div align="center">

[![Email](https://img.shields.io/badge/Email-travondm2%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:travondm2@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-vonongit-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/vonongit)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Travon_Mayo-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/travon-mayo/)

</div>

---

<div align="center">

**⭐ If you found this project helpful, please consider giving it a star!**

*Built as part of hands-on cloud engineering learning with Cloud Engineer Academy*

</div>