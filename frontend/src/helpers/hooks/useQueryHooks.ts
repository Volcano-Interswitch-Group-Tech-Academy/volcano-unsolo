import { useQuery } from "react-query";

export function useGetData<T = any>(endpoint: string, token: string | null) {
  return useQuery(endpoint, async () => {
    const res = await fetch(endpoint, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error(res.statusText);
    return res.json() as T;
  });
}
