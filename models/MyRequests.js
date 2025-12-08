import mongoose from "mongoose";

const MyRequests = new mongoose.Schema(
    {
        ExpenseDate	: { type: String, required: true },
        ClaimDate: { type: String, required: true },
        InvoiceNumber: { type: String, required: true },
        ExpenseType		: { type: String, required: true },
        UserDescription	: { type: String, required: true },
        Current: { type: String, required: true },
        email: { type: String, required: true, unique:true },
    },
    { timestamps: true }
);

export default mongoose.model("MyRequests", MyRequests);
