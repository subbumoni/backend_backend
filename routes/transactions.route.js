import express from "express";
import {
  TransactionIndex,
  TransactionCreate,
  TransactionUpdate,
  TransactionDelete,
  TransactionDetail,
  
} from "../controllers/transaction.controller.js";
const router = express.Router();

//Get method Transaction Api
router.get("/", TransactionIndex);

router.get("/:id",TransactionDetail);
//Post method Transaction Api
router.post("/addtransaction", TransactionCreate);

//put method Transaction Api
router.put("/:id", TransactionUpdate);

//Get method Transaction Api
router.delete("/:id", TransactionDelete);

export default router;
