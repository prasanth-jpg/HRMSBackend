import mongoose from "mongoose";

const AllWorkflowFlowSchema = new mongoose.Schema(
    {
        ReviewCycleName: { type: String, required: true },
        completedDate: { type: String, required: true },
        GoalsOverallRating: { type: String, required: true },
        CompetenciesOverallRating: { type: String, required: true },
        PerformanceReview: { type: String, required: true },
        Actions: { type: String, required: true },
        email: { type: String, required: true, unique:true },
    },
    { timestamps: true }
);

export default mongoose.model("AllWorkflowFlow", AllWorkflowFlowSchema);
