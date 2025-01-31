import express from 'express';
import * as controller from '../controller/testController.js'
// import { getTest } from '../controller/testController.js';

const router = express.Router();

/**router 정보 매핑 */
router.get('/', controller.getTest); // /test와 같음('/test'를 use로 넘겨 get으로 받았고 controller에게 넘긴다)
router.get('/product', controller.getTestProduct); 

export default router;