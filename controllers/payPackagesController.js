import PayPackage from "../models/PayPackage.js";

export const createPayPackage = async (req, res) => {
  try {
    const newPayPackage = new PayPackage(req.body);
    await newPayPackage.save();

    res.status(201).json({ message: "PayPackage created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const paypackageGet = async (req, res)=>{
  try {
    const PayPackages = await PayPackage.find();
    res.status(200).json(PayPackages);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
