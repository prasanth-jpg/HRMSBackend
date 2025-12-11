import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import itemRoutes from "./routes/itemRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import payPackageRoutes from "./routes/payPackageRoutes.js";
import flexComponentsRoutes from "./routes/flexComponentsRoutes.js";
import iTDeclarationsRoutes from "./routes/iTDeclarationsRoutes.js";
import taxSheetRoutes from "./routes/taxSheetRoutes.js";
import PaySlipRoutes from "./routes/PaySlipRoutes.js";
import ExtraPaymentsRoutes from "./routes/ExtraPaymentsRoutes.js";
import LoansRoutes from "./routes/LoansRoutes.js";
import ExtraDeductionsRoutes from "./routes/ExtraDeductionsRoutes.js";
import PayrollDocumentsRoutes from "./routes/PayrollDocumentsRoutes.js";
import ResumeRoutes from "./routes/ResumeRoutes.js";
import individualFeedBack from "./routes/individualFeedBack.js";
import MyRequestsRoutes from "./routes/MyRequestsRoutes.js";
// import MyBenefitsRoutes from "./routes/MyBenefitsRoutes.js";
import BenefitsSlipsRoutes from "./routes/BenefitsSlipsRoutes.js";
import ActiveRoutes from "./routes/ActiveRoutes.js";
import DraftsRoutes from "./routes/DraftsRoutes.js";
import CompletedFlowRoutes from "./routes/CompletedFlowRoutes.js";
import RevokedFlowRoutes from "./routes/RevokedFlowRoutes.js";
import AllWorkflowFlowRoutes from "./routes/AllWorkflowFlowRoutes.js";
import NotificationRoutes from "./routes/NotificationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES

app.use("/api/items", itemRoutes);

//login
app.use("/api/auth", authRoutes);

//attendence
app.use("/api/attendance", attendanceRoutes);

//profile
app.use("/api/profile", profileRoutes);

//compensation
app.use("/api/payPackage", payPackageRoutes);
app.use("/api/flexComponents", flexComponentsRoutes);
app.use("/api/ITDeclarations", iTDeclarationsRoutes);
app.use("/api/TaxSheet", taxSheetRoutes);
app.use("/api/PaySlip", PaySlipRoutes);
app.use("/api/ExtraPayments", ExtraPaymentsRoutes);
app.use("/api/Loans", LoansRoutes);
app.use("/api/ExtraDeductions", ExtraDeductionsRoutes);
app.use("/api/PayrollDocuments", PayrollDocumentsRoutes);

//interview
app.use("/api/Resume", ResumeRoutes);
app.use("/api/individualFeedBack", individualFeedBack);

//benifits
app.use("/api/MyRequests", MyRequestsRoutes);
// app.use("/api/MyBenefits", MyBenefitsRoutes);
app.use("/api/BenefitsSlips", BenefitsSlipsRoutes);

//flow
app.use("/api/Active", ActiveRoutes);
app.use("/api/Drafts", DraftsRoutes);
app.use("/api/CompletedFlowRoutes", CompletedFlowRoutes);
app.use("/api/RevokedFlowRoutes", RevokedFlowRoutes);
app.use("/api/AllWorkflowFlowRoutes", AllWorkflowFlowRoutes);

//notifications
app.use("/api/Notification", NotificationRoutes);


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mydb")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));
