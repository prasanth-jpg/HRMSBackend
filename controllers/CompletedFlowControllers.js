import CompletedFlow from "../models/CompletedFlow.js";

export const createCompletedFlow = async (req, res) => {
  try {
    const newCompletedFlow = new CompletedFlow(req.body);
    await newCompletedFlow.save();

    res.status(201).json({ message: "CompletedFlow created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const CompletedFlowGet = async (req, res)=>{
  try {
    const completedFlow = await CompletedFlow.find();
    res.status(200).json(completedFlow);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
