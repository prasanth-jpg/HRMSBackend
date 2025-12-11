import mongoose from "mongoose";

const NotificationsSchema = new mongoose.Schema(
    {
        noti: { type: String, required: true },
        email: { type: String, required: true },

     },
    { timestamps: true }
);

export default mongoose.model("notifications", NotificationsSchema);
