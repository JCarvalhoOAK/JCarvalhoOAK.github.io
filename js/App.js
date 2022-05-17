import { useEffect, useState } from 'react';

export function App() {
  const [ repositories, setRepositories ] = useState([])

  useEffect( ()=> {
    fetch('https://api.github.com/users/JCarvalhoOAK/repos')
    .then( response => response.json())
    // .then( data => console.log(data) )
    .then( data => setRepositories(data) )
  }, [] )


  return (
    <>
     <div className="home-container">
      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Welcome to J.Carvalho - GitSys</h1>
            <p>
            We'll help you find my best public repositories available on Github.
            </p>
          </div>
          </div>
          </div>
          </div>
    <div>
      <h1 className=' home-container  base-card home-card bg-primary text-white'>My Repositories - Github</h1>
      <p></p>                                
               
      <ul>
        {repositories.map(repository => {
          return(         
            <li className='base-card home-card .col-md-8  col-xl-6'>
              <p><h2>Name: {repository.name}</h2></p>
              <p> <b>Created: </b>{repository.created_at}</p>
              <p> <b>Description: </b>{repository.description}</p>
              <p> <b>Language: </b>{repository.language}</p>
              <p> <b>Visibility: </b>{repository.visibility}</p>            
              <br></br>
              {/* <a className='btn-default-one' href={repository.html_url} target="_blank">Learn more</a> */}
              <p><a className="btn btn-default-one" href={repository.html_url}  target= "blanck" role="button">View details</a></p>
              <br></br>
            </li>
          )
        })}
      </ul>
    </div>
    </>
  );
}