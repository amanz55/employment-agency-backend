import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";

import candidateRouter from "./routes/candidate-router";
import adminRouter from "./routes/admin-router";
import reservationRouter from "./routes/reservation-router";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// app.use(cookieParser);

app.use("/candidates", candidateRouter);
app.use("/admins", adminRouter);
app.use("/reservations", reservationRouter);

app.get("/", (req, res) => {
  res.send("hello from express server");
});

export default app;
