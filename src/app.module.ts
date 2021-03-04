import { HttpStatus, Module } from '@nestjs/common';
import { response } from 'express';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ImoveisModule } from './imoveis/imoveis.module';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      // Desabilitando o playground
      playground: true,
      sortSchema: true,
      debug: false,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      //Fazendo o GraphQL disponível na endpoint /v1
      useGlobalPrefix: true,
      //Formatando o erro
      formatError: (err) => {
        if (!err.extensions.exception.response) {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR);
          return err.message;
        } else {
          response.status(err.extensions.exception.response.statusCode);
          return err.extensions.exception.response.message;
        }
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
  ],
})
export class AppModule {}
