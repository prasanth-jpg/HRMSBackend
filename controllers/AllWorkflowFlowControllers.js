import AllWorkflowFlow from "../models/AllWorkflowFlow.js";

export const createAllWorkflowFlow = async (req, res) => {
  try {
    const newAllWorkflowFlow = new AllWorkflowFlow(req.body);
    await newAllWorkflowFlow.save();

    res.status(201).json({ message: "AllWorkflowFlow created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const AllWorkflowFlowGet = async (req, res)=>{
  try {
    const allWorkflowFlow = await AllWorkflowFlow.find();
    res.status(200).json(allWorkflowFlow);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
