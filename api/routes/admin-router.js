import { Router } from "express";
import bcrypt from "bcrypt";
import adminRepository from "../controllers/admin-repository";
import generateToken from "../utils/generate-token";
const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const admin = await adminRepository.findOne(user_name);
    //   const hashedPassword = await hashPassword(password);
    if (!admin) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password.toString(),
      admin.password
    );
    if (isPasswordCorrect) {
      const token = generateToken(admin);
      // Assuming 'res' is the Express response object
      res.cookie("authToken", token, { httpOnly: true, secure: true });
      res.status(200).json({ token, message: "Login successful", user: admin });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
});

router.post("/logout", (req, res) => {
  // res.clearCookie("token");
  res.cookie(
    "authToken",
    "",
    { httpOnly: true, secure: true },
    { expire: new Date() - 9999 }
  );
  res.status(200).json({ message: "Logout successful" });
  console.log("Logout successful");
});

router.post("/", async (req, res) => {
  try {
    const result = await adminRepository.createAdmin(req.body);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error in createAdmin route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await adminRepository.findAll();
    res.json(result);
  } catch (error) {
    console.error("Error in findAll route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const result = await adminRepository.findOne(+req.params.id);
    res.json(result);
  } catch (error) {
    console.error("Error in findOne route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const result = await adminRepository.updateAdmin(+req.params.id, req.body);
    res.json(result);
  } catch (error) {
    console.error("Error in updateAdmin route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await adminRepository.deleteOne(+req.params.id);
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error("Error in deleteOne route:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
