import mongoose from "mongoose";
import { EnvironmentData } from "./models/EnvironmentData";
import { Experiment } from "./models/Experiment";
import { Iteration } from "./models/Iteration";


//Map Global promise
mongoose.Promise=global.Promise;

//Connected to Database
const db= mongoose.connect(process.env.MONGO_URI,{useMongoclient:true});// Enter the URL here of the database;



//Add Experiment
const addExperiment =(experiment)=>{
    Experiment.create(experiment).then(experiment=>{
        console.log("experiment succesfully added");
        db.close();
    })
}
module.exports = {
    addExperiment
}