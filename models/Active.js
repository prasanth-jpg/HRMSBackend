import mongoose from "mongoose";

const ActiveSchema = new mongoose.Schema(
    {
        ReviewCycleName: { type: String, required: true },
        CompletedDate: { type: String, required: true },
        GoalsOverallRating: { type: String, required: true },
        CompetenciesOverallRating: { type: String, required: true },
        PerformanceReview	: { type: String, required: true },
        Actions: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Active", ActiveSchema);
