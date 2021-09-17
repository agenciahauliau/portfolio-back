import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { FilesService } from './files.service';
import { File } from './entities/file.entity';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UpdateFileInput } from './dto/update-file.input';
import { SearchFileInput } from './dto/search-file.input';

@Resolver(() => File)
export class FilesResolver {
  private readonly respostaDeErro = 'Arquivo não encontrato';
  constructor(private readonly filesService: FilesService) {}

  /* Atualizar os dados do arquivo */
  @Mutation(() => File, { name: 'updateFile' })
  @UseGuards(GqlAuthGuard)
  async atualizaArquivo(
    @Args('id', { type: () => String }) id: string,
    @Args('dados') updateFileInput: UpdateFileInput,
  ): Promise<File> {
    const resultado = await this.filesService.update(id, updateFileInput);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }

  /* Listar todos os dados dos arquivos */
  @Query(() => [File], { name: 'files' })
  async listar(
    @Args('filtros', { nullable: true }) filtros?: SearchFileInput,
    @Args('quantidade', { nullable: true }) qtde?: Number,
  ): Promise<File[]> {
    return await this.filesService.listarInfoArquivos(filtros, qtde);
  }

  /* Listar apenas o detalhe de um arquivo */
  @Query(() => File, { name: 'file' })
  async detalheArquivo(@Args('dados') searchFile: SearchFileInput): Promise<File> {
    const resultado = await this.filesService.findOne(searchFile);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(searchFile)}`);
    }
    return resultado;
  }

  /* Listar apenas o nome dos arquivos na pasta uploads */
  @Query(() => [String])
  async listarUploads() {
    return await this.filesService.listarTodosArquivos();
  }

  /* Deletar o arquivo */
  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async deletaArquivo(@Args({ name: 'filename' }) nome: string) {
    const resultado = await this.filesService.deletarArquivo(nome);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(nome)}`);
    }
    return resultado;
  }
}
