pipeline {

    agent any
    stages{
        stage("install") {
    
            steps {
              echo 'building the application'
              sh 'npm install'
            }
        }
        
        stage("test") {
    
            steps {
              echo 'test the application'
            }
        }
    
         stage("deploy") {
    
            steps {
              echo 'deploying the application'
            }
        }
    }

   
}
