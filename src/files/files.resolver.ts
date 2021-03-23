import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload';
import { GraphQLUpload } from 'apollo-server-express';
import { UseGuards } from '@nestjs/common';
import { FilesService } from './files.service';
import { File } from './entities/file.entity';
import { CreateFileInput } from './dto/create-file.input';
import { UpdateFileInput } from './dto/update-file.input';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { uploadFile } from '@shared';

@Resolver(() => File)
export class FilesResolver {
  constructor(private readonly filesService: FilesService) {}

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async uploadFileRemoto(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<any> {
    const { filename } = file;
    console.log(file);
    const path = await uploadFile(file);
    return path;
  }

  @Mutation(() => File)
  @UseGuards(GqlAuthGuard)
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload })
    file: FileUpload,
  ): Promise<File> {
    return this.filesService.saveLocal(file);
  }
}
