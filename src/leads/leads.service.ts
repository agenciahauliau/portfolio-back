import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeadInput } from './dto/create-lead.input';
import { UpdateLeadInput } from './dto/update-lead.input';
import { SearchLeadInput } from './dto/search-lead.input';
import { Lead, LeadDocument } from './entities/lead.entity';
import { ImoveisService } from '../imoveis/imoveis.service';
import { CreateImovelInput } from '../imoveis/dto/create-imovel.input';

@Injectable()
export class LeadsService {
  constructor(
    @InjectModel(Lead.name)
    private readonly leadModel: Model<LeadDocument>,
    private readonly imoveisService: ImoveisService,
  ) {}

  async create(createLeadInput: CreateLeadInput): Promise<Boolean> {
    let imovelID = [];
    if (createLeadInput.tipoLead === 'Anunciar meu Imóvel') {
      const imovelInput: CreateImovelInput = {
        nomeImovel: '',
        imagemPrincipal: [],
        categoriaImovel: createLeadInput?.categoriaImovel,
        jardins: false,
        destaque: false,
        descricaoImovel: '',
        tipoNegociacao: createLeadInput?.tipoNegociacao,
        statusImovel: '',
        aceitaPermuta: false,
        mobiliado: false,
        valorImovel: 0,
        valorEntrada: 0,
        valorParcela: 0,
        valorIPTU: 0,
        valorCondominio: 0,
        areaTotal: 0,
        areaConstruida: 0,
        andarImovel: 0,
        qtdeQuarto: 0,
        qtdeBanheiro: 0,
        qtdeSuites: 0,
        qtdeVagas: 0,
        nomeConstrutora: '',
        nomeProprietario: createLeadInput?.nome,
        telefoneProprietario: createLeadInput?.telefone.toString(),
        cep: '',
        logradouro: '',
        numeroLogradouro: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        comodidadesImovel: [''],
        comodidadesCondominio: [''],
        statusLancamento: 'pendente',
        previsaoLancamento: 0,
        galerias: [],
        imgPlantaCondominio: [],
        tipologias: [],
      };
      const result = await this.imoveisService.create(imovelInput);
      imovelID = [`${result._id}`];
      createLeadInput.imoveis = imovelID;
    }
    const createdLead = new this.leadModel(createLeadInput);
    return await createdLead
      .save()
      .then((res) => {
        Logger.log(`create: lead _id:${res}`);
        return res ? true : false;
      })
      .catch((err) => {
        Logger.log(`lead create error: ${err}`);
        return err;
      });
  }

  async findAll(qtde?: any, filters?: SearchLeadInput) {
    return await this.leadModel
      .find({ ...filters })
      .limit(qtde)
      .exec()
      .then((res) => {
        let result = [];
        res.forEach((el) => {
          result.push(el._id);
        });
        Logger.log(`lead findAll: ${result}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`lead findAll erro: ${err}`);
        return err;
      });
  }

  async findOne(param: SearchLeadInput): Promise<Lead> {
    return this.leadModel
      .findOne(param)
      .then((res) => {
        Logger.log(`lead findOne: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`lead findOne error: ${err}`);
        return err;
      });
  }

  async update(id: string, updateLeadInput: UpdateLeadInput): Promise<Lead> {
    return await this.leadModel
      .findByIdAndUpdate(id, updateLeadInput, {
        new: true,
        useFindAndModify: false,
      })
      .then((res) => {
        Logger.log(`lead update: ${res}`);
        return res;
      })
      .catch((err) => {
        Logger.log(`lead update error: ${err}`);
        return err;
      });
  }

  async remove(id: string): Promise<Boolean> {
    return await this.leadModel
      .findByIdAndDelete(id)
      .then((res) => {
        Logger.log(`lead remove: ${res}`);
        return res ? true : false;
      })
      .catch((err) => {
        Logger.log(`lead remove: ${err}`);
        return err;
      });
  }
}
