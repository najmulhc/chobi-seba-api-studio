import { ConsoleLogger, Injectable } from '@nestjs/common';
import { uploadOnCloudinary } from './util/upload.cloudinary';
import { unlink } from 'fs';
import {removeBackgroundFromImageUrl } from 'remove.bg'
import { removeBg } from './util/remove.bg';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async fixImage(file: Express.Multer.File) {

    const url1 = await uploadOnCloudinary(file , []);
    // removing the file from /uploads
    unlink(file.path, (error) => {
      if (error) {
        console.log(error);
      }
    });

    const url = await removeBg(url1 , file)

    return {
      url,
    };

    // remove the background using remove.bg
    // resize the image using sharp ai.
    // repost the latest image to cloudinary
    // mail the user with the image url
  }
}
