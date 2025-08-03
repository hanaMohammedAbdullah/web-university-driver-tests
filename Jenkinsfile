pipline{
    
    agent any
     tools {
        git '2.30.0'
        nodejs 'node'
    }

    stages {
        stage('dev') {
            parallel {
                stage("Slave Node1"){
                    agent {
                        label 'Slav1'
                    }
                    steps {
                        echo 'Running on Slave Node1'
                        git url: 'https://github.com/hanaMohammedAbdullah/web-university-driver-tests.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                        // Add steps for Slave Node1 here
                    }
                }
                 stage("Slave Node2"){
                    agent {
                        label 'slav2'
                    }
                    steps {
                         echo 'Running on Slave Node1'
                        git url: 'https://github.com/hanaMohammedAbdullah/web-university-driver-tests.git'
                        bat 'npm install'
                        bat 'npm update'
                        bat 'npm run %Script%'
                //         // Add steps for Slave Node1 here
                    }
                }
            }
        }
        stage('stg') {
            steps {
                echo 'Testing...'
                // Add test steps here
            }
        }
        stage('main') {
            steps {
                echo 'Deploying...'
                // Add deployment steps here
            }
        }
    }

    post {
        always {
            echo 'This will always run'
        }
        success {
            echo 'This will run only if the pipeline succeeds'
        }
        failure {
            echo 'This will run only if the pipeline fails'
        }
    }
}