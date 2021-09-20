import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConfiguracaoInput } from './dto/create-configuracao.input';
import { SearchConfiguracaoInput } from './dto/search-configuracao.input';
import { UpdateConfiguracaoInput } from './dto/update-configuracao.input';
import { Configuracao, ConfiguracaoDocument } from './entities/configuracao.entity';

@Injectable()
export class ConfiguracaoService {
  constructor(
    @InjectModel(Configuracao.name) private readonly configuracaoModel: Model<ConfiguracaoDocument>,
  ) {}

  /* Salvando uma nova configuração */
  async create(createConfiguracaoInput: CreateConfiguracaoInput): Promise<Configuracao> {
    const createdConfiguracao = new this.configuracaoModel(createConfiguracaoInput);
    return await createdConfiguracao
      .save()
      .then((res) => {
        Logger.log(`create: configuracao _id:${res._id}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`create: ${err}`);
        return err;
      });
  }

  /* Buscando por todas as configurações */
  async findAll(filters?: SearchConfiguracaoInput): Promise<Configuracao[]> {
    return await this.configuracaoModel
      .find({ ...filters })
      .exec()
      .then((res) => {
        res.forEach((el) => Logger.log(`findAll: configuracao _id:${el._id}`));
        return res;
      })
      .catch((err) => {
        Logger.log(`findAll: ${err}`);
        return err;
      });
  }

  /* Buscando por apenas uma configuração */
  async findOne(param: SearchConfiguracaoInput): Promise<Configuracao> {
    return await this.configuracaoModel
      .findOne({ ...param })
      .exec()
      .then((res) => {
        Logger.log(`findOne: configuracao _id:${res._id}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`findOne: ${err}`);
        return err;
      });
  }

  /* Atualizando a configuração */
  async update(
    id: string,
    updateConfiguracaoInput: UpdateConfiguracaoInput,
  ): Promise<Configuracao> {
    return await this.configuracaoModel
      .findByIdAndUpdate(id, updateConfiguracaoInput, {
        new: true,
        useFindAndModify: false,
      })
      .exec()
      .then((res) => {
        Logger.log(`update: configuracao _id:${res._id}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`update: ${err}`);
        return err;
      });
  }

  /**
   * Removendo a configuração
   * @Param id: id da configuração
   */
  async remove(id: string): Promise<boolean> {
    return await this.configuracaoModel
      .findByIdAndDelete(id)
      .then((res) => {
        Logger.log(`remove: ${res}`);
        return true;
      })
      .catch((err) => {
        Logger.log(`remove: ${err}`);
        return false;
      });
  }
}
