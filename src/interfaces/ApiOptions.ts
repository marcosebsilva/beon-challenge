interface ApiOptions {
  page: number,
  year_gte?: number,
  year_lte?: number,
  q?: string,
  limit: number,
}

export default ApiOptions;
