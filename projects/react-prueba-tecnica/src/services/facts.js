const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getCatFact = async () =>{  
	const res = await fetch( CAT_ENDPOINT_RANDOM_FACT )
	const data = await res.json()
	const { fact } = data
	console.log(fact)
	return fact
}