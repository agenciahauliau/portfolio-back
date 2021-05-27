export default () => ({
  ISSUER: process.env.ISSUER || 'Hauliau',
  AUDIENCE: process.env.AUDIENCE || 'https://github.com/agenciahauliau',
  ACCESS_TOKEN: process.env.ACCESS_TOKEN || 'access-token',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'access-token-key',
  REFRESH_TOKEN: process.env.REFRESH_TOKEN || 'refresh-token',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key',
  EMAIL_TOKEN: process.env.EMAIL_TOKEN || 'email-token',
  EMAIL_TOKEN_SECRET: process.env.EMAIL_TOKEN_SECRET || 'email-token-key',
  RESETPASS_TOKEN: process.env.RESETPASS_TOKEN || 'resetpass-token',
  RESETPASS_TOKEN_SECRET: process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key',
  JWT_SECRET: process.env.JWT_SECRET || 'k#22J+Hwuu$PzG',
  JWT_EXPIRES_IN: parseInt(process.env.JWT_EXPIRES_IN) || 86400,
  // NestJS
  PORT: parseInt(process.env.PORT) || 8080,
  GLOBAL_PREFIX: process.env.GLOBAL_PREFIX || 'v1',
  NODE_ENV: process.env.NODE_ENV === 'production' ? undefined : false,
  // bcrypt
  BCRYPT_SALT: parseInt(process.env.BCRYPT_SALT) || 10,
  // Helmet
  HELMET: process.env.HELMET === 'true' ? true : false,
  // CSURF
  CSURF: process.env.CSURF === 'true' ? true : false,
  // CORS
  CORS: process.env.CORS === 'false' ? false : true,

  // file uploads
  FILE_UPLOAD_DIR: process.env.FILE_UPLOAD_DIR || './uploads',
  MAX_FILE_SIZE: parseInt(process.env.MAX_FILE_SIZE) || 20000000,
  MAX_FILES: parseInt(process.env.MAX_FILES) || 10,
  ALLOWED_FILETYPES: process.env.ALLOWED_FILETYPES || 'jpg|jpeg|png|gif|mp4|m4v|avif|webp',

  // MongoDB
  MONGO_URL: process.env.MONGO_URL || 'mongodb://{username}:{password}@127.0.0.1/portfolio',

  // GraphQL
  PLAYGROUND: process.env.PLAYGROUND === 'true' ? true : false,
  INTROSPECTION: process.env.INTROSPECTION === 'true' ? true : false,
  GQL_DEBUG: process.env.GQL_DEBUG === 'true' ? true : false,
  SORT_SCHEMA: process.env.SORT_SCHEMA === 'true' ? true : false,
  USE_GLOBAL_PREFIX: process.env.USE_GLOBAL_PREFIX === 'false' ? false : true,
  AUTO_SCHEMA_FILE: process.env.AUTO_SCHEMA_FILE || 'schema.gql',

  // cloudinary
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME || 'outronome',
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY || '475584948229723',
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET || 'Duno2be58mE2lCFLcuOssGKG54c',
});
