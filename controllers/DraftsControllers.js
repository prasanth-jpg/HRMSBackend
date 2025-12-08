import Drafts from "../models/Drafts.js";

export const createDrafts = async (req, res) => {
  try {
    const newDrafts = new Drafts(req.body);
    await newDrafts.save();

    res.status(201).json({ message: "Drafts created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const DraftsGet = async (req, res)=>{
  try {
    const drafts = await Drafts.find();
    res.status(200).json(drafts);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
