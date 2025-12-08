import mongoose from "mongoose";

const ExtraPaymentsSchema = new mongoose.Schema(
    {
        Name: { type: String, required: true },
        Category: { type: String, required: true },
        Value: { type: String, required: true },
        Unit: { type: String, required: true },
        Amount: { type: String, required: true },
        Type: { type: String, required: true },
        StartDate: { type: String, required: true },
        email: { type: String, required: true, unique:true },

    },
    { timestamps: true }
);

export default mongoose.model("extraPayments", ExtraPaymentsSchema);
