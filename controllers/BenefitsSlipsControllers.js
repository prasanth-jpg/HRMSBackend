import BenefitsSlips from "../models/BenefitsSlips.js";

export const createBenefitsSlips = async (req, res) => {
  try {
    const newBenefitsSlips = new BenefitsSlips(req.body);
    await newBenefitsSlips.save();

    res.status(201).json({ message: "BenefitsSlips created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const BenefitsSlipsGet = async (req, res)=>{
  try {
    const benefitsSlips = await BenefitsSlips.find();
    res.status(200).json(benefitsSlips);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
