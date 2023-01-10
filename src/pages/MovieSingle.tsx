import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonText, IonIcon, IonSlides, IonSlide, IonLabel, IonNote, IonModal, IonButton, IonRouterLink, } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './moviesingle.css';
import '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { ellipse, addCircle, informationCircle, playBackCircle, playCircle } from 'ionicons/icons';
import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { title } from 'process';
import { Movie, Genres, Actors, StarActors, SimilarMovies, WatchMovies, MovieDB, Youtube, Tvs } from '../interfaces';
import { OverlayEventDetail } from '@ionic/core/components';
import React from 'react';




const MovieSingle: React.FC = () => {
  let history = useHistory();

  const selectedListId = useParams<{ id: string,  }>().id;

  const selectedType = useParams<{ type: string,  }>().type;

  const listIdNumber = Number(selectedListId);

  const [singleMovieData, setSingleMovieData] = useState<Movie[]>([]);
  const [poster, setPoster] = useState('');
  const [simPoster, setSimPoster] = useState('');
  const [title, setTitle] = useState('');
  const [simTitle, setSimTitle] = useState('');
  const [genresList, setGenresList] = useState<Genres[]>([]);
  const [actorsList, setActorsList] = useState<Actors[]>([]);
  const [starActorsList, setStarActorsList] = useState<StarActors[]>([]);
  const [similarMovies, setSimilarMovies] = useState<SimilarMovies[]>([]);
  const [moviePoster, setMoviePoster] = useState('');
  const [movieSimPoster, setSimMoviePoster] = useState('');
  const [runTime, setRunTime] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [overview, setOverview] = useState('');
  const [imdbId, setImdbid] = useState('');
  const [trailerVid, setTrailerVid] = useState('');
  const [contentRating, setContentRationg] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [directors, setDirectos] = useState('');
  const [companies, setCompanies] = useState('');
  const [writers, setWriters] = useState('');
  const [languages, setLanguages] = useState('');
  const [youtubeid, setYoutubeid] = useState('');
  const [tv, setTvsData] = useState<Tvs[]>([]);
//   const [seasonData, setSeasonData] = useState<SeasonsData[]>([]);
//   const [seasonShowData, setSeasonhowData] = useState<SeasonsShows[]>([]);




  useEffect(() => {
    axios
      .get<Movie[]>(`https://api.themoviedb.org/3/${selectedType}/${listIdNumber}?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
      .then((response: AxiosResponse) => {
        // console.log('Response: ', response.data);
        setSingleMovieData(response.data)
        setPoster(response.data.backdrop_path)
        setTitle(response.data.title)
        setGenresList(response.data.genres)
        setMoviePoster(response.data.poster_path)
        setRunTime(response.data.runtime)
        setOverview(response.data.overview)
        setImdbid(response.data.imdb_id)

      }).catch(error => {

      });
  }, [listIdNumber]);





  useEffect(() => {
    // setIsLoading(true)
    axios
        .get<Tvs[]>(`https://api.themoviedb.org/3/${selectedType}/${listIdNumber}?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
        .then((response: AxiosResponse) => {
            console.log('Response: for main data ', response.data);
            setTvsData(response.data)
        }).catch(error => {

        });
}, [listIdNumber]);

  useEffect(() => {
    axios
      .get<SimilarMovies[]>(`https://api.themoviedb.org/3/movie/${listIdNumber}/similar?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
      .then((response: AxiosResponse) => {
        // console.log('Response: for simalar', response.data);
        setSimilarMovies(response.data.results)
        setSimPoster(response.data.results.backdrop_path)
        setSimTitle(response.data.results.title)
        setSimMoviePoster(response.data.results.poster_path)
      }).catch(error => {

      });
  }, [listIdNumber]);

//   console.log('here is the id', imdbId)


  useEffect(() => {
    axios
      .get<WatchMovies[]>(`https://api.themoviedb.org/3/movie/361743/watch/providers?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
      .then((response: AxiosResponse) => {
        // console.log('Response: for watch providers', response.data.results);

      }).catch(error => {

      });
  }, []);

  useEffect(() => {
    axios
      .get<MovieDB[]>(`https://api.themoviedb.org/3/movie/361743/watch/providers?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
      .then((response: AxiosResponse) => {
        // console.log('Response: for watch providers', response.data.results);

      }).catch(error => {

      });
  }, []);


  const slideOpts = {
    slidesPerView: 4
  }

  const slideOptss = {
    slidesPerView: 5
  }


  useEffect(() => {
    axios
      .get(`https://imdb-api.com/en/API/Title/k_38krw2xp/${imdbId}/FullActor,FullCast,Trailer`)
      .then((response: AxiosResponse) => {
        // console.log('Response from imdb:', response.data)
        setTrailerVid(response.data.linkEmbed)
        setContentRationg(response.data.contentRating)
        setActorsList(response.data.actorList)
        setStarActorsList(response.data.starList)
        setDirectos(response.data.directors)
        setCompanies(response.data.companies)
        setLanguages(response.data.languages)
        setWriters(response.data.writers)
        setMovieYear(response.data.year)
        setReleaseDate(response.data.releaseDate)
        // setSimilarMovies(response.data.similars)
      })
  }, [imdbId])


  useEffect(() => {
    axios
      .get<Youtube[]>(`https://imdb-api.com/en/API/YouTubeTrailer/k_38krw2xp/${imdbId}`)
      .then((response: AxiosResponse) => {
        // console.log('Response: youtube', response.data);
        setYoutubeid(response.data.videoId)
      }).catch(error => {

      });
  }, []);




  const [simOpen, setSimOpen] = useState(false);


//   console.log('the video link', contentRating)


  const addToList = () => {
    // console.log('clicked button')

  }

  const getInfoBtn = () => {
    // console.log('clicked button')
  }

  const playMovieBtn = () => {
    // console.log('clicked button')

  }

  const modal = useRef<HTMLIonModalElement>(null);
  const modal3 = useRef<HTMLIonModalElement>(null);



  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {

  }






  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Movie Single</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <div className='featured'>
          <div className="featured__bg">
            <img src={`https://image.tmdb.org/t/p/original${poster}`} />
          </div>
          <div className="featured__overlay"></div>
          <div className="featured__container">

            <div className="featured__info">
              <div className="featured__img">
                <img src={`https://image.tmdb.org/t/p/original${moviePoster}`} />
                <div className="featured__info-sub">
                  <h1 className="featured__title">{title}</h1>
                  <div className="featured__movie-info">
                    <span>{runTime}m</span>
                    <span>{contentRating}</span>
                    <span>{movieYear}</span>
                  </div>
                </div>
              </div>
              <div className="featured__list">
                {genresList
                  .map((type) => {
                    console.log('here we go', type)
                    return (
                      <IonItem key={type.id} >
                        <IonText > <h3 className='tagLine'> {type.name} </h3></IonText>
                        <IonIcon icon={ellipse} />
                      </IonItem>
                    )
                  })}
              </div>


            </div>
          </div>

        </div>


        <div className="featured__row">
          <IonItem button onClick={addToList} detail={false} >
            <div className='featured__row-add'>
              <IonText > <h6 >add to list</h6></IonText>
              <IonIcon icon={addCircle} />
            </div>
          </IonItem>
          <IonItem button id='open-modal' onClick={() => {

          }} detail={false} >
            <div className='featured__row-add'>
              <IonText > <h6 >play trailer</h6></IonText>
              <IonIcon icon={playCircle} />
            </div>
          </IonItem>
          {/* <IonItem button onClick={getInfoBtn} detail={false} >
                            <div className='featured__row-add'>
                        <IonText > <h6 >info</h6></IonText>
                             <IonIcon icon={informationCircle} />
                             </div>
                        </IonItem> */}
        </div>
        <div className="featured__singleinfo">


          <div className="single__overview">

            <IonText>
              <h3 className='single__title' >Overview</h3>
              <p>{overview}</p>
            </IonText>
          </div>
          <div className="mainCast">
            <div className="mainCast__top">
              <IonText>
                <h3 className='single__title' >Cast</h3>
              </IonText>

            </div>


            <IonSlides pager={false} options={slideOpts} >
              {actorsList
                .map((actor) => {
                  return (
                    <IonSlide className='actorList__thumbnail'>
                      {/* <IonRouterLink href={`/moviesingle/${movie.id}`}> */}
                      <div style={{ height: '150px', width: '100px', padding: '10px' }}  className="actorList__image" key={actor.id}>
                        <img src={actor.image} />
                      </div>

                      <h6 style={{ textDecoration: 'none', fontSize: '12px', color: 'black', padding: '0 10px', margin: '0' }}>{actor.name}</h6>
                      {/* </IonRouterLink> */}
                    </IonSlide>
                  )
                })}

            </IonSlides>
          </div>



          <div className="single__info">
            <IonText>
              <h3 className='single__title' >Details</h3>
            </IonText>
            <IonItem lines='full'>
              <IonLabel slot='start'>Directors</IonLabel>
              <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                {directors}
              </IonNote>
            </IonItem>
            <IonItem lines='full'>
              <IonLabel slot='start'>Writers</IonLabel>
              <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                {writers}
              </IonNote>
            </IonItem>
            <IonItem lines='full'>
              <IonLabel slot='start'>Companies</IonLabel>
              <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                {companies}
              </IonNote>
            </IonItem>
            <IonItem lines='full'>
              <IonLabel slot='start'>Release Date</IonLabel>
              <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                {releaseDate}
              </IonNote>
            </IonItem>
            <IonItem lines='full'>
              <IonLabel slot='start'>Languages</IonLabel>
              <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                {languages}
              </IonNote>
            </IonItem>
          </div>


          <div className="mainCast">
            <IonText>
              <h3>Similar Movies</h3>
            </IonText>

            <IonSlides pager={false} options={slideOptss} >
              {similarMovies
                .map((sim) => {
                  return (
                    <IonSlide className='actorList__thumbnail' style={{ margin: '0 10px' }}>
                   <IonItem button id='modal2' onClick={() => {
                                            
                                                
                                            
                                            // axios
                                            // .get(`https://imdb-api.com/en/API/Title/k_38krw2xp/${imdbId}/FullActor,FullCast`)
                                            // .then((response: AxiosResponse ) =>{
                                            //   console.log('Response from imdb:', response.data)
                                            //   setTrailerVid(response.data.linkEmbed)
                                            //   setContentRationg(response.data.contentRating)
                                            //   setActorsList(response.data.actorList)
                                            //   setStarActorsList(response.data.starList)
                                            //   setDirectos(response.data.directors)
                                            //   setCompanies(response.data.companies)
                                            //   setLanguages(response.data.languages)
                                            //   setWriters(response.data.writers)
                                            //   setMovieYear(response.data.year)
                                            //   setReleaseDate(response.data.releaseDate)
                                            //   setSimilarMovies(response.data.similars)
                                            //   setMoviePoster(response.data.image)
                                            // })

                                                setSimOpen(true)
                                                // setIsLoading(false)

                                                
                                        
                                        
                                    }} >
                        <div style={{ height: '150px', width: '100px', padding: '10px' }} className="actorList__image" key={sim.id}>
                          <img src={`https://image.tmdb.org/t/p/original${sim.poster_path}`} />
                        </div>

                        {/* <h6 style={{ textDecoration: 'none', fontSize: '12px', color: 'black', padding: '0 10px', margin: '0' }}>{sim.title}</h6> */}
                      </IonItem>
                    </IonSlide>
                  )
                })}

            </IonSlides>
          </div>

        </div>



        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss( )}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>{title}</IonTitle>
              <IonButtons slot="end">
                {/* <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton> */}
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            
              <div className="trail">
                

                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${youtubeid}?controls=0`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

              </div>

     
          </IonContent>
        </IonModal>

        <IonModal ref={modal3}  isOpen={simOpen} trigger="modal2" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => setSimOpen(false)}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>{title}</IonTitle>
              <IonButtons slot="end">
                {/* <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton> */}
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>

<div className='featured'>
      <div className="featured__bg">
          <img src={`https://image.tmdb.org/t/p/original${poster}` }/>
      </div>
      <div className="featured__overlay"></div>
      <div className="featured__container">

          <div className="featured__info">
            <div className="featured__img">
              <img  src={`https://image.tmdb.org/t/p/original${moviePoster}`} />
              <div className="featured__info-sub">
              <h1 className="featured__title">{title}</h1>
              <div className="featured__movie-info">
              <span>{runTime}m</span> 
              <span>{contentRating}</span>
              <span>{movieYear}</span>
              </div>
              </div>
              </div>
              <div className="featured__list">
                {genresList
                .map((type) => {
                  console.log('here we go',type)
                  return (
                    <IonItem key={type.id} >
                    <IonText > <h3 className='tagLine'> {type.name} </h3></IonText>
                     <IonIcon icon={ellipse} />
                </IonItem>
                  )
                })}
            </div>
         

          </div>
      </div>
    
  </div>


  <div className="featured__row">
                  <IonItem button onClick={addToList} detail={false} >
                      <div className='featured__row-add'>
                  <IonText > <h6 >add to list</h6></IonText>
                       <IonIcon icon={addCircle} />
                       </div>
                  </IonItem>
                  <IonItem  button onClick={() => {
                    
                  }} detail={false} >
                      <div className='featured__row-add'>
                  <IonText > <h6 >play trailer</h6></IonText>
                       <IonIcon icon={playCircle} />
                       </div>
                  </IonItem>
                  {/* <IonItem button onClick={getInfoBtn} detail={false} >
                      <div className='featured__row-add'>
                  <IonText > <h6 >info</h6></IonText>
                       <IonIcon icon={informationCircle} />
                       </div>
                  </IonItem> */}
              </div>
  <div className="featured__singleinfo">
  <div className="single__overview">
    
    <IonText>
      <h3 className='single__title' >Overview</h3>
      <p>{overview}</p>
    </IonText>
  </div>
  <div className="mainCast">
    <div className="mainCast__top">
    <IonText>
      <h3 className='single__title' >Cast</h3>
    </IonText>
    
    </div>
  
    
    <IonSlides pager={false} options={slideOpts} >
      {actorsList
      .map((actor) => {
          return(
              <IonSlide className='actorList__thumbnail'> 
      {/* <IonRouterLink href={`/moviesingle/${movie.id}`}> */}
      <div className="actorList__image" key={actor.id}>
      <img src={actor.image} />
      </div>
      
      <h6>{actor.name}</h6>
      {/* </IonRouterLink> */}
      </IonSlide>
          )
      })}

  </IonSlides>
  </div>

  

  <div className="single__info">
  <IonText>
      <h3 className='single__title' >Details</h3>
    </IonText>
    <IonItem lines='full'>
      <IonLabel slot='start'>Directors</IonLabel>
      <IonNote slot='end'> 
        {directors}
      </IonNote>
    </IonItem>
    <IonItem lines='full'>
      <IonLabel slot='start'>Writers</IonLabel>
      <IonNote slot='end'> 
        {writers}
      </IonNote>
    </IonItem>
    <IonItem lines='full'>
      <IonLabel slot='start'>Companies</IonLabel>
      <IonNote slot='end'> 
        {companies}
      </IonNote>
    </IonItem>
    <IonItem lines='full'>
      <IonLabel slot='start'>Release Date</IonLabel>
      <IonNote slot='end'> 
        {releaseDate}
      </IonNote>
    </IonItem>
    <IonItem lines='full'>
      <IonLabel slot='start'>Languages</IonLabel>
      <IonNote slot='end'> 
        {languages}
      </IonNote>
    </IonItem>
  </div>
  

  {/* <div className="mainCast">
    <IonText>
      <h3>Similar Movies</h3>
    </IonText>

    <IonSlides pager={false} options={slideOptss} >
      {similarMovies
      .map((sim) => {
          return(
              <IonSlide className='actorList__thumbnail'> 
    <IonRouterLink href={`/moviesingle/${sim.id}`}>
      <div className="actorList__image" key={sim.id}>
      <img src={sim.image} />
      </div>
      
      <h6>{sim.title}</h6>
      </IonRouterLink>
      </IonSlide>
          )
      })}

  </IonSlides>
  </div> */}

  </div>


  
</IonContent>
            
        </IonModal>

        


      </IonContent>
    </IonPage>
  );
};

export default MovieSingle;
