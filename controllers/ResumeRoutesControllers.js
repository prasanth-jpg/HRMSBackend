import RevokedFlow from "../models/RevokedFlow.js";

export const createRevokedFlows = async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();

    res.status(201).json({ message: "RevokedFlow created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const RevokedFlowsGet = async (req, res)=>{
  try {
    const revokedFlow = await RevokedFlow.find();
    res.status(200).json(revokedFlow);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
