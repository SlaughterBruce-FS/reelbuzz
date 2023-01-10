import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonCol, IonGrid, IonRow, IonCard, IonItem, IonText, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/react';
import axios, { AxiosResponse } from 'axios';
import { trash } from 'ionicons/icons';
import React, { useState, useEffect } from 'react';
import { Movies } from '../interfaces';
import './search.css'


const Search: React.FC = () => {

    const [query, setQuerySearch] = useState('');
    const [movies, setMoviesData] = useState<Movies[]>([]);
    const [newmovies, setNewMoviesData] = useState<Movies[]>([]);
    const [newSearch, setNewSearch] = useState('');
    const [totalPages, setTotalPages] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    
    // const queryurl = "https://api.themoviedb.org/3/search/multi?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US&query=Harry%20Potter&page=1&include_adult=false";

    // useEffect(() => {
    //     axios
    //     .get(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${querySearch}=1&include_adult=false`)
    //     .then((response: AxiosResponse ) => {
    //       console.log('Response: search query', response.data.results);
    
    //     }).catch(error => {
         
    //     });
    //   },[querySearch]);

    //   let = setNewSearch( encodeURI(querySearch));

   
    

    useEffect(() => {
     
       async function fetchSearch(){
            await axios
            .get<Movies[]>(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${query}&include_adult=false&page=1`)
            .then((response: AxiosResponse ) => {
              console.log('Response: search query', response.data);
              setMoviesData(response.data.results)
              setTotalPages(response.data.total_pages)

        
            }).catch(error => {
             
            });
       }
       fetchSearch();
      },[query]);

  
        async function generateMovies(){
          for (let i = 1; i <= parseInt(totalPages); i++) {
            axios
            .get<Movies[]>(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${query}&include_adult=false&page=${i}`)
            .then((response: AxiosResponse ) => {
              console.log('Response: search query update', i, response.data);
              setNewMoviesData(response.data.results)

            }).catch(error => {
             
            });

        //   newItems.push(`Item ${items.length + i}`);
        }
        setMoviesData([...movies, ...newmovies]);
         }

         useEffect(() => {
          generateMovies();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        
    


      // const generateMovies = () => {
      //   for (let i = 1; i < parseInt(totalPages); i++) {
      //           i=+1;
      //           axios
      //           .get<Movies[]>(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${query}&include_adult=false&page=${i}`)
      //           .then((response: AxiosResponse ) => {
      //             console.log('Response: search query update', response.data);
      //             setNewMoviesData(response.data.results)
    
      //           }).catch(error => {
                 
      //           });
    
      //       //   newItems.push(`Item ${items.length + i}`);
      //       }
      //       setMoviesData([...movies, ...newmovies]);

      // }

   
      
      if(!movies) return null;


      console.log('what is the total pages' , typeof  totalPages)

    //   const generateMovies = () => {
    //     for (let i = currentPage; i < parseInt(totalPages); i++) {
    //         axios
    //         .get<Movies[]>(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US&query=${query}&include_adult=false&page=1`)
    //         .then((response: AxiosResponse ) => {
    //           console.log('Response: search query', response.data);
    //           setMoviesData(response.data.results)
    //           setTotalPages(response.data.total_pages)

        
    //         }).catch(error => {
             
    //         });

    //     }
    //     setMoviesData([...movies])
    //   };

     
    

    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      <IonSearchbar value={query}  showCancelButton="focus"  animated={true} onIonChange={(e: any) => setQuerySearch(e.target.value)} placeholder="Search"></IonSearchbar>

      <IonGrid>
        <IonRow>
        {movies
            .map((movie) => {
                return(
                    <IonCol size="6" size-md="4" size-lg="2">
                        <IonItem lines='none' className='ion-no-padding' detail={false} routerLink={movie.media_type === 'movie' ? `/home/home/moviesingle/${movie.id}/${movie.media_type}` : `/home/home/tvsingle/${movie.id}/${movie.media_type}` } style={{  }} > 
                        <div style={{  zIndex: '5', color: 'blue',  width: '100%',  height: '100%', justifyContent: 'space-between', display: 'flex', flexDirection: 'column', position: 'absolute' }} >
                        <div className='top' style={{  zIndex: '10', width: '95%', display: 'flex',  justifyContent: 'space-between',}}  >
                            <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(163, 127, 243, 0.4)', fontSize: '12px', color: 'white', fontWeight: '700', padding: '5px', borderRadius: '5px' }} >
                                <span>{movie.media_type}</span>
                                {/* <span>2022</span> */}
                            </div>
                            <div style={{  background: 'rgba(163, 127, 243, 0.4)', fontSize: '12px', color: 'white', fontWeight: '700', padding: '5px', borderRadius: '5px', height: '25px' }}>
                                {movie.vote_average}/10
                            </div>
                        </div>
                        <div className="bottom" style={{ width: '90%', textAlign: 'center' }}>
                           <IonText style={{ color: 'white', fontSize: '12px', fontWeight: '700'  }} > { movie.title != null ? movie.title : movie.original_name } </IonText>
                        </div>
                        </div>
                        <div className="overlay"></div>
                        
                        <img className='pImg' src={movie.poster_path != null ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : `https://image.tmdb.org/t/p/original${movie.profile_path}` } />
                        </IonItem>   
                    </IonCol>
                )
            })}
        </IonRow>
      </IonGrid>

      <IonInfiniteScroll  onIonInfinite={(ev) => {
          generateMovies();
          setTimeout(() => ev.target.complete(), 500);
        }} >
        <IonInfiniteScrollContent loadingText="Please wait..." loadingSpinner="bubbles"></IonInfiniteScrollContent>
      </IonInfiniteScroll>


      </IonContent>
    </IonPage>
  )
};

export default Search;



