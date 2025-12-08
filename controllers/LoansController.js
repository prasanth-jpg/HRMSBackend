import LoansController from "../models/LoansController.js";

export const createLoans = async (req, res) => {
  try {
    const newLoansController = new LoansController(req.body);
    await newLoansController.save();

    res.status(201).json({ message: "LoansController created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const loansGet = async (req, res)=>{
  try {
    const LoansControllers = await LoansController.find();
    res.status(200).json(LoansControllers);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
