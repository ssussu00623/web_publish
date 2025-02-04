import express from 'express'
import * as controller from '../controller/memberController.js'

const router = express.Router();

//회원가입 -1
router
    .post('/signup', controller.registerMember) // 회원가입
// post 로 보내고 있기 때문에 포스트로 받아야 한다. get으로 보냈다면 이렇게 못 받음 
// 함수처럼 registerMember뒤에 ()를 붙이면 안됨!! 오류가 나다.
    .post('/idcheck', controller.getIdCheck); // 아이디 중복체크

//로그인

//아이디 중복체크 등 -2 

export default router;