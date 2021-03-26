import { Controller, Get, Param, Post, Res, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from './files.service';
import { multerOptions } from './multer.config';
@Controller('files')
export class FilesController {
  constructor(private filesService: FilesService) {}

  @Get(':nome')
  busca(@Param('nome') nome, @Res() res) {
    return res.sendFile(nome, { root: 'uploads' });
  }

  @Get()
  async tudo(@Res() res: Response) {
    return res.status(200).send(await this.filesService.listaLocal());
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('files', 10, multerOptions))
  async upload(@UploadedFiles() files) {
    let dados = [];
    for (let file of files) {
      dados.push(file.path);
    }
    return dados;
  }
}
