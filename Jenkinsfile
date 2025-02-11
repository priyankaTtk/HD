pipeline {
    agent any

    environment {
        NODEJS_HOME = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/priyankaTtk/HD.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Code Quality Check') {
            steps {
                sh 'npx eslint .'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying to Production"'
                // Add your deployment commands here (Docker, AWS, Netlify, etc.)
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}
