import ITDeclarations from "../models/ITDeclarations.js";

export const createiTDeclarationsRoutes = async (req, res) => {
  try {
    const newITDeclarations = new ITDeclarations(req.body);
    await newITDeclarations.save();

    res.status(201).json({ message: "ITDeclarations created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const iTDeclarationsRoutesGet = async (req, res)=>{
  try {
    const ITDeclarationss = await ITDeclarations.find();
    res.status(200).json(ITDeclarationss);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
