import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
  },
  date: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  records: [
    {
      clockIn: String,
      clockOut: String
    }
  ],
  totalWork: String,
  status: String,
}, { timestamps: true });

export default mongoose.model("Attendance", AttendanceSchema);