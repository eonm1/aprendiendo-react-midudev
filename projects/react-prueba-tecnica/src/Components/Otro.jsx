import { useCatImage } from "../hooks/useCatImage.js";

export function Otro()
{
	const { imageURL } = useCatImage( { fact: 'un gato que salta' } )
	console.log(imageURL);
	
	return <>{imageURL && <img src={imageURL} alt="Cat" />}</>;
}