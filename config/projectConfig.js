
const projectName = require('./project')
// const projectName = localStorage("./project.js")
const config = {
    projectA: {
        pages: {
            index:{
                entry: 'src/projects/projectA/main.js',
                outputDir: 'dist/projectA/',
                template:'public/index.html',
                filename:'index.html'
            }
        }
    },
    projectB: {
        pages: {
            index:{
                entry: 'src/projects/projectB/main.js',
                outputDir: 'dist/projectB/',
                template:'public/index.html',
                filename:'index.html'
            }
        }
    },
}

const configObj = config[projectName.name]
module.exports = configObj
