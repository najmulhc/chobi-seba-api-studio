import { removeBackgroundFromImageUrl } from 'remove.bg';
import { uploadOnCloudinary } from './upload.cloudinary';

export const removeBg = async (url, file) => {
  const outDir = './uploads/output.png';
  await removeBackgroundFromImageUrl({
    url: url,
    apiKey: 'rNz2XDhVeFoQbuP84b62cox2',
    outputFile: outDir,
    bg_color: '#ffffff',
  });
  file.path = outDir;
  return await uploadOnCloudinary(file, [
    { width: 300, height: 300, crop: 'thumb', gravity: "face" },

  ]);
};
