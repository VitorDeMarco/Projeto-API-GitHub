
import { baseUrl } from "/src/scripts/variables.js"

async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)  // esse é o endereço,quando colocar o nome na caixa de busca ,vai buscar no github
    return await response.json()
}

export { getUser }