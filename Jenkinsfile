pipeline {
    agent {
        docker {
            image 'cypress/base:6'
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run test:system' 
            }
        }        
    }
}