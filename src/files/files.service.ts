import { Injectable, InternalServerErrorException, Logger, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { v4 } from 'uuid';
import { FILE_UPLOAD_DIR } from '@environments';
import { join } from 'path';
import { File } from './entities/file.entity';

@Injectable()
export class FilesService implements OnModuleInit {
  listaTodasImgs = [];
  constructor() {
    /**
     * Config CLOUDINARY - DESATIVADO POR HORA
    /* v2.config({
      cloud_name: CLOUDINARY_NAME,
      api_key: CLOUDINARY_API_KEY,
      api_secret: CLOUDINARY_API_SECRET,
    }); */
  }

  async listarTodosArquivos() {
    const dir = FILE_UPLOAD_DIR;
    let data = [];
    let filenames = fs.readdirSync(dir);
    filenames.forEach((file) => {
      data.push(file);
    });
    return data;
  }

  async deletarArquivo(nome: string) {
    const file = `${FILE_UPLOAD_DIR}/${nome}`;
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

  /*   async saveLocal({ createReadStream, filename }: FileUpload): Promise<File> {
    const name = `${v4()}-${filename}`;
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(fs.createWriteStream(join(FILE_UPLOAD_DIR, name)))
        .on('finish', () => resolve({ name }))
        .on('error', () => reject(new InternalServerErrorException())),
    );
  } */

  /**
   * Funções CLOUDINARY - Desativado por enquanto
   */
  /* async listaTodasImagens() {
    await v2.api.resources({ tag: 'portfolio' }, (error, result) => {
      this.listaTodasImgs = [];
      result.resources.map((e) => {
        this.listaTodasImgs.push(e.secure_url);
      });
      console.log(result, error);
    });
    return this.listaTodasImgs;
  }

  async saveRemoto({ createReadStream, filename }: FileUpload): Promise<File> {
    let data = new Date();
    let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
    let horaBrasil = data2.toISOString().replace(/\.\d{3}Z$/, '');
    console.log(v4());
    console.log(horaBrasil);
    const name = `${v4()}-${horaBrasil}-${filename}`;
    return await new Promise(async (resolve, reject) => {
      createReadStream()
        .pipe(
          v2.uploader.upload_stream(
            {
              allowed_formats: ['jpg', 'png', 'mp4', 'avi', 'mov'],
              folder: 'hualiau',
              public_id: name,
              tags: 'portfolio',
            },
            (error, result) => {
              console.log('error shared/index', error);
              console.log('result shared/index', result);
              if (error) {
                reject(error);
              }
              resolve(result);
            },
          ),
        )
        .on('close', () => resolve({ name }))
        .on('error', () => reject());
    });
  } */

  /* Checa se existe a pasta e então a cria, se caso não existir */
  onModuleInit(): void {
    if (!fs.existsSync(FILE_UPLOAD_DIR)) {
      fs.mkdirSync(FILE_UPLOAD_DIR);
    }
  }
}
