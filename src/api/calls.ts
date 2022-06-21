import jsonwebserver from './instance';
import ApiOptions from '../interfaces/ApiOptions';

const defaultOptions = {
  page: 1,
  limit: 10,
};

export async function getAllBooks(args: Partial<ApiOptions>) {
  const options = { ...defaultOptions, ...args };

  try {
    const response = await jsonwebserver.get(`?_page=${options.page}&_limit=${options.limit}`);
    return {
      data: response.data,
      total_count: response.headers['X-Total-Count'],
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBooksByQuery(args: Partial<ApiOptions>) {
  const options: ApiOptions = { ...defaultOptions, ...args };

  const endpoint = Object.entries(options).reduce((acc: string, [key, value], idx) => {
    const parameter = `${key}=${value}`;
    if (idx === 0) return `${acc}_${parameter}`;
    return `${acc}&${parameter}`;
  }, '?');

  try {
    const response = await jsonwebserver.get(endpoint);
    return {
      data: response.data,
      total_count: Number(response.headers['x-total-count']),
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBookById(id: number) {
  try {
    const response = await jsonwebserver.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
