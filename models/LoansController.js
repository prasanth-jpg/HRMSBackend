import mongoose from "mongoose";

const LoanSchema = new mongoose.Schema(
    {
        LoansId: { type: String, required: true },
        LoansType: { type: String, required: true },
        LoansName: { type: String, required: true },
        NumberofLoans	: { type: String, required: true },
        EMIType: { type: String, required: true },
        LoansAmount: { type: String, required: true },
        RateOfInterest: { type: String, required: true },
        StandaradInterestRating: { type: String, required: true },
        email: { type: String, required: true, unique:true },

    },
    { timestamps: true }
);

export default mongoose.model("LoanSchema", LoanSchema);
