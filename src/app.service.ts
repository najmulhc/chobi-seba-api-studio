import { Injectable } from '@nestjs/common';
import { uploadOnCloudinary } from './util/upload.cloudinary';
import { unlink } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async fixImage(file: Express.Multer.File) {
    const url = await uploadOnCloudinary(file);
    // removing the file from /uploads
    await unlink(file.path, function (error) {
      console.log(error)
    })
    return {
      url,
    };

    // remove the background using remove.bg
    // resize the image using sharp ai.
    // repost the latest image to cloudinary
    // mail the user with the image url
  }
}
