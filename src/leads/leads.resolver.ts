import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { LeadsService } from './leads.service';
import { Lead, LeadDocument } from './entities/lead.entity';
import { CreateLeadInput } from './dto/create-lead.input';
import { UpdateLeadInput } from './dto/update-lead.input';
import { SearchLeadInput } from './dto/search-lead.input';
import { Imovel } from '../imoveis/entities/imovel.entity';

@Resolver(() => Lead)
export class LeadsResolver {
  private readonly respostaDeErro = 'Lead não encontrado';
  constructor(private readonly leadsService: LeadsService) {}

  @Mutation(() => Boolean)
  async createLead(@Args('dados') createLeadInput: CreateLeadInput): Promise<Boolean> {
    const result = await this.leadsService.create(createLeadInput);
    return result;
  }

  @Query(() => [Lead], { name: 'leads' })
  @UseGuards(GqlAuthGuard)
  async findAll(
    @Args('quantidade', { nullable: true }) qtde: Number,
    @Args('filtros', { nullable: true }) filtros?: SearchLeadInput,
  ): Promise<Lead[]> {
    return await this.leadsService.findAll(qtde, filtros);
  }

  @Query(() => Lead, { name: 'lead' })
  @UseGuards(GqlAuthGuard)
  async findOne(@Args('dados') searchLead: SearchLeadInput): Promise<Lead> {
    const result = await this.leadsService.findOne(searchLead);
    if (!result) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(searchLead)}`);
    }
    return result;
  }

  @Mutation(() => Lead)
  @UseGuards(GqlAuthGuard)
  async updateLead(
    @Args('id', { type: () => String }) id: string,
    @Args('dados') updateLeadInput: UpdateLeadInput,
  ): Promise<Lead> {
    const result = await this.leadsService.update(id, updateLeadInput);
    if (!result) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return result;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeLead(@Args('id', { type: () => String }) id: string): Promise<Boolean> {
    const result = await this.leadsService.remove(id);
    if (!result) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return result;
  }

  @ResolveField()
  async imoveis(@Parent() lead: LeadDocument, @Args('populateImoveis') populate: boolean) {
    if (populate) await lead.populate({ path: 'imoveis', model: Imovel.name }).execPopulate();
    return lead.imoveis;
  }
}
