import RevokedFlow from "../models/RevokedFlow.js";

export const createRevokedFlow = async (req, res) => {
  try {
    console.log("req.body", req.body)
    const newRevokedFlow = new RevokedFlow(req.body);
    await newRevokedFlow.save();

    res.status(201).json({ message: "RevokedFlow created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const RevokedFlowGet = async (req, res) => {
  try {
    const { emailId } = req.params.email;
    const RevokedFlow = await RevokedFlow.findOne({ emailId });
    if (!RevokedFlow) {
      return res.status(404).json({ message: "No RevokedFlow found" })
    }
    res.status(200).json(RevokedFlow);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
