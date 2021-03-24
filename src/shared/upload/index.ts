import { v2 } from 'cloudinary';

import { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } from '../../environments';

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
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

  const uniqueFilename = new Date().toISOString();
  const result = await new Promise(async (resolve, reject) => {
    file.createReadStream().pipe(
      v2.uploader.upload_stream(
        {
          allowed_formats: ['jpg', 'png', 'mp4', 'avi', 'mov'],
          folder: 'hualiau',
          public_id: uniqueFilename,
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
