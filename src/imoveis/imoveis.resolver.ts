import { NotFoundException } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImoveisService } from './imoveis.service';
import { Imovel } from './entities/imovel.entity';
import { CreateImovelInput } from './dto/create-imovel.input';
import { UpdateImovelInput } from './dto/update-imovel.input';
import { SearchImovelInput } from './dto/search-imovel.input';

@Resolver(() => Imovel)
export class ImoveisResolver {
  private readonly respostaDeErro = 'Imóvel não encontrato';
  constructor(private readonly imoveisService: ImoveisService) {}

  @Mutation(() => Imovel)
  async createImovel(
    @Args('imovelInput') createImovelInput: CreateImovelInput,
  ): Promise<Imovel> {
    const result = await this.imoveisService.create(createImovelInput);
    return result;
  }

  @Query(() => [Imovel], { name: 'imoveis' })
  async listar(
    @Args('quantidade', { nullable: true }) qtde: Number,
    @Args('filtros', { nullable: true }) filtros?: SearchImovelInput,
  ): Promise<Imovel[]> {
    return await this.imoveisService.listarTudo(qtde, filtros);
  }

  @Query(() => Imovel, { name: 'imovel' })
  async findOne(
    @Args('dados') searchImovel: SearchImovelInput,
  ): Promise<Imovel> {
    const resultado = await this.imoveisService.findOne(searchImovel);
    if (!resultado) {
      throw new NotFoundException(
        `${this.respostaDeErro}: ${JSON.stringify(searchImovel)}`,
      );
    }
    return resultado;
  }

  @Mutation(() => Imovel, { name: 'updateImovel' })
  async updateImovel(
    @Args('id', { type: () => String }) id: string,
    @Args('updateImovelInput') updateImovelInput: UpdateImovelInput,
  ): Promise<Imovel> {
    const resultado = await this.imoveisService.update(id, updateImovelInput);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }

  @Mutation(() => Boolean)
  async removeImovel(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Boolean> {
    const resultado = await this.imoveisService.remove(id);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }
}
