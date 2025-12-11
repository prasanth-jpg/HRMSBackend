import Notifications from "../models/Notifications.js";

export const createNotification = async (req, res) => {
  try {
    const newNotifications = new Notifications(req.body);
    await newNotifications.save();

    res.status(201).json({ message: "Notifications created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const notificationsGet = async (req, res)=>{
  try {
    const notificationsGet = await Notifications.find();
    res.status(200).json(notificationsGet);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
