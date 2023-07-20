import { useState, useEffect } from "react";
import { getCatFact } from "../services/facts";

export function useCatFact()
{ 
  const [fact, setFact] = useState()

  const refreshRandomFact = () =>{ 
    getCatFact().then((newFact) => setFact(newFact));
  }
  //Efectoo para recuperar la cita
  useEffect(() => refreshRandomFact, []);

  return { fact, refreshRandomFact };
}