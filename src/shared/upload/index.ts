import { v2 } from 'cloudinary';
import { v4 } from 'uuid';

import env from '@environments';

/**
 * Returns image url by upload file.
 *
 * @remarks
 * This method is part of the {@link shared/upload}.
 *
 * @param file - 1st input
 *
 * @returns The string mean of `createReadStream`
 *
 * @beta
 */
export const uploadFile = async (file: any) => {
  v2.config({
    cloud_name: env().CLOUDINARY_NAME,
    api_key: env().CLOUDINARY_API_KEY,
    api_secret: env().CLOUDINARY_API_SECRET,
  });

  let data = new Date();
  let data2 = new Date(data.valueOf() - data.getTimezoneOffset() * 60000);
  let horaBrasil = data2.toISOString().replace(/\.\d{3}Z$/, '');
  const name = `${v4()}-${horaBrasil}`;
  const result = await new Promise(async (resolve, reject) => {
    file.createReadStream().pipe(
      v2.uploader.upload_stream(
        {
          allowed_formats: ['jpg', 'png', 'mp4', 'avi', 'mov'],
          folder: 'hualiau',
          public_id: name,
          tags: 'portfolio',
        },
        (error, result) => {
          console.log('error shared/index', error);
          console.log('result shared/index', result);
          if (result) {
            return resolve(result);
          } else {
            return reject(error);
          }
        },
      ),
    );
  });
  return result;
};
