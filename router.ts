import { Router, Context } from "https://deno.land/x/oak/mod.ts";
import {
  getEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} from "./employees.ts";

const router = new Router();

router.get("/hello", (context: Context) => {
  context.response.body = "hello world";
});

router.get("/employees", getEmployees);

router.get("/employee/:id", getEmployee);

router.post("/employee", addEmployee);

router.put("/employee", updateEmployee);

router.delete("/employee/:id", deleteEmployee);

export default router;
