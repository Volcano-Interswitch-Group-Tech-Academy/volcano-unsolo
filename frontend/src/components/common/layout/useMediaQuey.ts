import { useState, useEffect } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Update the state directly without checking the previous state
    setMatches(media.matches);
    
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    media.addListener(listener);
    
    return () => {
      media.removeListener(listener);
    };
    
  }, [query]);  // Only depend on `query`

  return matches;
}

export default useMediaQuery;
