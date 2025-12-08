import mongoose from "mongoose";

const PayDocumentsSchema = new mongoose.Schema(
    {
        DocumentUId: { type: String, required: true },
        DocumentCode: { type: String, required: true },
        DocumentName: { type: String, required: true },
        Frequency	: { type: String, required: true },
        PayPeriod: { type: String, required: true },
        PayRun: { type: String, required: true },
        Actions: { type: String, required: true },
        email: { type: String, required: true, unique:true },

     },
    { timestamps: true }
);

export default mongoose.model("payDocuments", PayDocumentsSchema);
