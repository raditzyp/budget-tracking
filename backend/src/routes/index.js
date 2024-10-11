import express from "express";

// controller
import { 
    getAllTransaction,
    createTransaction,
    updateTransaction,
    deleteTransaction
} from "../controllers/index.js";

const router = express.Router();

router.get("/getAllTransaction", getAllTransaction);
router.post("/createTransaction", createTransaction);
router.patch("/updateTransaction/:id", updateTransaction);
router.post("/deleteTransaction", deleteTransaction);

router.get("/", (req, res) => {
    res.send("Selamat Datang di API Budget Tracking");
});

export default router;