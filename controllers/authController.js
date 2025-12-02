import User from "../models/User.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(403).json({ message: "Incorrect email or password" });
    }

    res.json({
      message: "Login successful",
      user: {
        email: user.email
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
