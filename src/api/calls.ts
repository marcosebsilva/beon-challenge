import jsonwebserver from './instance';
import ApiOptions from '../interfaces/ApiOptions';
import ApiResponse from '../interfaces/ApiResponse';

export async function getAllBooks(options: ApiOptions) {
  try {
    const response = await jsonwebserver.get(`?_page=${options.page}&_limit=${options.limit}`);
    const result: ApiResponse = {
      books: response.data,
      totalCount: Number(response.headers['x-total-count']),
    };
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getBooksByQuery(options: ApiOptions) {
  const endpoint = Object.entries(options).reduce((acc: string, [key, value], idx) => {
    const parameter = `${key}=${value}`;
    if (idx === 0) return `${acc}_${parameter}`;
    if (['page', 'limit'].includes(key)) return `${acc}&_${parameter}`;
    return `${acc}&${parameter}`;
  }, '?');
  try {
    const response = await jsonwebserver.get(endpoint);
    const result: ApiResponse = {
      books: response.data,
      totalCount: Number(response.headers['x-total-count']),
    };
    return result;
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
