#!/usr/bin/env node
const program = require("commander");
const { createExperiment } = require("./handlers/add-experiment");
const { createIteration } = require("./handlers/add-iteration");
const { startMonitor } = require("./handlers/start-monitor");
const { stopMonitor } = require("./handlers/stop-monitor");

program.version("1.0.0").description("CLI for Data Visualisation");

program
  .command("add-experiment")
  .alias("addexp")
  .alias("aexp")
  .description("Add an experiment")
  .argument("<title>", "Experiment Title")
  .argument("[description]", "Experiment description")
  .action((title, description) => {
    createExperiment(title, description);
  });

program
  .command("add-iteration")
  .alias("additr")
  .alias("aitr")
  .description("Add an Iteration")
  .argument("<experimentTitle>", "Experiment Title")
  .argument("<iterationTitle>", "Iteration Title")
  .argument("[description]", "Iteration description")
  .action((experimentTitle, iterationTitle, description) => {
    createIteration(experimentTitle, iterationTitle, description);
  });

program
  .command("start-monitor")
  .alias("smon")
  .alias("start")
  .description("Start monitoring for an iteration")
  .argument("<experimentTitle>", "Experiment Title")
  .argument("<iterationTitle>", "Iteration Title")
  .argument("<interval>", "Interval in seconds")
  // TODO: Add monitor metrics
  .action((experimentTitle, iterationTitle, interval) => {
    startMonitor(experimentTitle, iterationTitle, interval);
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
