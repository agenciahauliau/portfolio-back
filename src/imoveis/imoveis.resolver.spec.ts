import { Test, TestingModule } from '@nestjs/testing';
import { ImoveisResolver } from './imoveis.resolver';
import { ImoveisService } from './imoveis.service';

describe('ImoveisResolver', () => {
  let resolver: ImoveisResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImoveisResolver, ImoveisService],
    }).compile();

    resolver = module.get<ImoveisResolver>(ImoveisResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
