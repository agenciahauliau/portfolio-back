import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller('files')
export class FilesController {
  @Get(':nome')
  busca(@Param('nome') nome, @Res() res) {
    return res.sendFile(nome, { root: 'uploads' });
  }
}
