import { Logger, NotFoundException, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ImoveisService } from './imoveis.service';
import { Imovel } from './entities/imovel.entity';
import { CreateImovelInput } from './dto/create-imovel.input';
import { UpdateImovelInput } from './dto/update-imovel.input';
import { SearchImovelInput } from './dto/search-imovel.input';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { SearchImovelCondInput } from './dto/search-filter-imovel.input';

@Resolver(() => Imovel)
export class ImoveisResolver {
  private readonly respostaDeErro = 'Imóvel não encontrato';
  constructor(private readonly imoveisService: ImoveisService) {}

  @Mutation(() => Imovel)
  @UseGuards(GqlAuthGuard)
  async createImovel(@Args('dados') createImovelInput: CreateImovelInput): Promise<Imovel> {
    const result = await this.imoveisService.create(createImovelInput);
    return result;
  }

  @Query(() => [Imovel], { name: 'imoveis' })
  async listar(
    @Args('filtros', { nullable: true }) filtros?: SearchImovelInput,
    @Args('quantidade', { nullable: true }) qtde?: Number,
  ): Promise<Imovel[]> {
    return await this.imoveisService.listarTudo(filtros, qtde);
  }

  @Query(() => [Imovel], { name: 'imoveis_condicional' })
  async listarCondicional(
    @Args('filtros', { nullable: true }) filtros?: SearchImovelCondInput,
    @Args('quantidade', { nullable: true }) qtde?: Number,
  ): Promise<Imovel[]> {
    return await this.imoveisService.listarTudoComFiltros(filtros, qtde);
  }

  @Query(() => Imovel, { name: 'imovel' })
  async findOne(
    @Args('dados') searchImovel: SearchImovelInput,
    @Context() ctx: any,
  ): Promise<Imovel> {
    console.log(ctx.req.headers.origin);
    const resultado = await this.imoveisService.findOne(searchImovel);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(searchImovel)}`);
    }
    return resultado;
  }

  @Mutation(() => Imovel, { name: 'updateImovel' })
  @UseGuards(GqlAuthGuard)
  async updateImovel(
    @Args('id', { type: () => String }) id: string,
    @Args('dados') updateImovelInput: UpdateImovelInput,
  ): Promise<Imovel> {
    const resultado = await this.imoveisService.update(id, updateImovelInput);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeImovel(@Args('id', { type: () => String }) id: string): Promise<Boolean> {
    const resultado = await this.imoveisService.remove(id);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }
}
