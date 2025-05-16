import { useState, useEffect } from "react";

interface ApiConfig<T> {
  url: string;
  options?: RequestInit;
  initialData?: T;
  enabled?: boolean;
  onSuccess?: (data: T) => void;
  onError?: (error: string) => void;
}

export function useApi<T>(config: ApiConfig<T>) {
  const {
    url,
    options = {},
    initialData,
    enabled = true,
    onSuccess,
    onError,
  } = config;

  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (overrideOptions?: RequestInit) => {
    if (!enabled) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        ...options,
        ...overrideOptions,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = (await response.json()) as T;
      setData(result);
      onSuccess?.(result);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Unknown error occurred";
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (options.method === "GET" || !options.method) {
      fetchData();
    }
  }, [url, enabled]);

  return {
    data,
    error,
    loading,
    fetchData,
    setData,
  };
}