import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import env from '@environments';
import { File, FileDocumnet } from './entities/file.entity';

@Injectable()
export class FilesService implements OnModuleInit {
  listaTodasImgs = [];
  constructor() {}

  async listarTodosArquivos() {
    const dir = env().FILE_UPLOAD_DIR;
    let data = [];
    let filenames = fs.readdirSync(dir);
    filenames.forEach((file) => {
      data.push(file);
    });
    return data;
  }

  async deletarArquivo(nome: string) {
    const file = `${env().FILE_UPLOAD_DIR}/${nome}`;
    try {
      if (fs.existsSync(file)) {
        fs.unlinkSync(file);
        Logger.log(`Arquivo ${nome} deletado`);
        return `Arquivo ${nome} deletado`;
      } else {
        Logger.log(`Arquivo ${nome} não existe mais`);
        return `Arquivo ${nome} não existe mais`;
      }
    } catch (error) {
      Logger.log(error);
    }
  }

  /* Checa se existe a pasta e então a cria, se caso não existir */
  onModuleInit(): void {
    if (!fs.existsSync(env().FILE_UPLOAD_DIR)) {
      fs.mkdirSync(env().FILE_UPLOAD_DIR);
    }
  }
}
