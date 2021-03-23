import { Injectable, InternalServerErrorException, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import { v4 } from 'uuid';
import { FileUpload } from 'graphql-upload';
import { join } from 'path';
import { File } from './entities/file.entity';

@Injectable()
export class FilesService implements OnModuleInit {
  constructor() {}

  async saveLocal({ createReadStream, filename }: FileUpload): Promise<File> {
    const name = `${v4()}-${filename}`;
    return new Promise((resolve, reject) =>
      createReadStream()
        .pipe(fs.createWriteStream(join('./uploads', name)))
        .on('finish', () => resolve({ name }))
        .on('error', () => reject(new InternalServerErrorException())),
    );
  }

  /* Checa se existe a pasta e então a cria, se caso não existir */
  onModuleInit(): void {
    if (!fs.existsSync('./uploads')) {
      fs.mkdirSync('./uploads');
    }
  }
}
