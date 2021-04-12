import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { GaleriaService } from './galeria.service';
import { Galeria } from './entities/galeria.entity';
import { CreateGaleriaInput } from './dto/create-galeria.input';
import { UpdateGaleriaInput } from './dto/update-galeria.input';
import { SearchGaleriaInput } from './dto/search-galeria.input';

@Resolver(() => Galeria)
export class GaleriaResolver {
  private readonly respostaDeErro = 'Galeria não encontrada';
  constructor(private readonly galeriaService: GaleriaService) {}

  @Mutation(() => Galeria)
  @UseGuards(GqlAuthGuard)
  async createGaleria(@Args('dados') createGaleriaInput: CreateGaleriaInput): Promise<Galeria> {
    const result = await this.galeriaService.create(createGaleriaInput);
    return result;
  }

  @Query(() => [Galeria], { name: 'galerias' })
  async findAll(
    @Args('quantidade', { nullable: true }) qtde: Number,
    @Args('filtros', { nullable: true }) filtros?: SearchGaleriaInput,
  ): Promise<Galeria[]> {
    return await this.galeriaService.findAll(qtde, filtros);
  }

  @Query(() => Galeria, { name: 'galeria' })
  async findOne(@Args('dados') searchGaleria: SearchGaleriaInput): Promise<Galeria> {
    const resultado = await this.galeriaService.findOne(searchGaleria);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(searchGaleria)}`);
    }
    return resultado;
  }

  @Mutation(() => Galeria)
  @UseGuards(GqlAuthGuard)
  async updateGaleria(
    @Args('id', { type: () => String }) id: string,
    @Args('dados') updateGaleriaInput: UpdateGaleriaInput,
  ): Promise<Galeria> {
    const resultado = await this.galeriaService.update(id, updateGaleriaInput);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeGaleria(@Args('id', { type: () => String }) id: string): Promise<Boolean> {
    const resultado = await this.galeriaService.remove(id);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }
}
