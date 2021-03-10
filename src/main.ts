import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // Chaves para melhor exibição de logs
    logger: ['error', 'warn', 'log', 'debug'],
    //Habilitando CORS
    cors: true,
  });
  //Necessário para o class-validator executar
  app.useGlobalPipes(new ValidationPipe());
  // Usando Helmet para proteção
  //app.use(helmet());
  //URL final terá como inicio o /v1
  app.setGlobalPrefix('v1');
  // Recebe a porta de onde está sendo hospedado, caso contrário, inicia na porta 8080
  await app.listen(Number(process.env.PORT) || 8080);
}
bootstrap();
