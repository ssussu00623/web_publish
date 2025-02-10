import multer from "multer";
import fs from "fs";
import path from "path";


//multer 라이브러리로 파일을 업로드 폴더에 저장
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload_files/') // 실제 저장되는 폴더 경로
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random()*1e9) + "-" 
            cb(null, uniqueSuffix + file.originalname); 
        }
    })

    

/**
 * 
 * 파일 업로드 실행 함수 
 * 
 */
export const fileUploadMultiple =(req, res)=> {
    const maxFiles = parseInt(req.query.maxFiles);
    const upload = multer({storage : storage }).array("files", maxFiles)
    // const upload = multer({ storage: storage }).array("files", 5); - 갯수 제한
    upload(req, res, (err)=>{
        if(err){
            console.log(err);
        } else{
            // console.log('업로드 파일 리스트--->',req.files);
            console.log('업로드 삭제파일(oldFile)--->', req.body.oldFile);
            const deleteFiles = req.body.oldFile;
            console.log(deleteFiles.length);
            const oldFileArray = deleteFiles.split(",");
            console.log(oldFileArray);
        
            // const oldFile = req.body.oldFile;
            for(const oldFile of oldFileArray){
            if(oldFile){
                //oldFile 존재 시 업로드 폴더에서 삭제 
                const oldFilePath = path.join("upload_files/", oldFile); 
                if(fs.existsSync(oldFilePath)){
                    try{
                        fs.unlinkSync(oldFilePath);
                        console.log("이전 파일 삭제 완료:", oldFilePath);
                    } catch(error){
                        console.log("이전 파일 삭제 실패", error);
                        
                    }
                }// if- if
            } // if
            }// for
            // ****꼭 기억****
            //res 객체를 이용한 전송객체 생성 <-> uploadController의 res객체명과 동일하게 정의!
            let uploadFileName = [];
            let sourceFileName = [];
            let oldFile = [];
            // req.files 배열의 파일정보를 가져와서 위의 배열에 추가한다. 
            //배열로 파일 목록이 넘어오므로... 삭제하는 것도 파일을 배열로 지정해야함. 
            for(const file of req.files){
                uploadFileName.push(file.path);
                sourceFileName.push(file.originalname);
                oldFile.push(file.filename)
            }
            res.json({
                "uploadFileName" : uploadFileName,  
                "sourceFileName" : sourceFileName,
                "oldFile" : oldFile
            })        
        }
    }); // 업로드 결과를 가져오기 13번 줄의 부모라 모든 걸 불러 올 수 있다. 
}