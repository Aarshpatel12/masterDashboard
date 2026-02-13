import express from "express";

import login from "../controllers/authController"

router.post("/login",login);
export default  router