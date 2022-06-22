import jsonwebserver from './instance';
import ApiOptions from '../interfaces/ApiOptions';
import ApiResponse from '../interfaces/ApiResponse';
import formatEndpoint from '../utils/formatEndpoint';

export async function getAllBooks(options: ApiOptions) {
  try {
    const response = await jsonwebserver.get(`?_page=${options.page}&_limit=${options.limit}`);
    const result: ApiResponse = {
      books: response.data,
      totalCount: Number(response.headers['x-total-count']),
    };
    return result;
  } catch (error: any) {
    if (error.code === 'ERR_NETWORK') {
      alert("Can't connect to jsonwebserver.");
      throw new Error('Connection to server failed! Did you started the jsonwebserver?');
    }
    throw error;
  }
}

export async function getBooksByQuery(options: ApiOptions) {
  const endpoint = formatEndpoint(options);
  try {
    const response = await jsonwebserver.get(endpoint);
    const result: ApiResponse = {
      books: response.data,
      totalCount: Number(response.headers['x-total-count']),
    };
    return result;
  } catch (error: any) {
    if (error.code === 'ERR_NETWORK') {
      alert("Can't connect to jsonwebserver.");
      throw new Error('Connection to server failed! Did you started the jsonwebserver?');
    }
    throw error;
  }
}
