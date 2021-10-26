import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post, PostDocument } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { SearchPostCondInput } from './dto/search-post.input';
import { File } from '../files/entities/file.entity';

@Resolver(() => Post)
export class PostsResolver {
  private readonly respostaDeErro = 'Post não encontrado';
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async createPost(@Args('dados') createPostInput: CreatePostInput): Promise<Post> {
    return await this.postsService.create(createPostInput);
  }

  @Query(() => [Post], { name: 'posts' })
  async listar(
    @Args('filtros', { nullable: true }) filtros?: SearchPostCondInput,
    @Args('quantidade', { nullable: true }) qtde?: Number,
  ): Promise<Post[]> {
    return await this.postsService.listarTudo(filtros, qtde);
  }

  @Query(() => Post, { name: 'post' })
  async findOne(@Args('id', { type: () => String }) id: string): Promise<Post> {
    const resultado = await this.postsService.findOne(id);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${JSON.stringify(id)}`);
    }
    return resultado;
  }

  @Mutation(() => Post)
  @UseGuards(GqlAuthGuard)
  async updatePost(
    @Args('id', { type: () => String }) id: string,
    @Args('dados') updatePostInput: UpdatePostInput,
  ): Promise<Post> {
    const resultado = await this.postsService.update(id, updatePostInput);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removePost(@Args('id', { type: () => String }) id: string): Promise<Boolean> {
    const resultado = await this.postsService.remove(id);
    if (!resultado) {
      throw new NotFoundException(`${this.respostaDeErro}: ${id}`);
    }
    return resultado;
  }

  @ResolveField()
  async imagemPrincipal(
    @Parent() post: PostDocument,
    @Args('populateImgPrincipal') populateImgPrincipal: boolean,
  ) {
    if (populateImgPrincipal)
      await post.populate({ path: 'imagemPrincipal', model: File.name }).execPopulate();
    return post.imagemPrincipal;
  }
}
