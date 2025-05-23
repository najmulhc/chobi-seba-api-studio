import { diskStorage } from "multer";

 const storageInfo = {
  destination: './uploads',
  filename: function (req, file, callback) {
    function generateHex16() {
      let hex = '';
      for (let i = 0; i < 16; i++) {
        hex += Math.floor(Math.random() * 16).toString(16);
      }
      return hex;
    }
    callback(null, generateHex16() + '.' + file.mimetype.split(`/`)[1]);
  },
};

export const multerConfig = {
  storage: diskStorage(storageInfo),
};
