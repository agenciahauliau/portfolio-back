import { HttpStatus, Module } from '@nestjs/common';
import { response } from 'express';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ImoveisModule } from './imoveis/imoveis.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { MulterModule } from '@nestjs/platform-express';
import { LeadsModule } from './leads/leads.module';
import env from '@environments';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [env], cache: true }),
    GraphQLModule.forRoot({
      //Desabilitando ou habilitando o playground
      playground: env().PLAYGROUND,
      //autoSchemaFile: 'schema.gql'),
      autoSchemaFile: env().AUTO_SCHEMA_FILE,
      //Introspecção para fazer funcionar o playground
      introspection: env().INTROSPECTION,
      //Debug
      debug: env().GQL_DEBUG,
      //sortSchema para evitar que o schema seja ordenado
      sortSchema: env().SORT_SCHEMA,
      //Fazendo o GraphQL disponível na endpoint /v1
      useGlobalPrefix: env().USE_GLOBAL_PREFIX,
      //Permitindo upload
      uploads: { maxFileSize: env().MAX_FILE_SIZE, maxFiles: env().MAX_FILES },
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
    MongooseModule.forRoot(env().MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      authSource: 'admin',
    }),
    UsersModule,
    ImoveisModule,
    AuthModule,
    FilesModule,
    MulterModule.register({
      dest: env().FILE_UPLOAD_DIR,
    }),
    LeadsModule,
  ],
})
export class AppModule {}
