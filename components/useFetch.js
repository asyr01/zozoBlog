import { useState, useEffect } from 'react';
// This is a custom hook to fetch data, it must start with word 'use'.
const useFetch = (apiUrl) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // useEffect fires a function at every render - with an empty dependency array at only first render.

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch data");
        }
        return res.json();
      })
      .then((data) => {
        // set isPending false when data fetched
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err) {
          console.log(err);
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
  }, [apiUrl]);

  return { data, isPending, error };
};

export default useFetch;
