import { NotFoundException, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { Configuracao, ConfiguracaoDocument } from './entities/configuracao.entity';
import { File } from '../files/entities/file.entity';
import { CreateConfiguracaoInput } from './dto/create-configuracao.input';
import { UpdateConfiguracaoInput } from './dto/update-configuracao.input';
import { SearchConfiguracaoInput } from './dto/search-configuracao.input';
import { ConfiguracaoService } from './configuracao.service';

@Resolver(() => Configuracao)
export class ConfiguracaoResolver {
  private readonly respostaDeErro = 'Configuração não encontrata';
  constructor(private readonly configuracaoService: ConfiguracaoService) {}

  @Mutation(() => Configuracao)
  @UseGuards(GqlAuthGuard)
  async createConfiguracao(
    @Args('dados') createConfiguracaoInput: CreateConfiguracaoInput,
  ): Promise<Configuracao> {
    const result = this.configuracaoService.create(createConfiguracaoInput);
    return result;
  }

  @Query(() => [Configuracao], { name: 'configuracoes' })
  @UseGuards(GqlAuthGuard)
  async findAll(
    @Args('filtros', { nullable: true }) filtros?: SearchConfiguracaoInput,
  ): Promise<Configuracao[]> {
    return await this.configuracaoService.findAll(filtros);
  }

  @Query(() => Configuracao, { name: 'configuracao' })
  async findOne(@Args('dados') searchConfiguracao: SearchConfiguracaoInput): Promise<Configuracao> {
    const result = await this.configuracaoService.findOne(searchConfiguracao);
    if (!result) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(searchConfiguracao)}`);
    }
    return result;
  }

  @Mutation(() => Configuracao)
  @UseGuards(GqlAuthGuard)
  async updateConfiguracao(
    @Args('id', { type: () => String }) id: string,
    @Args('dados') updateConfiguracaoInput: UpdateConfiguracaoInput,
  ): Promise<Configuracao> {
    const result = await this.configuracaoService.update(id, updateConfiguracaoInput);
    if (!result) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return result;
  }

  @Mutation(() => Configuracao)
  @UseGuards(GqlAuthGuard)
  async removeConfiguracao(@Args('id', { type: () => String }) id: string): Promise<boolean> {
    const result = await this.configuracaoService.remove(id);
    if (!result) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return result;
  }

  @ResolveField()
  async arquivo(@Parent() file: ConfiguracaoDocument, @Args('populateArquivo') populate: boolean) {
    if (populate) await file.populate({ path: 'arquivo', model: File.name });
    return file.arquivo;
  }
}
