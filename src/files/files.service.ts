import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as fs from 'fs';
import env from '@environments';
import { renameKey } from '@shared';
import { File, FileDocumnet } from './entities/file.entity';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { SearchFileInput } from './dto/search-file.input';

@Injectable()
export class FilesService implements OnModuleInit {
  listaTodasImgs = [];
  constructor(@InjectModel(File.name) private readonly fileModel: Model<FileDocumnet>) {}

  async create(createFileInput: CreateFileInput): Promise<File> {
    const file = new this.fileModel(createFileInput);
    return await file
      .save()
      .then((res) => {
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.error(err);
        return err;
      });
  }

  async update(id: string, updateFileInput: UpdateFileInput): Promise<File> {
    return await this.fileModel
      .findByIdAndUpdate(id, updateFileInput, { new: true, useFindAndModify: false })
      .exec()
      .then((res) => {
        Logger.log(res);
        return res;
      })
      .catch((err) => {
        Logger.error(err);
        return err;
      });
  }

  async listarInfoArquivos(filters?: SearchFileInput, qtde?: any) {
    for (let item in filters) {
      if (!!filters[item]['in']) filters[item] = await renameKey(filters[item], 'in', '$in');
      if (!!filters[item]['gte']) filters[item] = await renameKey(filters[item], 'gte', '$gte');
      if (!!filters[item]['lte']) filters[item] = await renameKey(filters[item], 'lte', '$lte');
      if (!!filters[item]['lt']) filters[item] = await renameKey(filters[item], 'lt', '$lt');
      if (!!filters[item]['gt']) filters[item] = await renameKey(filters[item], 'gt', '$gt');
      if (!!filters[item]['eq']) filters[item] = await renameKey(filters[item], 'eq', '$eq');
    }
    return await this.fileModel
      .find({ ...filters })
      .limit(qtde)
      .then((res) => {
        res.forEach((el) => Logger.log(`findAll: ${el._id}`));
        return res;
      })
      .catch((err) => {
        Logger.log(`findAll: ${err}`);
        return err;
      });
  }

  async findOne(param: SearchFileInput): Promise<File> {
    return await this.fileModel
      .findOne(param)
      .then((res) => {
        Logger.log(`findOne: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`findOne: ${err}`);
        return err;
      });
  }

  async listarTodosArquivos() {
    const dir = env().FILE_UPLOAD_DIR;
    let data = [];
    let filenames = fs.readdirSync(dir);
    filenames.forEach((file) => {
      data.push(file);
    });
    return data;
  }

  /* Deleta o arquivo e sua entrada no mongodb */
  async deletarArquivo(nome: string) {
    const id = await this.findOne({ name: nome });
    if (id !== null) {
      const deletado = await this.fileModel
        .findByIdAndDelete(id._id)
        .then((res) => {
          Logger.log(`remove: ${res}`);
          return res ? true : false;
        })
        .catch((err) => {
          Logger.log(`remove: ${err}`);
          return err;
        });

      Logger.log(`remove: ${deletado}`);
    }

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
