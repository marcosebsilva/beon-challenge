import ApiOptions from '../types/ApiOptions';

type underlinedOptionsType = string[];

export default (options: ApiOptions, underlinedOptions: underlinedOptionsType = ['page', 'limit']) => Object.entries(options)
  .reduce((acc: string, [key, value], idx) => {
    if (value == null) return acc;

    let parameter = `${key}=${value}`;

    if (underlinedOptions.includes(key)) {
      parameter = `_${key}=${value}`;
    } else {
      parameter = `${key}=${value}`;
    }

    return idx === 0
      ? `${acc}${parameter}`
      : `${acc}&${parameter}`;
  }, '?');
