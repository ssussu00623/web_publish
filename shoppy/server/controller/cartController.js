import * as repository from '../repository/cartRepository.js'

export const cartController =async(req, res)=>{
    // console.log("req.body=====>", req.body);
    const result = await repository.addCart(req.body);
    res.json(result)
    res.end()
}