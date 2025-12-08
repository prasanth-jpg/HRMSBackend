import ExtraDeductions from "../models/ExtraDeductions.js";

export const createExtraDeductions = async (req, res) => {
  try {
    const newExtraDeductions = new ExtraDeductions(req.body);
    await newExtraDeductions.save();

    res.status(201).json({ message: "ExtraDeductions created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const ExtraDeductionsGet = async (req, res)=>{
  try {
    const extraDeductions = await ExtraDeductions.find();
    res.status(200).json(extraDeductions);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
