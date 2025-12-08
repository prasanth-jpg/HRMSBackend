import mongoose from "mongoose";

const BenefitsSlipsSchema = new mongoose.Schema(
    {
        Month: { type: String, required: true },
        SlipNumber: { type: String, required: true },
        GeneratedOn	: { type: String, required: true },
        Download: { type: String, required: true },
        email: { type: String, required: true, unique:true },
    },
    { timestamps: true }
);

export default mongoose.model("BenefitsSlips", BenefitsSlipsSchema);
