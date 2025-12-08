import mongoose from "mongoose";

const ExtraDeductionSchema = new mongoose.Schema(
    {
        Name: { type: String, required: true },
        Category: { type: String, required: true },
        Amount: { type: String, required: true },
        NumberofDeductions: { type: String, required: true },
        PayRun: { type: String, required: true },
        Type: { type: String, required: true },
        StartDate: { type: String, required: true },
        EndDate: { type: String, required: true },
        email: { type: String, required: true, unique:true },

    },
    { timestamps: true }
);

export default mongoose.model("ExtraDeduction", ExtraDeductionSchema);
