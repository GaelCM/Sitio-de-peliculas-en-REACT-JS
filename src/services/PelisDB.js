

export const realizarPeticion=(inputValue)=>{

    return fetch(`https://www.omdbapi.com/?apikey=ef30a9e4&s=${inputValue}`)
    .then(res=>res.json())
    .then(res=>{
        return res.Search
    })
}