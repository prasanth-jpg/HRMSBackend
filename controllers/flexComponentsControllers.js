import FlexComponent from "../models/FlexComponent.js";

export const createflexComponents = async (req, res) => {
  try {
    const newflexComponent = new FlexComponent(req.body);
    await newflexComponent.save();

    res.status(201).json({ message: "flexComponent created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const flexComponentsGet = async (req, res)=>{
  try {
    const flexComponents = await FlexComponent.find();
    res.status(200).json(flexComponents);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
