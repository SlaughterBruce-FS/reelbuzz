import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonBackButton, IonItem, IonText, IonIcon, IonSlides, IonSlide, IonLabel, IonNote, IonModal, IonButton, IonRouterLink, IonCol, IonRow, IonLoading, useIonLoading } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './moviesingle.css';
import '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { ellipse, addCircle, informationCircle, playBackCircle, playCircle } from 'ionicons/icons';
import { useState, useEffect, useRef } from "react";
import { useParams, useHistory } from 'react-router-dom';
import { title } from 'process';
import { Movie, Genres, Actors, StarActors, SimilarMovies, WatchMovies, MovieDB, Youtube, Tvs, Seasons, SeasonsData, Createdby, ProductionCompanies,SeasonsShows,SeasonEpisodes } from '../interfaces';
import { OverlayEventDetail } from '@ionic/core/components';
import React from 'react';





const TvSingle: React.FC = () => {
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
    const [watchMovies, setWatchMovies] = useState<WatchMovies[]>([]);
    const [imdbInfo, setImdbInfo] = useState<MovieDB[]>([]);
    const [seasonInfo, setSeasonInfo] = useState<Seasons[]>([]);
    const [youtubeInfo, setYoutubeInfo] = useState<Youtube[]>([]);
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
    const [linkTrailer, setLinkTrailer] = useState('');
    const [youtubeid, setYoutubeid] = useState('');
    const [tvid, setTvid] = useState('');
    const [season_number, setSeason_number] = useState('');
    const [seasonData, setSeasonData] = useState<SeasonsData[]>([]);
    const [seasonShowData, setSeasonhowData] = useState<SeasonsShows[]>([]);
    const [createdBy, setCreatedBy] = useState<Createdby[]>([]);
    const [productionCompanies, setProductionCompanies] = useState<ProductionCompanies[]>([])
    const [status, setStatus] = useState('');
    const [seasonNumber, setSeasonNumber] = useState('');
    const [episodeNumber, setEpisodeNumber] = useState('');
    const [tvLanguages, setTvLanguages] = useState('');
    const [lastImage, setLastImage] = useState('');
    const [lastEpName, setLastEpName] = useState('');
    const [lastOverview, setLastOverview] = useState('');
    const [lastairdate, setLastairdate] = useState('');
    const [lastSeason, setLastSeason] = useState('');
    const [lastEpNumber, setLastEpNumber] = useState('');
    const [seasonclicked, setSeasonclicked] = useState('');
    const [seasonEpisodes, setSesonEpisodes] = useState<SeasonEpisodes[]>([]);


    const [present, dismiss] = useIonLoading();
    const [isLoading, setIsLoading] = useState<boolean>(false);





    useEffect(() => {
        setIsLoading(true)
        axios
            .get<Tvs[]>(`https://api.themoviedb.org/3/${selectedType}/${listIdNumber}?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
            .then((response: AxiosResponse) => {
                console.log('Response: for main tv data ', response.data);
                setSingleMovieData(response.data)
                setPoster(response.data.backdrop_path)
                setTitle(response.data.name)
                setGenresList(response.data.genres)
                setMoviePoster(response.data.poster_path)
                setOverview(response.data.overview)
                setImdbid(response.data.imdb_id)
                setSeasonData(response.data.seasons)
                setRunTime(response.data.episode_run_time)
                setContentRationg(response.data.vote_average)
                setMovieYear(response.data.first_air_date)
                setReleaseDate(response.data.first_air_date)
                setCreatedBy(response.data.created_by)
                setProductionCompanies(response.data.production_companies)
                setStatus(response.data.status)
                setSeasonNumber(response.data.number_of_seasons)
                setEpisodeNumber(response.data.number_of_episodes)
                setTvLanguages(response.data.languages)
                setLastImage(response.data.last_episode_to_air.still_path)
                setLastEpName(response.data.last_episode_to_air.name)
                setLastOverview(response.data.last_episode_to_air.overview)
                setLastairdate(response.data.last_episode_to_air.air_date)
                setLastEpNumber(response.data.last_episode_to_air.episode_number)
                setLastSeason(response.data.last_episode_to_air.season_number)
                setIsLoading(false)
            }).catch(error => {

            });
    }, [listIdNumber]);

    useEffect(() => {
        axios
            .get<SimilarMovies[]>(`https://api.themoviedb.org/3/tv/${listIdNumber}/similar?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
            .then((response: AxiosResponse) => {
                console.log('Response: for simalar', response.data);
                setSimilarMovies(response.data.results)
                setSimPoster(response.data.results.backdrop_path)
                setSimTitle(response.data.results.title)
                setSimMoviePoster(response.data.results.poster_path)
            }).catch(error => {

            });
    }, [listIdNumber]);

    let x = movieYear;
    let onlyYear = movieYear.slice(0, 4)
    console.log('this is me trying x', onlyYear)


    const slideOpts = {
        slidesPerView: 4
    }

    const slideOptss = {
        slidesPerView: 5
    }

    const slideOptsSeasons = {
        slidesPerView: 4
    }

    const slideOptprd = {
        slidesPerView: 4
    }






    console.log('the video link', contentRating)


    const addToList = () => {
        console.log('clicked button')

    }

    const getInfoBtn = () => {
        console.log('clicked button')
    }

    const playMovieBtn = () => {
        console.log('clicked button')

    }

    const modal = useRef<HTMLIonModalElement>(null);
    const [isOpen, setIsOpen] = useState(false);



    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {

    }
    





    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                    <IonBackButton/>
                    </IonButtons>
                    <IonTitle>{title}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

            <IonLoading
        cssClass="my-custom-class"
        isOpen={isLoading}
        onDidDismiss={() => setIsLoading(false)}
        message={'Please wait...'}
        // duration={5000}
      />

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
                                        <span>{onlyYear}</span>
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


                    <div className="single__overview">

                        <IonText>
                            <h3 className='single__title' >Last Episode  </h3>
                        </IonText>
                        <div className="episodeview">
                            <IonRow>
                                 <IonCol>
                                <IonText><p style={{ margin: '0', fontWeight: '700' }} >Aired: {lastairdate}</p></IonText>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                            <IonCol size='6' >
                            <div className="left">
                                <img src={`https://image.tmdb.org/t/p/original${lastImage}`} />
                            </div>
                            </IonCol>
                            <IonCol size='6'>
                                <IonRow>
                                {/* <IonCol>
                                <IonText><p style={{ margin: '0', textAlign: 'center', fontWeight: '700' }} >{lastairdate}</p></IonText>
                                </IonCol> */}
                                    <IonCol>
                                    <IonText><h2 style={{ margin: '0', fontSize
                                : '18px', fontWeight: '700' }} >{lastEpName}</h2></IonText>
                                    </IonCol>
                                </IonRow>
                            
                            <IonRow>
                               
                                
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonText><p style={{ margin: '0' }}>S. {lastSeason} </p></IonText>
                                </IonCol>
                                <IonCol>
                                <IonText><p style={{ margin: '0' }}>Ep. {lastEpNumber} </p></IonText>
                                </IonCol>
                            </IonRow>
                            </IonCol>
                            <IonCol size='12'>
                            <p style={{ fontSize: '12px', margin: '0' }} >{lastOverview}</p>
                            </IonCol>
                            </IonRow>
                        </div>
                    </div>



                    <div className="mainCast">
                        <div className="mainCast__top">
                            <IonText>
                                <h3 className='single__title' >Seasons</h3>
                            </IonText>

                        </div>


                        <IonSlides pager={false} options={slideOptsSeasons} >
                            {seasonData
                                .map((season) => {
                                    return (
                                        <IonSlide className='actorList__thumbnail tv'>
                                        <IonItem button detail={false} id='open-modal2' onClick={() => {
                                            
                                                
                                            
                                                axios
                                                    .get<Seasons[]>(`https://api.themoviedb.org/3/tv/${listIdNumber}/season/${season.season_number}?api_key=2adba0dce8bf0ffb679ec14accf3bd52&language=en-US`)
                                                    .then((response: AxiosResponse) => {
                                                        console.log('Response: for seasons info', response.data);
                                                        setSesonEpisodes(response.data.episodes)
                                                      
                                                    }).catch(error => {
                                        
                                                    });

                                                    setIsOpen(true)
                                                    setIsLoading(false)

                                                    
                                            
                                            
                                        }} lines='none'>
                                            <div style={{ height: '150px', width: '100px', padding: '10px' }} className="actorList__image" key={season.id}>
                                                
                                                <img  src={`https://image.tmdb.org/t/p/original${season.poster_path}`} />
                                                
                                            </div>
                                            </IonItem>

                                            <h6 style={{ textDecoration: 'none', fontSize: '12px', color: 'black', padding: '0 10px', margin: '0' }}>{season.name}</h6>
                                          
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
                            <IonLabel slot='start'>Created By</IonLabel>
                            <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                                {createdBy
                                    .map((created) => {
                                        return created.name
                                    })
                                }
                            </IonNote>
                        </IonItem>
                        <IonItem lines='full'>
                            <IonLabel slot='start'>Status</IonLabel>
                            <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                                {status}
                            </IonNote>
                        </IonItem>
                        <IonItem lines='full'>
                            <IonLabel slot='start'>Release Date</IonLabel>
                            <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                                {releaseDate}
                            </IonNote>
                        </IonItem>
                        <IonItem lines='full'>
                            <IonLabel slot='start'>Seasons</IonLabel>
                            <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                                {seasonNumber}
                            </IonNote>
                        </IonItem>
                        <IonItem lines='full'>
                            <IonLabel slot='start'>Episodes</IonLabel>
                            <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                                {episodeNumber}
                            </IonNote>
                        </IonItem>
                        <IonItem lines='full'>
                            <IonLabel slot='start'>Languages</IonLabel>
                            <IonNote slot='end' style={{ textAlign: 'right', color: 'black' }}>
                                {tvLanguages}
                            </IonNote>
                        </IonItem>
                        <IonItem style={{ dispalay: 'flex', flexDirection: 'column' }} lines='full'>
                            <IonText >Production Companies</IonText>
                            <IonSlides pager={false} options={slideOptprd} >
                                {productionCompanies
                                    .map((prod) => {
                                        return (
                                            <IonSlide className='actorList__thumbnail' style={{ margin: '0 10px' }}>
                                                <IonRouterLink href={`/moviesingle/${prod.id}`} >
                                                    <div style={{ height: '80px', width: '80px', padding: '10px' }} className="actorList__image" key={prod.id}>
                                                        <img src={`https://image.tmdb.org/t/p/original${prod.logo_path}`} />
                                                    </div>

                                                </IonRouterLink>
                                            </IonSlide>
                                        )
                                    })}

                            </IonSlides>
                        </IonItem>

                    </div>


                    <div className="mainCast">
                        <IonText>
                            <h3>Recommended Shows</h3>
                        </IonText>

                        <IonSlides pager={false} options={slideOptss} >
                            {similarMovies
                                .map((sim) => {
                                    return (
                                        <IonSlide className='actorList__thumbnail' style={{ margin: '0 10px' }}>
                                            <IonItem routerLink={`/home/home/tvsingle/${sim.id}`} >
                                                <div style={{ height: '150px', width: '100px', padding: '10px' }} className="actorList__image" key={sim.id}>
                                                    <img src={`https://image.tmdb.org/t/p/original${sim.poster_path}`} />
                                                </div>

                                                <h6 style={{ textDecoration: 'none', fontSize: '12px', color: 'black', padding: '0 10px', margin: '0' }}>{sim.title}</h6>
                                            </IonItem>
                                        </IonSlide>
                                    )
                                })}

                        </IonSlides>
                    </div>

                </div>

                {/* start modal for trailer */}

                <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
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

                {/* start model for seasons */}
                <IonModal isOpen={isOpen}>
                    <IonHeader>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton onClick={() => setIsOpen(false)}>Cancel</IonButton>
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

                       {seasonEpisodes
                       .map((episode) => {
                        return (
                            <div className="seasoneps">
                                <IonItem button lines='full' detail={false}>
                                    <IonRow>
                                        <IonCol size='6' >
                                        <img src={`https://image.tmdb.org/t/p/original${episode.still_path}`} />
                                        </IonCol>
                                        <IonCol size='6' >
                                        <IonText>
                                        <h3 style={{ margin: '0', fontSize: '16px', fontWeight: '700', textAlign: 'center' }}>{episode.name}</h3>
                                    </IonText>
                                    <IonRow>
                                        <IonCol>
                                        <IonText>
                                        <p style={{ margin: '0', textAlign: 'center' }} >S {episode.season_number}</p>
                                    </IonText>
                                        </IonCol>
                                        <IonCol>
                                        <IonText>
                                        <p style={{ margin: '0', textAlign: 'center' }} >E {episode.episode_number}</p>
                                    </IonText>
                                        </IonCol>
                                    </IonRow>
                                        <IonText>
                                        <p style={{ margin: '0', textAlign: 'center' }} >{episode.air_date}</p>
                                    </IonText>
                                    
                                    
                                        </IonCol>
                                    </IonRow>
                                </IonItem>
                            </div>
                        )
                       } )
                       }


                    </IonContent>
                </IonModal>


            </IonContent>
        </IonPage>
    );
};

export default TvSingle;
