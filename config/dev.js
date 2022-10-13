let projectName = process.argv[2]

// console.log(process);
console.log('====================================');
console.log("运行项目：",projectName);
console.log('====================================');

let fs = require('fs')
fs.writeFileSync('config/project.js', `exports.name = '${projectName}'`)
// const projectName = localStorage("projectName", projectName)

let exec = require('child_process').execSync;
exec('npm run serve', {stdio: 'inherit'});