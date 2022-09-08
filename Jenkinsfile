pipeline {
  agent any
  tools{
    nodejs "NodeP"
  }
  parameters {
        string(name: 'user_id', defaultValue: '', description: 'Ingrese el user_id a consultar')
    }
environment {
    PG_CREDS = credentials('jenkins-pg-creds')
    PG_HOST = credentials('jenkins-pg-host')
    PG_DB = credentials('jenkins-pg-db')
}
  stages {
    stage('db query') {
      steps {
        sh 'npm install'
        sh "node test.js"
      }
    }
  }
}
