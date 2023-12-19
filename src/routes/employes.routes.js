import { Router } from "express";
import {getEmployess,createEmployees,updateEmployees,deleteEmployees,getEmploye} from "../controllers/employees.controller.js"
const router=Router()

router.get("/employes",getEmployess)
router.get("/employes/:id",getEmploye)

router.post("/employes",createEmployees)

router.patch("/employes/:id",updateEmployees)

router.delete("/employes/:id",deleteEmployees)

export default router