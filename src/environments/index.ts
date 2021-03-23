// jsonwebtoken
const ISSUER: string = process.env.ISSUER || 'Hauliau';
const AUDIENCE: string = process.env.AUDIENCE || 'https://github.com/agenciahauliau';
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token';
const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'access-token-key';
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token';
const REFRESH_TOKEN_SECRET: string = process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key';
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token';
const EMAIL_TOKEN_SECRET: string = process.env.EMAIL_TOKEN_SECRET || 'email-token-key';
const RESETPASS_TOKEN: string = process.env.RESETPASS_TOKEN || 'resetpass-token';
const RESETPASS_TOKEN_SECRET: string = process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key';

// bcrypt
const BCRYPT_SALT: number = +process.env.BCRYPT_SALT || 10;

// nodemailer
const NODEMAILER_USER: string = process.env.NODEMAILER_USER || 'xxx';
const NODEMAILER_PASS: string = process.env.NODEMAILER_PASS || 'xxx';

// cloudinary
const CLOUDINARY_NAME: string = process.env.CLOUDINARY_NAME || 'outronome';
const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY || '475584948229723';
const CLOUDINARY_API_SECRET: string =
  process.env.CLOUDINARY_API_SECRET || 'Duno2be58mE2lCFLcuOssGKG54c';

export {
  ISSUER,
  AUDIENCE,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SECRET,
  RESETPASS_TOKEN,
  RESETPASS_TOKEN_SECRET,
  EMAIL_TOKEN,
  EMAIL_TOKEN_SECRET,
  BCRYPT_SALT,
  NODEMAILER_USER,
  NODEMAILER_PASS,
  CLOUDINARY_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
};
