#!/usr/bin/env node
const program = require("commander");
const { createExperiment } = require("./handlers/add-experiment");
const { createIteration } = require("./handlers/add-iteration");
const { createBucket } = require("./handlers/add-bucket");
const { startMonitor } = require("./handlers/start-monitor");
const { stopMonitor } = require("./handlers/stop-monitor");

program.version("1.0.0").description("CLI for Data Visualisation");

program
  .command("add-experiment")
  .alias("addexp")
  .alias("aexp")
  .description("Add an experiment")
  .argument("<name>", "Experiment Name")
  .argument("[description]", "Experiment description")
  .action((name, description) => {
    createExperiment(name, description);
  });

program
  .command("add-bucket")
  .alias("addbu")
  .description("Add an Bucket")
  .argument("<experimentName>", "Experiment Name")
  .argument("<bucketName>", "Bucket Name")
  .argument("[description]", "Iteration description")
  .action((experimentName, bucketName, description) => {
    createBucket(experimentName, bucketName, description);
  });

program
  .command("add-iteration")
  .alias("additr")
  .alias("aitr")
  .description("Add an Iteration")
  .argument("<experimentName>", "Experiment Name")
  .argument("<iterationName>", "Iteration Name")
  .argument("<bucketName>", "Bucket Name")
  .argument("[description]", "Iteration description")
  .action((experimentName, bucketName, iterationName, description) => {
    createIteration(experimentName, bucketName, iterationName, description);
  });

program
  .command("start-monitor")
  .alias("smon")
  .alias("start")
  .description("Start monitoring for an iteration")
  .argument("<experimentName>", "Experiment Name")
  .argument("<bucketName>", "Bucket Name")
  .argument("<iterationName>", "Iteration Name")
  .argument("<interval>", "Interval in seconds")
  // TODO: Add monitor metrics
  .action((experimentName, bucketName, iterationName, interval) => {
    startMonitor(experimentName, bucketName, iterationName, interval);
  });

program
  .command("stop-monitor")
  .alias("stopmon")
  .alias("stop")
  .description("Stop monitoring for an iteration")
  .action(() => {
    stopMonitor();
  });

program.parse(process.argv);
