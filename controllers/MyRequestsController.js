import MyRequestsController from "../models/MyRequests.js";

export const createMyRequests = async (req, res) => {
  try {
    const newMyRequestsController = new MyRequestsController(req.body);
    await newMyRequestsController.save();

    res.status(201).json({ message: "MyRequestsController created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const MyRequestsGet = async (req, res)=>{
  try {
    const MyRequestsControllers = await MyRequestsController.find();
    res.status(200).json(MyRequestsControllers);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
