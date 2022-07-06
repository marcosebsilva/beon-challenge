import jsonwebserver from './instance';
import ApiOptions from '../types/ApiOptions';
import ApiResponse from '../types/ApiResponse';
import formatEndpoint from '../utils/formatEndpoint';

export default async function getBooks(options: ApiOptions) {
  const endpoint = formatEndpoint(options);
  console.log(endpoint);

  try {
    const response = await jsonwebserver.get(endpoint);
    const result: ApiResponse = {
      books: response.data,
      totalCount: Number(response.headers['x-total-count']),
    };
    return result;
  } catch (error: any) {
    if (error.code === 'ERR_NETWORK') {
      throw new Error('Connection to server failed! Did you started the jsonwebserver?');
    }
    throw error;
  }
}
