import { useQuery } from "react-query";

export function useGetData(endpoint: string) {
  return useQuery(endpoint, async () => {
    const res = await fetch(endpoint, {
      headers: {
        'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
      },
    });
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
}