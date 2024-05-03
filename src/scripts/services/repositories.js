
import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)  //Agora para buscar os repositorios do usuário
    return await response.json()
}

export { getRepositories }