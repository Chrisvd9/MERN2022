export async function simpleGets(url){
    try{
        const apiResponse = await fetch(url).then((response)=> response.json);
        return apiResponse
    }catch(error){
        return {error: `Fallo en la API ${error}`}
    }
}