import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './Components/Otro'



export function App(){
  const { fact, refreshRandomFact } = useCatFact()
  console.log(fact)
  const { imageURL } = useCatImage( { fact } )
  
  const handleClick = async () =>{ 
    refreshRandomFact()
  }


  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={ handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Imagen de un gato con las palabras ${fact}`} />}
    </main>
  );
}