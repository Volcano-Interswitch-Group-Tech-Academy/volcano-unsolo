export const setLocalStorage = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value);
  }
};

export const removeLocalStorage = async (key: string) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, '');
    await window.localStorage.removeItem(key);
  }
};


export const getLocalStorage = (key: string) => {
   if (typeof window !== 'undefined') {
      const data = window.localStorage.getItem(key) || '';
      return data
    }
};