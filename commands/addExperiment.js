const program=require('commander');
const {prompt} = require('inquirer');
import addExperiment from "./db/index.js"


// Queries
const questions =[
    {
        type:'input',
        name:'Title',
        message:"Experiment Title"
    }
]

program
    .version('1.0.0')
    .description('CLI for Data Visualisation')


program
    .command('add')
    .alias('a')
    .description('Add an experiment')
    .action(()=>{
        prompt(questions).then(answers => addExperiment(answers));
        
    });

program.parse(process.argv);