import { Router } from "express";
import candidateRepository from "../controllers/candidate-repository";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const result = await candidateRepository.createCandidate(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error("Error in createCandidate route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await candidateRepository.findAll();
    res.json(result);
  } catch (error) {
    console.error("Error in findAll route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const new_id = +req.params.id;
    const result = await candidateRepository.findOne(new_id);
    res.json(result);
  } catch (error) {
    console.error("Error in findOne route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await candidateRepository.updateCandidate(
      +req.params.id,
      req.body
    );
    res.json(result);
  } catch (error) {
    console.error("Error in updateCandidate route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await candidateRepository.deleteOne(+req.params.id);
    res.json(result);
  } catch (error) {
    console.error("Error in deleteOne route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
