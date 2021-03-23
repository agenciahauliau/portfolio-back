import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGaleriaInput } from './dto/create-galeria.input';
import { SearchGaleriaInput } from './dto/search-galeria.input';
import { UpdateGaleriaInput } from './dto/update-galeria.input';
import { Galeria, GaleriaDocument } from './entities/galeria.entity';

@Injectable()
export class GaleriaService {
  constructor(
    @InjectModel(Galeria.name)
    private readonly galeriaModel: Model<GaleriaDocument>,
  ) {}

  async create(createGaleriaInput: CreateGaleriaInput): Promise<Galeria> {
    const createdGaleria = new this.galeriaModel(createGaleriaInput);
    return await createdGaleria
      .save()
      .then((res) => {
        Logger.log(`create: galeria _id:${res._id}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`galeria create error: ${err}`);
        return err;
      });
  }

  async findAll(qtde?: any, filters?: SearchGaleriaInput) {
    return await this.galeriaModel
      .find({ ...filters })
      .limit(qtde)
      .exec()
      .then((res) => {
        Logger.log(`galeria findAll: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`galeria erro: ${err}`);
        return err;
      });
  }

  async findOne(param: SearchGaleriaInput): Promise<Galeria> {
    return this.galeriaModel
      .findOne(param)
      .then((res) => {
        Logger.log(`galeria findOne: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`galeria findOne: ${err}`);
        return err;
      });
  }

  async update(id: string, updateGaleriaInput: UpdateGaleriaInput): Promise<Galeria> {
    return await this.galeriaModel
      .findByIdAndUpdate(id, updateGaleriaInput, {
        new: true,
        useFindAndModify: true,
      })
      .then((res) => {
        Logger.log(`galeria update: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`galeria update: ${err}`);
        return err;
      });
  }

  async remove(id: string): Promise<Boolean> {
    return await this.galeriaModel
      .findByIdAndDelete(id)
      .then((res) => {
        Logger.log(`galeria remove: ${res}`);
        return res ? true : false;
      })
      .catch((err) => {
        Logger.log(`galeria remove: ${err}`);
        return err;
      });
  }
}
