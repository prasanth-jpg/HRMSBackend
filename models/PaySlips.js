import mongoose from "mongoose";

const PaySlipSchema = new mongoose.Schema({
    ForPeriod: { type: String, required: true },
    PaySlipType: { type: String, required: true },
    TotalWorkingHours: { type: String, required: true },
    Gross: { type: String, required: true },
    Deduction: { type: String, required: true },
    TDS: { type: String, required: true },
    email: { type: String, required: true, unique:true },

}, { timestamps: true });

export default mongoose.model("PaySlip", PaySlipSchema);
