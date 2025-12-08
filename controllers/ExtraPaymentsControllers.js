import ExtraPayments from "../models/ExtraPayments.js";

export const createExtraPayments = async (req, res) => {
  try {
    const newExtraPayments = new ExtraPayments(req.body);
    await newExtraPayments.save();

    res.status(201).json({ message: "ExtraPayments created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const ExtraPaymentsGet = async (req, res)=>{
  try {
    const extraPayments = await ExtraPayments.find();
    res.status(200).json(extraPayments);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
