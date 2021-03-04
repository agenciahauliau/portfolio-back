import { Injectable } from '@nestjs/common';
import { CreateImoveiInput } from './dto/create-imovei.input';
import { UpdateImoveiInput } from './dto/update-imovei.input';

@Injectable()
export class ImoveisService {
  create(createImoveiInput: CreateImoveiInput) {
    return 'This action adds a new imovei';
  }

  findAll() {
    return `This action returns all imoveis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imovei`;
  }

  update(id: number, updateImoveiInput: UpdateImoveiInput) {
    return `This action updates a #${id} imovei`;
  }

  remove(id: number) {
    return `This action removes a #${id} imovei`;
  }
}
