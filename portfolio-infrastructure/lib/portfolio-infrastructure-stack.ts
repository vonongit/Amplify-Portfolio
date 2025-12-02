import * as cdk from 'aws-cdk-lib';
// Imports the main AWS CDK library - gives access to core CDK features like Stack, SecretValue, etc.

import * as amplify from '@aws-cdk/aws-amplify-alpha';
// Imports AWS Amplify constructs - provides the tools to create Amplify apps and configurations

import * as codebuild from 'aws-cdk-lib/aws-codebuild';
// Imports AWS CodeBuild library - used to define build specifications for compiling your app

import { Construct } from 'constructs';
// Imports Construct class - the base class for all CDK constructs (building blocks)

export class PortfolioInfrastructureStack extends cdk.Stack {
// Defines your infrastructure stack class - extends (inherits from) the base CDK Stack class

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
  // Constructor function that runs when the stack is created
  // - scope: parent construct that contains this stack
  // - id: unique identifier for this stack
  // - props: optional configuration properties

    super(scope, id, props);
    // Calls the parent Stack class constructor to initialize the stack

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
    // Creates a new Amplify App resource
    // - 'this' refers to the current stack
    // - 'PortfolioApplication' is the logical ID in CloudFormation

      appName: 'Portfolio',
      // Sets the display name for your Amplify app in the AWS console

      // Connect to my github repo
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
      // Configures GitHub as the source code provider

        owner: 'vonongit',
        // Your GitHub username

        repository: 'Amplify-Portfolio',
        // The name of your GitHub repository

        oauthToken: cdk.SecretValue.secretsManager('github-token')
        // Retrieves the GitHub personal access token from AWS Secrets Manager
        // This token allows Amplify to access your private repository
      }),

      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
      // Defines the build instructions - converts JavaScript object to YAML format

        version: '1.0',
        // Specifies the Amplify build specification version

        frontend: {
        // Section for frontend build configuration

          phases: {
          // Defines different phases of the build process

            preBuild: {
            // Commands to run BEFORE building the app

              commands: [
                'echo "starting this build"',
                // Prints a message to the build log

                'cd portfolio',
                // Changes directory into the 'portfolio' folder

                'npm install'
                // Installs all Node.js dependencies listed in package.json
              ],
            },

            build: {
            // Commands to run during the BUILD phase

              commands: [
                'echo "building our nextjs app..."',
                // Prints a message to the build log

                'npm run build-and-export',
                // Runs the custom script to build and export your Next.js app

                'echo "build is completed"'
                // Prints completion message to the build log
              ],
            },
          },

          artifacts: {
          // Specifies which files to deploy after building

            baseDirectory: 'portfolio/out',
            // The folder containing the built files to deploy

            files: ['**/*'],
            // Pattern matching all files and subdirectories to include
          },

          cache: {
          // Configures caching to speed up future builds

            paths: [
              'node_modules/**/*',
              // Caches all installed npm packages

              '.next/cache/**/*'
              // Caches Next.js build cache for faster rebuilds
            ]
          }
        }
      })
    });

    const mainBranch = amplifyApp.addBranch('main', {
    // Adds the 'main' branch to the Amplify app for deployment

      autoBuild: true
      // Enables automatic builds when code is pushed to the main branch
    });
  }
}