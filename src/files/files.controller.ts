import { Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { multerOptions } from './multer.config';
import env from '@environments';

@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get()
  async tudo(@Res() res: Response) {
    return res.status(200).send(await this.filesService.listarTodosArquivos());
  }

  @Get(':nome')
  busca(@Param('nome') nome, @Res() res) {
    return res.sendFile(nome, { root: 'uploads' });
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', env().MAX_FILES, multerOptions))
  async upload(@UploadedFiles() files) {
    let dados = [];
    for (let file of files) {
      dados.push(file.filename);
    }
    return dados;
  }
}
