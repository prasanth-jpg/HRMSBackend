import Profile from "../models/profile.js";

export const createProfile = async (req, res) => {
  try {
    const newProfile = new Profile(req.body);
    await newProfile.save();

    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const profileGet = async (req, res)=>{
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};
