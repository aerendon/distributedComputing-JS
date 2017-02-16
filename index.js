var SSH = require('simple-ssh');

var ssh = new SSH({
  host: 'node04',
  user: 'cluster',
  pass: 'sudo'
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
