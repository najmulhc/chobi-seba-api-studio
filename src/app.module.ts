import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express'; 
import { multerConfig } from './util/multer.config';

@Module({
  imports: [
    MulterModule.register(multerConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
