import Profile from "../models/profile.js";

export const createProfile = async (req, res) => {
  try {
    console.log("req.body", req.body)
    const newProfile = new Profile(req.body);
    await newProfile.save();

    res.status(201).json({ message: "Profile created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const profileGet = async (req, res) => {
  try {
    const { emailId } = req.params.email;
    const profile = await Profile.findOne({ emailId });
    if (!profile) {
      return res.status(404).json({ message: "No profile found" })
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
