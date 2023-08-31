// import { useEffect, useState } from "react";
// import { FetchApi } from "./fetchApi";
// import { useAuth0 } from "@auth0/auth0-react";

// interface GenreTypes  {

// id: string,
// genre: string,
// createdAt: string,
// moviesId: string[],
// updatedAt: string

// }

// interface UsersTypes {
//     id: string,
//     name: string,
//     email: string,
//     password: string,
//     movies: string[]
//   }

//   interface MoviesTypes {
//     id: string,
//     title: string,
//     score: number,
//     year: number,
//     imageId: string,
//     genres: GenreTypes[],
//     genresArray : string[],
//     createdAt: string,
//     updatedAt: string,
//     usersId: string
//   }


// export const TestApi = () => {

//     const {getAccessTokenSilently} = useAuth0();
//     const [genres, setgenres] = useState<GenreTypes[]>([]);

//  useEffect(() => {
   
   
//     const fecthGenres = async () => {

//         const data =  await FetchApi("genres", getAccessTokenSilently )
//         setgenres(data);
//     }

//     fecthGenres();
   
//  }, [])

//  useEffect(() => {
   
//  console.log(genres);
 
  
//  }, [genres])
 
//  return(
    
//   <>
//   {genres.map(genres => (<p key={genres.id}>{genres.genre}</p>))}
  
//   </>
//  )
// };

// export const TestApi2 = () => {
//     const {getAccessTokenSilently} = useAuth0();

//     const [users, setUsers] = useState<UsersTypes[]>([]);

//  useEffect(() => {


//     const fecthUsers = async () => {

//         const data =  await FetchApi("users", getAccessTokenSilently )
//         setUsers(data);
//     }

//     fecthUsers();
   
//  }, [])

//  useEffect(() => {
   
//  console.log(users);
 
  
//  }, [users])
 
//  return(
    
//   <>
//   {users.map(users => (<p key={users.id}>{users.name}</p>))}
  
//   </>
//  )
// };

// export const TestApi1 = () => {

//     const {getAccessTokenSilently} = useAuth0();


//     const [movies, setMovies] = useState<MoviesTypes[]>([]);

//  useEffect(() => {
   
   
//     const fecthMovies = async () => {

    
//     const data =  await FetchApi("movies", getAccessTokenSilently )
//         setMovies(data);
//     }

//     fecthMovies();
   
//  }, [])

//  useEffect(() => {
   
//  console.log(movies);
 
  
//  }, [movies])
 
//  return(
    
//   <>
//   {movies.map(movies => (<p key={movies.id}>{movies.title}</p>))}
  
//   </>
//  )
// }







