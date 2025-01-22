import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "profileImage") {
      cb(null, "src/uploads/users/");
      console.log("File", file);
    } else if (file.fieldname === "image") {
      cb(null, "src/uploads/posts/");
    } else {
      cb(new Error("Invalid fieldname"), false); // Handle unknown fieldnames
    }
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}` // Fixed syntax
    );
  },
});

const checkFileType = (file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|webp/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 }, // 10 MB limit
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

export default upload;
