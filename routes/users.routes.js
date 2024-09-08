import express from 'express';
import {
  UserIndex,
  UserCreate,
  userlogin,
} from "../controllers/users.controller.js";
const router = express.Router()


// users getting 
router.get("/", UserIndex);

// users creating datas 
router.post("/", UserCreate);

router.post("/login", userlogin);
// users update details





export default router;