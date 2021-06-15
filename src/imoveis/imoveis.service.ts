import { Logger, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Imovel, ImovelDocument } from './entities/imovel.entity';
import { CreateImovelInput } from './dto/create-imovel.input';
import { UpdateImovelInput } from './dto/update-imovel.input';
import { SearchImovelInput } from './dto/search-imovel.input';
import { renameKey } from '@shared';
import { SearchImovelCondInput } from './dto/search-filter-imovel.input';
import { imoveis, imoveisId } from '../imoveis';

@Injectable()
export class ImoveisService {
  constructor(
    @InjectModel(Imovel.name)
    private readonly imovelModel: Model<ImovelDocument>,
  ) {
    /* for (let imov of imoveis) {
      this.create(imov);
    } */
    /* for (const id of imoveisId) {
      this.temp(id);
    } */
  }

  async temp(id: string) {
    let imovel = await this.findOne({ _id: id });
    let comodImovel, comodCondominio;
    imovel.comodidadesImovel[0]
      ? (comodImovel = imovel.comodidadesImovel[0].split(','))
      : (comodImovel = []);
    imovel.comodidadesCondominio[0]
      ? (comodCondominio = imovel.comodidadesCondominio[0].split(','))
      : (comodCondominio = []);

    await this.imovelModel
      .findByIdAndUpdate(
        id,
        { comodidadesCondominio: comodCondominio, comodidadesImovel: comodImovel },
        {
          useFindAndModify: true,
        },
      )
      .then((res) => {
        Logger.log(`update: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`update: ${err}`);
        return err;
      });
  }

  async create(createImovelInput: CreateImovelInput): Promise<Imovel> {
    createImovelInput.valorEntrada = await this.menorValor(
      createImovelInput.tipologias,
      'valorEntrada',
    );
    createImovelInput.valorParcela = await this.menorValor(
      createImovelInput.tipologias,
      'valorParcela',
    );
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
  async listarTudo(filters?: SearchImovelInput, qtde?: any) {
    return await this.imovelModel
      .find({ ...filters })
      .limit(qtde)
      .exec()
      .then((res) => {
        res.forEach((el) => Logger.log(`findAll: ${el._id}`));
        return res;
      })
      .catch((err) => {
        Logger.log(`findAll: ${err}`);
        return err;
      });
  }

  /* Listar mais de um imóvel */
  async listarTudoComFiltros(filters?: SearchImovelCondInput, qtde?: any) {
    for (let item in filters) {
      if (!!filters[item]['in']) filters[item] = await renameKey(filters[item], 'in', '$in');
      if (!!filters[item]['gte']) filters[item] = await renameKey(filters[item], 'gte', '$gte');
      if (!!filters[item]['lte']) filters[item] = await renameKey(filters[item], 'lte', '$lte');
      if (!!filters[item]['lt']) filters[item] = await renameKey(filters[item], 'lt', '$lt');
      if (!!filters[item]['gt']) filters[item] = await renameKey(filters[item], 'gt', '$gt');
    }
    if (filters?.or != undefined && Object.keys(filters?.or)?.length === 0) filters.or = [{}];
    if (filters?.or != undefined) filters = await renameKey(filters, 'or', '$or');
    return await this.imovelModel
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
    updateImovelInput.valorEntrada = await this.menorValor(
      updateImovelInput.tipologias,
      'valorEntrada',
    );
    updateImovelInput.valorParcela = await this.menorValor(
      updateImovelInput.tipologias,
      'valorParcela',
    );
    return await this.imovelModel
      .findByIdAndUpdate(id, updateImovelInput, {
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

  /* Função interna para inserir muitos ao mesmo tempo */
  private async insertMany() {
    await this.imovelModel
      .insertMany(imoveis)
      .then((res) => {
        Logger.log(`insert many: ${res}`);
        console.log('insert many: ', res);
        return res;
      })
      .catch((err) => {
        Logger.log(`insert many: ${err}`);
        return err;
      });
  }

  /* Função interna para atualizar muitos ao mesmo tempo */
  private async updateMany() {
    await this.imovelModel
      .updateMany(
        { _id: { $in: imoveisId } },
        { $set: { telefoneProprietario: '', nomeProprietario: '' } },
      )
      .then((res) => {
        Logger.log(`update many: ${res}`);
        console.log('update many: ', res);
        return res;
      })
      .catch((err) => {
        Logger.log(`update many: ${err}`);
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

  /**
   * @Param input: É o array object que você quer inserir. Ex: createdImovelInput.tipologias
   * @Param param: Vai ser usar para definir qual key do objeto terá o dado extraído. Ex: valorEntrada
   */
  private async menorValor(input: any, param: string): Promise<number> {
    if (!input) return 0;
    if (!input.length) return 0;
    let result = [];
    for (const i of input) {
      result.push(i[param]);
    }
    return Math.min(...result);
  }
}
