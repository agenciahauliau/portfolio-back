import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common/pipes';
import { join } from 'path';
import * as helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // Chaves para melhor exibição de logs
    logger: ['error', 'warn', 'log', 'debug'],
    //Habilitando CORS
    cors: {
      origin: '*',
      credentials: true,
    },
  });
  //Necessário para o class-validator executar
  app.useGlobalPipes(new ValidationPipe());
  // Usando Helmet para proteção
  //app.use(helmet());
  //URL final terá como inicio o /v1
  app.setGlobalPrefix('v1');
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  // Recebe a porta de onde está sendo hospedado, caso contrário, inicia na porta 8080
  await app.listen(Number(process.env.PORT) || 8080);
}
bootstrap();
