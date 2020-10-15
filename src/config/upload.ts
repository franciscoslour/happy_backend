import multer from 'multer';
import path from 'path';

export default{
    storage: multer.diskStorage({
        destination:  path.join(__dirname, '..', '..', 'uploads'), 
        filename: (request, file, cp)=>{
            const fileName = `${Date.now()}-${file.originalname}`;
            cp(null, fileName);
        }
    })
}