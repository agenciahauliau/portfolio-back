import { HttpStatus, Module } from '@nestjs/common';
import { response } from 'express';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ImoveisModule } from './imoveis/imoveis.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { GaleriaModule } from './galeria/galeria.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot({
      cors: {
        origin: '*',
      },
      //Desabilitando o playground
      playground: true,
      //autoSchemaFile: 'schema.gql'),
      autoSchemaFile: '/tmp/schema.gql',
      //Introspecção para fazer funcionar o playground
      introspection: true,
      //Debug
      debug: false,
      //sortSchema para evitar que o schema seja ordenado
      sortSchema: false,
      //Fazendo o GraphQL disponível na endpoint /v1
      useGlobalPrefix: true,
      //Permitindo upload
      uploads: { maxFileSize: 20000000, maxFiles: 10 },
      //Adicionando opção para reconhecer a autenticação no cabeçalho
      context: ({ req }) => ({ headers: req.headers }),
      //Formatando o erro
      formatError: (err: any) => {
        /* if (!err.extensions.exception.response) {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR);
          return err.message;
        } else {
          response.status(err.extensions.exception.response.statusCode);
          return err.extensions.exception.response.message;
        } */
        console.log('error', JSON.stringify(err));
        return err;
      },
      // Formatando a resposta
      formatResponse: (res) => {
        if (!res.errors) {
          response.status(200);
          return res;
        }
      },
    }),
    MongooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
    }),
    UsersModule,
    ImoveisModule,
    AuthModule,
    FilesModule,
    GaleriaModule,
  ],
})
export class AppModule {}
