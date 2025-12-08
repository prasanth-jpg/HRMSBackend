import mongoose from "mongoose";

const CompletedFlowSchema = new mongoose.Schema(
    {
        ReviewCycleName	: { type: String, required: true },
        CompletedDate: { type: String, required: true },
        GoalsOverallRating	: { type: String, required: true },
        CompetenciesOverallRating	: { type: String, required: true },
        PerformanceReview	: { type: String, required: true, unique:true },
        Actions	: { type: String, required: true, unique:true },
    },
    { timestamps: true }
);

export default mongoose.model("CompletedFlow", CompletedFlowSchema);
