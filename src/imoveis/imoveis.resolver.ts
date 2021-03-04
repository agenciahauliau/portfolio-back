import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ImoveisService } from './imoveis.service';
import { Imovei } from './entities/imovei.entity';
import { CreateImoveiInput } from './dto/create-imovei.input';
import { UpdateImoveiInput } from './dto/update-imovei.input';

@Resolver(() => Imovei)
export class ImoveisResolver {
  constructor(private readonly imoveisService: ImoveisService) {}

  @Mutation(() => Imovei)
  createImovei(@Args('createImoveiInput') createImoveiInput: CreateImoveiInput) {
    return this.imoveisService.create(createImoveiInput);
  }

  @Query(() => [Imovei], { name: 'imoveis' })
  findAll() {
    return this.imoveisService.findAll();
  }

  @Query(() => Imovei, { name: 'imovei' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.imoveisService.findOne(id);
  }

  @Mutation(() => Imovei)
  updateImovei(@Args('updateImoveiInput') updateImoveiInput: UpdateImoveiInput) {
    return this.imoveisService.update(updateImoveiInput.id, updateImoveiInput);
  }

  @Mutation(() => Imovei)
  removeImovei(@Args('id', { type: () => Int }) id: number) {
    return this.imoveisService.remove(id);
  }
}
