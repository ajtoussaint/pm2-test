module.exports = {
    apps: [{
      name: 'pm2-test',
      script: './index.js'
    }],
    deploy: {
      production: {
        user: 'ubuntu',
        host: 'ec2-18-217-175-120.us-east-2.compute.amazonaws.com',
        key: '~/.ssh/pm2-test.pem',
        ref: 'origin/main',
        repo: 'https://github.com/ajtoussaint/pm2-test.git',
        path: '/home/ubuntu/pm2-test',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }