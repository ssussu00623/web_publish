import express from 'express';
import * as controller from '../controller/uploadController.js'

const router = express.Router(); // 제일 위 선언

router.post('/', controller.fileUpload); // post로 보냈으니 꼭 post로 받아야함.

export default router; // 맨 밑
