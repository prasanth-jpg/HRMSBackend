import TaxSheet from "../models/taxSheet.js";

export const createtaxSheetRoutesRoutes = async (req, res) => {
  try {
    const newtaxSheet = new TaxSheet(req.body);
    await newtaxSheet.save();

    res.status(201).json({ message: "taxSheet created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const taxSheetRoutesRoutesGet = async (req, res)=>{
  try {
    const taxSheets = await TaxSheet.find();
    res.status(200).json(taxSheets);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
