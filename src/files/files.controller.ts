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
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from './multer.config';

@Controller('files')
export class FilesController {
  @Get(':nome')
  busca(@Param('nome') nome, @Res() res) {
    return res.sendFile(nome, { root: 'uploads' });
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async upload(@UploadedFile() file) {
    return file.path;
  }
}
