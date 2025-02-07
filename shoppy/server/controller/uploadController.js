import multer from "multer";
import fs from "fs";
import path from "path";


//multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload_files/') // 실제 저장되는 폴더 경로
        },
        filename: function (req, file, cb) {//파일 이름을 자동으로 붙여주는 작업
            // cb(null, file.fieldname + '-' + Date.now()) <- 기본 변경 툴
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9) + "-" 
            cb(null, uniqueSuffix + file.originalname); // 오리지널 이름에 확장자도 붙기 때문에 uni~는 앞에 준다. 
            // cb(null, file.originalname); // 오리지널 이름으로 주는 법
        }
    })

    const upload = multer({ storage: storage }).single("file");
    //file이 넘어오는 것이기 때문에 file로 받는다는 선언이다. (ImageUpload에서 선언한 것.)

/**
 * 
 * 파일 업로드 실행 함수 
 * 
 */
export const fileUpload =(req, res)=> {
// res를 통해 라우터에 업로드를 실행하게 하는게 여기. 멀터가 움직이게 하도록 멀터(https://github.com/expressjs/multer/blob/master/doc/README-ko.md)
//
    upload(req, res, (err)=>{
        if(err){
            console.log(err);
        } else{
            // res.json({test: "파일 업로드 성공!"});
            // console.log(req.file); //전달 된 파일 ==> multer 이용한 파일 업로드
            // console.log(req.body.oldFile); // 전달된 문자 
            // 서버에서 확인용 로그는 찍으러왔다 작업을 진행해서 비효율적. 확인하고나선 삭제하기 
            const oldFile = req.body.oldFile;
            if(oldFile){
                //oldFile 존재 시 업로드 폴더에서 삭제 
                const oldFilePath = path.join("upload_files/", oldFile); 
                //join... Node에서 윈도우 경로를 연결하는 것. 해당 경로를 통해 파일이 있는지 텍스트를 보내는 작업
                if(fs.existsSync(oldFilePath)){
                    try{
                        fs.unlinkSync(oldFilePath);
                        console.log("이전 파일 삭제 완료:", oldFilePath);
                    } catch(error){
                        console.log("이전 파일 삭제 실패", error);
                        
                    }
                }
            }

            res.json({
                "uploadFileName" : res.req.file.path,   //res.req는 여기서 붙인 이름 경로를 가져오는 것(path) 
                "sourceFileName" : req.file.originalname, //req는 업로드 될 때 파일 자체의 이름을 가져오는 것 
                "oldFile" : res.req.file.filename
            })        
        }
    }); // 업로드 결과를 가져오기 13번 줄의 부모라 모든 걸 불러 올 수 있다. 
}