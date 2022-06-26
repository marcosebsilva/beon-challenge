interface ApiOptions {
  page: number,
  year_gte?: number | null,
  year_lte?: number | null,
  q?: string | null,
  limit: number,
}

export default ApiOptions;
