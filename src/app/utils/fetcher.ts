export interface FetcherResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<FetcherResponse<T>> {
  const response: FetcherResponse<T> = {
    data: null,
    isLoading: true,
    error: null,
  };

  try {
    const fetchResponse = await fetch(url, options);

    if (!fetchResponse.ok) {
      throw new Error(
        `Error ${fetchResponse.status}: ${fetchResponse.statusText}`
      );
    }

    const data = await fetchResponse.json();
    response.data = data;
  } catch (error) {
    response.error = error instanceof Error ? error : new Error(String(error));
  } finally {
    response.isLoading = false;
  }

  return response;
}
