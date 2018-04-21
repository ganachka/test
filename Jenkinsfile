pipeline {
    agent {
        docker {
            image 'cypress/base'
            args '-u root:sudo -v $HOME/workspace/test-jenkins-github-2:/test-jenkins-github-2'
        }
    }
    environment { HOME="." }
    stages {
        stage('Build') { 
            steps {
//                sh 'npm install' 
            }
        }
        stage('Test') { 
            steps {
//                sh 'mkdir /tmp/.X11-unix'
//                sh 'sudo chmod 1777/tmp/.X11-unix'
//                sh 'sudo chown root /tmp/.X11-unix/'
                sh 'npm run test:system' 
            }
        }        
    }
}