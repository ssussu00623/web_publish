import express from "express"
import * as controller from "../controller/productController.js"

const router = express.Router();
router
    .post('/new', controller.registerProduct)
    .get('/all', controller.getList); // ProductList 에서 준 값

export default router;