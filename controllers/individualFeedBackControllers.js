import IndividualFeedBack from "../models/individualFeedBack.js";

export const createIndividualFeedBack = async (req, res) => {
  try {
    const newIndividualFeedBack = new IndividualFeedBack(req.body);
    await newIndividualFeedBack.save();

    res.status(201).json({ message: "IndividualFeedBack created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const IndividualFeedBackGet = async (req, res)=>{
  try {
    const IndividualFeedBacks = await IndividualFeedBack.find();
    res.status(200).json(IndividualFeedBacks);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
