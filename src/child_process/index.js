const child_process = require('child_process');

child_process.exec('cat /etc/passwd', (err, stdout, stdin) => {
  if (err) console.log(err);
  else if (stdout) console.log(stdout);
  else if (stdin) console.log(stdin);
});
