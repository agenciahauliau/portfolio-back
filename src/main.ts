import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common/pipes';
import { join } from 'path';
import * as helmet from 'helmet';
import * as csurf from 'csurf';
import { AppModule } from './app.module';
import env from '@environments';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // Chaves para melhor exibição de logs
    logger: ['error', 'warn', 'log', 'debug'],
    //Habilitando CORS
    cors: env().CORS,
  });
  //Necessário para o class-validator executar
  app.useGlobalPipes(new ValidationPipe());
  // Usando Helmet para proteção
  if (env().HELMET) app.use(helmet({ contentSecurityPolicy: env().NODE_ENV }));
  // Ativando CSURF para contenção de ataques
  if (env().CSURF) app.use(csurf());
  //URL final terá como inicio o /v1
  if (env().USE_GLOBAL_PREFIX) app.setGlobalPrefix(env().GLOBAL_PREFIX);
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  // Recebe a porta de onde está sendo hospedado, caso contrário, inicia na porta 8080
  await app.listen(env().PORT);
}
bootstrap();
