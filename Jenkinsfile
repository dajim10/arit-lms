pipeline {

    agent any
    stages{
        stage("install") {
    
            steps {
              echo 'building the application'
              nodejs('Node-18.18.0')
              sh 'yarn install'
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
