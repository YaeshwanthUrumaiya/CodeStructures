const {exec} = require('child_process');
const path = require('path');
const fs = require('fs');
const { error } = require('console');
const { stdout, stderr } = require('process');


const outputPath = path.join(__dirname,'outputs');

if(!fs.existsSync(outputPath)){
    fs.mkdirSync(outputPath,{recursive : true})
}
const executeCpp = (filepath)=>{
    const jobId = path.basename(filepath).split('.')[0];
    const outPath = path.join(outputPath,`${jobId}.exe`);
    return new Promise((resolve,reject)=>{
        console.log(outPath)
        console.log(outputPath)
        console.log(jobId)
        exec(`g++ ${filepath} -o ${outPath} && cd ${outputPath} && ${outPath}`,
        (error,stdout,stderr)=>{
            error && reject({error,stderr})
            stderr && reject(stderr)
            resolve(stdout)
        })
    });
};

module.exports ={
    executeCpp
}