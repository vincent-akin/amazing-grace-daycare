import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import testRoutes from "./routes/test.routes.js";
import admissionRoutes from "./routes/admission.routes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/admissions", admissionRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Amazing Grace API running" });
});

export default app;