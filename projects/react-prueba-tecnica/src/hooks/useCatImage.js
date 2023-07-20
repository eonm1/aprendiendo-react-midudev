import { useState, useEffect } from "react";

const CAT_ENDPOINT_PREFIX = 'https://cataas.com'

export function useCatImage( { fact } )
{ 
  const [imageURL, setImageURL] = useState();
  
  useEffect( () =>
  {
    if (!fact) return;
    const threeFirstWords = fact.split(" ").slice(0, 3).join(" ");
    fetch(
      `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((response) => response.json())
      .then((data) => {
        const { url } = data;
        setImageURL(url);
      });
  }, [fact] );
  
  return {imageURL: `${CAT_ENDPOINT_PREFIX}${imageURL}` };
}