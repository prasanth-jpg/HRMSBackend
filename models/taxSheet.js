import mongoose from "mongoose";

const taxSheetSchema = new mongoose.Schema(
    {
        Basic: { type: String, required: true },
        HRA: { type: String, required: true },
        OtherAllownces: { type: String, required: true },
        TotalExtraPayments	: { type: String, required: true },
        GrossSalary: { type: String, required: true },
        Deduction: { type: String, required: true },
        ProvidentFund	: { type: String, required: true },
        ProfessionalTax	: { type: String, required: true },
        TDS: { type: String, required: true },
        TotalDeductions: { type: String, required: true },
        email: { type: String, required: true, unique:true },
    },
    { timestamps: true }
);

export default mongoose.model("taxSheet", taxSheetSchema);
