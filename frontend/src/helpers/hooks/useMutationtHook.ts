import { useMutation } from 'react-query';

interface MutationInput {
    endpoint: string;
    data: any; 
  }

export function usePostData() {
    return useMutation(async (data) => {
      const res = await fetch('YOUR_ENDPOINT_HERE', {
        method: 'POST',
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