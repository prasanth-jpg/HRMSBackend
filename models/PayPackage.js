import mongoose from "mongoose";

const PayPackageSchema = new mongoose.Schema(
    {
        Earnings: { type: String, required: true },
        monthly: { type: String, required: true },
        annually	: { type: String, required: true },
        email: { type: String, required: true, unique:true },

    },
    { timestamps: true }
);

export default mongoose.models.PayPackage || mongoose.model("PayPackage", PayPackageSchema);
