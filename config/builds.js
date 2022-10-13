let projectName = process.argv[2]

// console.log(process);
console.log('====================================');
console.log("打包项目：",projectName);
console.log('====================================');

let fs = require('fs')
fs.writeFileSync('config/project.js', `exports.name = '${projectName}'`)

let exec = require('child_process').execSync;
exec('npm run build', {stdio: 'inherit'});

// 先执行npm run d projectA 再执行npm run build可进行正常打包。