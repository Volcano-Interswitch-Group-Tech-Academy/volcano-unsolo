import { useMutation } from 'react-query';

interface MutationInput {
    endpoint: string;
    data: any; 
  }
const BaseUrl = 'http://localhost:8060/api'

export function usePostData<T,TR>(url:string,token?:string) {
    return useMutation(async (data:T) => {
      const res = await fetch(`${ BaseUrl}/${url}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token ? `Bearer ${token}` : "",
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      return res.json() as TR;
    });
  }


  export function useDeleteData() {
    return useMutation(async (endpoint: string) => {
      const res = await fetch(endpoint, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
        },
      });
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  }

  export function usePatchData() {
    return useMutation(async ({ endpoint, data }: MutationInput) => {
      const res = await fetch(endpoint, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  }
  
  export function useUpdateData() {
    return useMutation(async ({ endpoint, data }: MutationInput) => {
      const res = await fetch(endpoint, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer YOUR_ACCESS_TOKEN`,
        },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    });
  }