import Active from "../models/Active.js";

export const createActive = async (req, res) => {
  try {
    const newActive = new Active(req.body);
    await newActive.save();

    res.status(201).json({ message: "Active created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const ActiveGet = async (req, res)=>{
  try {
    const active = await Active.find();
    res.status(200).json(active);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
