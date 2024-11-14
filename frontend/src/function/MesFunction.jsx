import { useState, useCallback } from 'react';

function useRefresh() {
  const [refresh, setRefresh] = useState(false);

  const refreshPage = useCallback(() => {
    setRefresh((prev) => !prev); // Bascule la valeur pour forcer le rendu
  }, []);

  return refreshPage;
}

export default useRefresh;
