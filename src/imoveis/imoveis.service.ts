import { Logger, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Imovel, ImovelDocument } from './entities/imovel.entity';
import { CreateImovelInput } from './dto/create-imovel.input';
import { UpdateImovelInput } from './dto/update-imovel.input';
import { SearchImovelInput } from './dto/search-imovel.input';

@Injectable()
export class ImoveisService {
  constructor(
    @InjectModel(Imovel.name)
    private readonly imovelModel: Model<ImovelDocument>,
  ) {}

  async create(createImovelInput: CreateImovelInput): Promise<Imovel> {
    const createdImovel = new this.imovelModel(createImovelInput);
    return await createdImovel
      .save()
      .then((res) => {
        Logger.log(`create: imovel _id:${res._id}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`create: ${err}`);
        return err;
      });
  }

  /* Listar mais de um imóvel */
  async listarTudo(qtde?: any, filters?: SearchImovelInput) {
    return await this.imovelModel
      .find({ ...filters })
      .limit(qtde)
      .exec()
      .then((res) => {
        Logger.log(`findAll: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`findAll: ${err}`);
        return err;
      });
  }

  async findOne(param: SearchImovelInput): Promise<Imovel> {
    return await this.imovelModel
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

  async update(id: string, updateImovelInput: UpdateImovelInput): Promise<Imovel> {
    return await this.imovelModel
      .findByIdAndUpdate(id, updateImovelInput, {
        new: true,
        useFindAndModify: true,
      })
      .then((res) => {
        Logger.log(`update: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`update: ${err}`);
        return err;
      });
  }

  async remove(id: string): Promise<boolean> {
    return await this.imovelModel
      .findByIdAndDelete(id)
      .then((res) => {
        Logger.log(`remove: ${res}`);
        return res ? true : false;
      })
      .catch((err) => {
        Logger.log(`remove: ${err}`);
        return err;
      });
  }
}
