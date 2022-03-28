//const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL
const graphQLAPI = process.env.NEXT_PUBLIC_GRAPHQL
console.log("PROBANDO EL ENV")
console.log(graphQLAPI)

const fetchData = async (query, { variables = {} }) => {
    
    
    const headers = { 'Content-Type': 'application/json' }

    const res = await fetch(graphQLAPI, {
        method: 'POST',
        headers,
        body: JSON.stringify({
            query,
            variables
        })
    })
   
    const json = await res.json()
    //console.log("RESULTADO")
    //console.log(json)
    if (json.errors) {
        throw new Error(json.errors)
    }
    return json
}

export default fetchData
