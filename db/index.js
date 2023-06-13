import mongoose from "mongoose"; 
import { EnvironmentData } from "./models/EnvironmentData";
import { Experiment } from "./models/Experiment";
import { Iteration } from "./models/Iteration"; 



//Map Global promise
mongoose.Promise=global.Promise;

//Connected to Database
const db= mongoose.connect(process.env.MONGO_URI,{useMongoclient:true});// Enter the URL here of the database;



//  Dealing with the configuration file
//command for reading the config file
const fs = require("fs");
const yaml = require("js-yaml");

try {
  // Read the YAML file
  const fileContents = fs.readFileSync("./configuration.yaml", "utf8");

  // Parse the YAML data
  const data = yaml.load(fileContents);

  // Access the RuntimeInfo section
  const runtimeInfo = data.RuntimeInfo;

  Object.keys(runtimeInfo).forEach((infoName) => {
    const infoData = runtimeInfo[infoName];

    // Access the command, timing_interval, and metrics for the current Info object
    const command = infoData[0].command;
    const timingInterval = infoData[1].timing_interval;
    const metrics = infoData[2].metrics;

    console.log("Command:", command);
    console.log("Timing Interval:", timingInterval);
    console.log("Metrics:", metrics);
  });
} catch (error) {
  console.log("Error:", error);
}


//Add Experiment
const addExperiment =(title,description,members,createdAt,iterations)=>{
    const member=[];
    const iteration=[];
    const string1="";
    for(var i=0;i<members.size();i++)
    {
        if(members[i]!=',')
        string1.push(members[i]);
        else
        {
            member.push(Member.find(id==string1));
            string1="";
        }
    }
    member.push(Member.find(id==string1));
    string1="";
    for(var i=0;i<iterations.size();i++)
    {
        if(iterations[i]!=',')
        string1.push(iterations[i]);
        else
        {
            iteration.push(Iteration.find(id==string1));
            string1="";
        }
    }
    iteration.push(Iteration.find(id==string1));
    Experiment.create(title,description,member,createdAt,iteration).then(experiment=>{
        console.log("experiment succesfully added");
        db.close();

    })
} 

//add Iteration
const addIteration =(title,description,members,createdAt,iterations)=>{

    Iteration.create(iteration).then(iteration=>{
        console.log("iteration succesfully logged");
        db.close();
    }) 
    console.log(title,description,members,createdAt,iterations);
}
module.exports = {
    addExperiment,
    addIteration
};