/* import mongoose from "mongoose";
import { Iteration } from "./Iteration";

const experimentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  iterations: [Iteration],
});

export const Experiment = mongoose.model("Experiment", experimentSchema); */