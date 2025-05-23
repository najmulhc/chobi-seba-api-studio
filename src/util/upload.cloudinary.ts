import { v2 as cloudinary } from "cloudinary";

export const uploadOnCloudinary = async (file: Express.Multer.File) => {
  cloudinary.config({
    cloud_name: 'dzruagzhw',
    api_key: '965192888623839',
    api_secret: 'v0fqKyZUeH4a2_6YI6g4E3leH80',
  });

  const { url } = await cloudinary.uploader.upload(file.path);

  return url; 
}
