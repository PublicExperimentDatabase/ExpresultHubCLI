const program=require('commander');
const {prompt} = require('inquirer');
const {addIteration}=require('./db/index.js')


// Queries
const questionsForAddExperiments =[
    {
        type:'input',
        name:'title',
        message:"Experiment Title"
    },
    {
        type:'input',
        name:'description',
        message:"Experiment description"
    },
    {
        type:'input',
        name:'members',
        message:"Enter the member id's with , as a delimitter",
        default:""   
    },
    {
        type:'input',
        name:'createdAt',
        message:"Enter the start time of Experiment (as a string in HH:MM:SS || DD:MM::YYYY format)",
    },
    {
        type:'input',
        name:'iterations',
        message:"Enter the Iteration id's with , as delimitter",
        default:""
    }
]

const questionsForAddIterations =[
    {
        type:'input',
        name:'runName',
        message:"Iteration RunName"
    },
    {
        type:'input',
        name:'description',
        message:"Iteration description"
    },
    {
        type:'input',
        name:'members',
        message:"Enter the member id's with , as a delimitter",
        default:""   
    },
    {
        type:'input',
        name:'startTime',
        message:"Enter the start time of Iteration (as a string in HH:MM:SS || DD:MM::YYYY format)",
           
    },
    {
        type:'input',
        name:'endTime',
        message:"Enter the end time of Iteration (as a string in HH:MM:SS || DD:MM::YYYY format)",
    },
    {
        type:'input',
        name:'codeHash',
        message:"Enter the Code hash",
    },
    {
        type:'input',
        name:'dataHash',
        message:"Enter the Data hash",
    },
    {
        type:'input',
        name:'environmentData',
        message:"Enter the id of the Environment Data instance"
    }

]





// Commands decleration

program
    .version('1.0.0')
    .description('CLI for Data Visualisation')

//commnand for add experiment
program
    .command('addexp')
    .alias('aexp')
    .description('Add an experiment')
    .action(()=>{
        prompt(questionsForAddExperiments).then(answers => addExperiment(answers));
        
    });

//command for add iteration    
program
    .command('additr')
    .alias('aitr')
    .description('Add an Iteration')
    .action(()=>{
        prompt(questionsForAddIterations).then(answers => addIteration(answers));
        
    });


program.parse(process.argv);