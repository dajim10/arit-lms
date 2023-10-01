pipeline {

    agent any
    stages{
        stage("build") {
    
            steps {
              echo 'building the application'
              sh 'yarn build'
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
