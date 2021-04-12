import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeadInput } from './dto/create-lead.input';
import { UpdateLeadInput } from './dto/update-lead.input';
import { SearchLeadInput } from './dto/search-lead.input';
import { Lead, LeadDocument } from './entities/lead.entity';

@Injectable()
export class LeadsService {
  constructor(
    @InjectModel(Lead.name)
    private readonly leadModel: Model<LeadDocument>,
  ) {}

  async create(createLeadInput: CreateLeadInput): Promise<Boolean> {
    const createdLead = new this.leadModel(createLeadInput);
    return await createdLead
      .save()
      .then((res) => {
        Logger.log(`create: lead _id:${res._id}`);
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
        Logger.log(`lead findAll: ${res}`);
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
        useFindAndModify: true,
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
