import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';
import { GraphQLUpload } from 'apollo-server-express';
import { UseGuards } from '@nestjs/common';
import { FilesService } from './files.service';
import { File } from './entities/file.entity';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { uploadFile } from '@shared';

@Resolver(() => File)
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  /*  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async uploadFileRemoto(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<any> {
    return await uploadFile(file)
      .then((res) => {
        console.log('path', res);
        return res['secure_url'];
      })
      .catch((err) => {
        console.log('err', err);
        return err;
      });
  } */

  @Query(() => [String])
  async listarUploads() {
    return await this.filesService.listarTodosArquivos();
  }

  @Mutation(() => String)
  @UseGuards(GqlAuthGuard)
  async deletaArquivo(@Args({ name: 'filename' }) nome: string) {
    return await this.filesService.deletarArquivo(nome);
  }

  /* @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async uploadFileRemoto(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<any> {
    return await uploadFile(file)
      .then((res) => {
        console.log('path', res);
        return res['secure_url'];
      })
      .catch((err) => {
        console.log('err', err);
        return err;
      });
    return await this.filesService.saveRemoto(file);
  } */

  /* @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<File> {
    return await this.filesService.saveLocal(file);
  } */
}
