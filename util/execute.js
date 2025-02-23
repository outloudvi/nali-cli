const { spawn } = require('child_process');

function main(exeList, args) {
  require('./check-dat')(() => {
    const parseIp = require('../util/parse-ip');
    const parseCdn = require('../util/parse-cdn');

    function tryExeList(currentExeList, args) {
      const exe = currentExeList[0];
      const command = spawn(exe, args);

      if (exe === 'dig' || exe === 'kdig'|| exe === 'nslookup') {
        command.stdout.on('data', data => {
          process.stdout.write(parseIp(parseCdn(data.toString())));
        });
      } else {
        command.stdout.on('data', data => {
          process.stdout.write(parseIp(data.toString()));
        });
      }
    
      command.stderr.on('data', data => {
        process.stdout.write(data.toString());
      });
    
      command.on('exit', code => {
        process.exit(code);
      });
    
      command.on('error', err => {
        if (err.code === 'ENOENT') {
          if (currentExeList.length > 1) {
            tryExeList(currentExeList.slice(1), args);
          } else {
            console.error(`ENOENT: Nali CLI 找不到 ${exeList.join("、")}, 请先安装或检查 PATH!`);
          }
        } else {
          console.error('嗷呜，出现错误惹! ' + err.message || err);
        }
      });
    }

    tryExeList(Array.isArray(exeList) ? exeList : [exeList], args);
  })
}

module.exports = main;
