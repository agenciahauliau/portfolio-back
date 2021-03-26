import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { multerOptions } from './multer.config';

@Controller('files')
export class FilesController {
  @Get(':nome')
  busca(@Param('nome') nome, @Res() res) {
    return res.sendFile(nome, { root: 'uploads' });
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('files', multerOptions))
  async upload(@UploadedFile() files) {
    return { data: files.path };
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 4, multerOptions))
  uploadFile(@UploadedFiles() files: Express.Multer.File) {
    console.log(files);
  }
  /* @Post('subir')
  @UseInterceptors(
    FilesInterceptor('files', 4, {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const fileNameSplit = file.originalname.split('.');
          const fileExt = fileNameSplit[fileNameSplit.length - 1];
          cb(null, `${Date.now()}.${fileExt}`);
        },
      }),
    }),
  )
  uploadFile(@UploadedFiles() files: Express.Multer.File) {
    console.log(files);
  } */

  @Post('muitos')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'background', maxCount: 4 },
    ]),
  )
  uploadFiles(@UploadedFiles() files) {
    console.log(files);
  }
}
