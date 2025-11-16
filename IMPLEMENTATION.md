# Architecture Diagram

![architecture-diagram](screenshots/architecture-diagram.png)

Bilding a portfolio site with next.js and pushing the code to github which will then deploy the website to AWS via AWS Amplify.


### Current situation/Challenge faced
Many portfolios show limited capabilities such as..
- Slow manual deployment processes
- Basic hosting
- Lack of automatic updates with changes
- Static sites missing full-stack capabilities


### Goal 
Deploy a portfolio website to showcase skills and experience with cloud technologies in AWS. I will keep this project live and running so that I can showcase my cloud skills to real life users.

**Will learn**
- Modern web development with Next.js
- AWS Amplify deployment workflows
- CI/CD best practices
- Cloud-native portfolio development
- Infrastructure as Code concepts

### Tasks
1. Create modern Portfolio Site
2. Configure AWS Amplify with CDK
3. Test and deploy

# Our Project Journey Documentation

## 1. Setting Up Next.js Project
**1. Create Project Folder** 
- I chose to name my folder 'amplify-portfolio-nextjs'. We do that by running the below command:
```bash
mkdir amplify-portfolio-nextjs
```
- 'mkdir' stands for 'make directory'. Directory is our folder that will be made, 'mkdir' is followed by what we name the folder.

**2. Create Next.js Application**
- Run the following command:
```bash
npx create-next-app@latest portfolio --typescript --tailwind
```

This command creates a new Next.js application with specific configurations. Here's what each part does:

npx - Node Package Manager, used to run the command
create-next-app@latest - Uses the latest version of Next.js's official scaffolding tool to generate a new project
portfolio - Names your project "portfolio" (this will be the folder name)
--typescript - Sets up the project with TypeScript instead of plain JavaScript
--tailwind - Preconfigures Tailwind CSS for styling

These are configuration prompts that appeared when we ran the create-next-app command. These let you customize the Next.js project setup (screenshot at the bottom):

✔ Which linter would you like to use? › ESLint - Asks which code linting tool to use. ESLint checks your code for errors and style issues. You selected ESLint (the standard choice).
✔ Would you like to use React Compiler? … No / Yes - Asks if you want to enable React's experimental compiler for automatic optimization. This is a newer feature.
✔ Would you like your code inside a src/ directory? … No / Yes - Asks if you want your application code organized in a src/ folder (more structured) or at the root level (simpler structure).
✔ Would you like to use App Router? (recommended) … No / Yes - Asks which routing system to use. App Router is Next.js's newer, more powerful routing system (vs. the older Pages Router).
✔ Would you like to customize the import alias @/* by default)? … No / Yes - Asks if you want to use @/ as a shortcut for imports (e.g., import Button from '@/components/Button' instead of import Button from '../../components/Button').

The last line:
Creating a new Next.js app in /Users/travonmayo/Documents/portfolio-projects/amplify-portfolio-nextjs/portfolio.
This confirms where your project is being created on your computer - in the portfolio folder at that file path.

![nextjs-app-setup](screenshots/nextjs-app-setup.png)

### What this created
- Some key directories were created after these commands, such as:

- **Public:** Holds the static files such as images/files which are served directly

- **src/app:** SRC (source) is the source directory, app is the app root directory

- **layout.ts:x** The site's root layout

- **page.tsx:** The site's homepage

- **package.json:** Where the project dependencies are located

![public-folder](screenshots/public-folder.png)

![src-app-folder](screenshots/src-app-folder.png)

### Run the app
- We then finish push the app by running:
```bash
npm run dev
```

**🚨IMPORTANT🚨**
- Ensure that you move to the correct directory or else you will get an error.
- To change to your 'portfolio' directory run:
```bash
cd portfolio
```
- Forgot to do this and received an error. However, after moving to the correct directory I was able to get the correct output.

- Notice the output for the local host and network. 'Local' is the 'localhost' that can be entered in the URL browser to view the results of what was built by Next.js, while 'Network' represents the ip adress that is assigned to the local host.

![npm-run-dev-success](screenshots/npm-run-dev-success.png)

**RESULTS OF **npm run dev'**
- After entering the localhost 3000 into the URL browser, we see the following landing page for the app:

![localhost-landing-page](screenshots/localhost-landing-page.png)

- Next, I must create a front-end UI development to make the landing page appealing to the audience. Since I am not a front end developer, I asked myself what would be a unique way to have acheive our task of creating a front end despite my minimal experience with such a skill?

- I decided to adapt with the times and ask AI for some assistance with creating a front end UI for my site. While there are many AI options to use, but I decided to use Claude to acheive this. Although AI is being used, it is myself that is still creating and managing the infrastructure for the site. Without my knowledge of building the infrastructure, this UI is practically usless as it would have nothing to host it or ensure that users can access it. I think this is a great example of how to use AI as a tool rather than relying on AI.

**Updating the page.tsx template***

- After generating a new template for the portfolio site, I personalized the site to highlight my projects and skills. once the changes to the template were saved, the local host automatically updates witht the changes made. It now shows my name, a short bio about myself, projects that I've done and Links to connect with me on Github, LinkedIn and Gmail.

![localhost-updated-site](screenshots/localhost-updated-site.png)

### Setup Github repository

- I created a new github repository and decided to name it 'Amplify-Portfolio', When we push our code to Github, it will automatically deploy the code to AWS Amplify, which will then deploy the resources into the infrastructure that Amplify creates. AWS Amplify will need access to this repository to our IAC, and in order for it to do that we must give Amplify access to the repository.

- To give Amplify access to the repo, I created Github personal access tokens. To create these tokens, you:

**1. Go to Settings**
- Click on the profile (top-right corner) and click 'Settings'

![github-settings](screenshots/github-settings.png) 

**2. go to Developer Settings**
- Scroll down and click on 'Developer Settings' (Left-hand side)

![github-dev-settings](screenshots/github-dev-settings.png)

**3. Generate Token**
- Click 'Personal access tokens' 
- Click 'Tokens (classic)'
- Click 'Generate New Token' 
- Click 'Generate new token (classic) For general use' 

![github-generate-token](screenshots/github-generate-token.png)


**4. Set the scope of the access token**
- Select the entire scope labeled 'Repo'. 
- Repo provides full control over the repository such as: Access to commit and deploy status, public repositories, repository invitations and read/write security events.

![github-tokenscope-repo](screenshots/github-tokenscope-repo.png)

- Select the entire scope labeled 'admin:repo_hook'
- This scope provides full access to repository hooks such as writting and reading the repo hooks.
- Then complete generating the token

![github-tokenscope-repohooks](screenshots/github-tokenscope-repohooks.png)

- After the token is created, a code will be displayed. This is the token's code and must be copied and stored somewhere as this code will not show again after leaving the page, however this code witll be needed later.

![github-token-code](screenshots/github-token-code.png)

**5. Connect localhost Portfolio site to Github**
