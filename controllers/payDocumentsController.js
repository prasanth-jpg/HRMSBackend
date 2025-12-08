import PayDocuments from "../models/payDocuments.js";

export const createPayDocuments = async (req, res) => {
  try {
    const newpayDocuments = new PayDocuments(req.body);
    await newpayDocuments.save();

    res.status(201).json({ message: "payDocuments created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const payDocumentsGet = async (req, res)=>{
  try {
    const payDocuments = await PayDocuments.find();
    res.status(200).json(payDocuments);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
