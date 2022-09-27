import * as Yup from 'i18n/yup';

// eslint-disable-next-line import/prefer-default-export
export const setYupLocale = (translateFn) => {
  const yupLocale = {
    mixed: {
      required: ({ path }) =>
        translateFn('validation.required', { field: translateFn(`entities.conference.${path}`) }),
    },
  };
  Yup.setLocale(yupLocale);
};