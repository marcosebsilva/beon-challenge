import ApiOptions from '../interfaces/ApiOptions';

export default (options: ApiOptions) => Object.entries(options)
  .reduce((acc: string, [key, value], idx) => {
    if (value == null) return acc;
    const parameter = `${key}=${value}`;
    if (idx === 0) return `${acc}_${parameter}`;
    if (['page', 'limit'].includes(key)) return `${acc}&_${parameter}`;
    return `${acc}&${parameter}`;
  }, '?');
