import { Router } from "express";
import reservationRepository from "../controllers/reservation-repository.js";
import sendEmail from "../utils/send-email.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const result = await reservationRepository.createReservation(req.body);
    console.log(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in createReservation route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/sendmail", async (req, res) => {
  try {
    const number = Math.floor(100000 + Math.random() * 900000);
    const result = await sendEmail(
      req.body.customer_email,
      number,
      "Verification Code"
    );
    // console.log(req.body.customer_email, number);
    res.status(200).json({ result: number });
  } catch (error) {
    console.error("Error in createReservation route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await reservationRepository.findAll();
    res.json(result);
  } catch (error) {
    console.error("Error in findAll route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await reservationRepository.findOne(+req.params.id);
    res.json(result);
  } catch (error) {
    console.error("Error in findOne route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await reservationRepository.updateReservation(
      +req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    console.error("Error in updateReservation route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await reservationRepository.deleteOne(+req.params.id);
    res.json(result);
  } catch (error) {
    console.error("Error in deleteOne route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
