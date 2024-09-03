export function CollectionMovies({pelis}){
    if(pelis){
    return(

        <ul className='coleccion'>
          {
            pelis.map(item=>(
            <li key={item.imdbID} className="peli">
              <figure>
                <img src={item.Poster} alt="" />
                <p>{item.Title}</p>
                <figcaption>
                  <h2>{item.Title}</h2>
                  <p>{item.Year}</p>
                  <p>Lorem ipsum dolor sit amet consectetur a
                    dipisicing elit. Error tempore, illo fuga 
                    expedita totam doloribus aspernatur non nihil
                     ipsum optio quaerat odio aliquam. Voluptates 
                     eaque necessitatibus fuga facere repudiandae unde!</p>
                </figcaption>
              </figure>              
            </li>
            ))
          }
        </ul> 
    )
    }else{

      return(

        <p className="empty">Pelicula no encontrada</p>
      )
    }
}