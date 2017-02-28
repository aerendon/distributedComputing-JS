const SSH = require('simple-ssh');

const ssh = new SSH({
  host: 'lovelace.utp.edu.co',
  port: 4000,
  user: 'test',
  pass: 'test'
});

ssh
  .exec('cat /etc/passwd', {
    out: function(stdout) {
      console.log(stdout);
    },
    err: function(stderr) {
      console.log(stderr); // this-does-not-exist: command not found
    }
  })
  .start();
