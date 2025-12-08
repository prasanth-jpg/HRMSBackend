import PaySlips from "../models/PaySlips.js";

export const createPaySlip = async (req, res) => {
  try {
    const newPaySlips = new PaySlips(req.body);
    await newPaySlips.save();

    res.status(201).json({ message: "PaySlips created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const paySlipGet = async (req, res)=>{
  try {
    const PaySlipss = await PaySlips.find();
    res.status(200).json(PaySlipss);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
