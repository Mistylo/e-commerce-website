import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname); // 修改 callback 为 cb
    }
});

const upload = multer({ storage });

export default upload;
