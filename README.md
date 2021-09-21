## Description

Começo do projeto backend para o portfolio.imb.br

## Installation

```bash
$ npm install
```

## Remote Container

Antes de executar o remote container no VSCode você vai precisar criar uma rede. Utilize o comando:

```bash
$ docker network create portfolio_back
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Viariáveis de ambiente

Caso queira, você pode definir algumas variáveis antes de iniciar o sistema. Veja a tabela a seguir:

|        Nome         |                    Valor Padrão                     |                                      Observação                                      |
| :-----------------: | :-------------------------------------------------: | :----------------------------------------------------------------------------------: |
|       `PORT`        |                        8080                         |                                                                                      |
|   `GLOBAL_PREFIX`   |                        'v1'                         |                                                                                      |
|     `NODE_ENV`      |                      undefined                      |                                                                                      |
|    `BCRYPT_SALT`    |                         10                          |                                                                                      |
|      `HELMET`       |                        false                        |                                                                                      |
|       `CSURF`       |                        false                        |                                                                                      |
|       `CORS`        |                        true                         |                                  Habilitar um CORS                                   |
|  `FILE_UPLOAD_DIR`  |                     './uploads'                     |                                                                                      |
|   `MAX_FILE_SIZE`   |                      20000000                       |                     O valor máximo deve ser espicifado em Bytes                      |
|     `MAX_FILES`     |                         10                          |                       Quantidade máxima de arquivos multiplos                        |
| `ALLOWED_FILETYPES` |   jpg\|jpeg\|png\|gif\|mp4\|m4v\|avif\|webp\|webm   |                                                                                      |
|     `MONGO_URL`     | mongodb://{username}:{password}@127.0.0.1/portfolio |                                                                                      |
|    `PLAYGROUND`     |                        false                        |  Se habilitar playground, certifique-se de que `CSURF` e `HELMET` estão em `false`   |
|   `INTROSPECTION`   |                        false                        |                                                                                      |
|     `GQL_DEBUG`     |                        false                        |                                                                                      |
|    `SORT_SCHEMA`    |                        false                        |                                                                                      |
| `USE_GLOBAL_PREFIX` |                        true                         | Caso queria que o caminho não tenha o prefixo, como por exemplo `v1`, defina `false` |
| `AUTO_SCHEMA_FILE`  |                     schema.gql                      |  Local onde o GraphQL vai gerar o esquema, pode ser alterado. Ex.: /tmp/schema.gql   |
|    `JWT_SECRET`     |                   k#22J+Hwuu$PzG                    |    Chave secreta para criação dos tokens de autenticação. Obrigatório configurar.    |
|  `JWT_EXPIRES_IN`   |                        86400                        |     Tempo que o sistema irá definir para expirar o token. 1 dia = 86400 segundos     |

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## Pequenas informações para a equipe interna de desenvolvimento

Comando para exportar e importar o banco de dados:

```shell
mongodump --uri "mongodb+srv://hi4ume:y82n61di4uDokmLz@cluster0.ehwfw.mongodb.net/portfolio?authSource=admin&replicaSet=atlas-1203z4-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true" --out ~/Desktop/mongo_RJ_BKP
```

```shell
mongorestore ~/Desktop/mongo_RJ_BKP/portfolio --uri="mongodb://portfolio:y82n61di4uDokmLz@localhost:27017/portfolio?authSource=admin"
```
