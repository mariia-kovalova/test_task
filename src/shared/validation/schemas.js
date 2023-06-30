import * as Yup from 'yup';
import { email_regexp, phone_regexp } from './regexp';
import {
  email_mes,
  name_mes,
  phone_mes,
  photo_mes,
  required_mes,
} from './messages';

export const schemas = {
  create_user: Yup.object().shape({
    name: Yup.string()
      .min(2, name_mes.size)
      .max(60, name_mes.size)
      .required(required_mes),
    email: Yup.string()
      .min(2, email_mes.size)
      .max(100, email_mes.size)
      .matches(email_regexp, email_mes.format)
      .required(required_mes),
    phone: Yup.string()
      .matches(phone_regexp, phone_mes.format)
      .required(required_mes),
    position_id: Yup.number().min(1).required(required_mes),
    photo: Yup.mixed()
      .required(required_mes)
      .test('fileType', photo_mes.format, file => file?.type === 'image/jpeg')
      .test(
        'fileSize',
        photo_mes.size,
        file => file?.size <= 5 * 1024 * 1024 // 5 MB
      )
      .test('fileDimensions', photo_mes.dimentions, async file => {
        if (!file) return false;
        const objectUrl = URL.createObjectURL(file);

        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = objectUrl;

          img.onload = function () {
            if (img.width >= 70 && img.height >= 70) {
              resolve(true);
            } else {
              reject(false);
            }

            URL.revokeObjectURL(objectUrl);
          };

          img.onerror = function () {
            reject(false);
            URL.revokeObjectURL(objectUrl);
          };
        });
      }),
  }),
};
