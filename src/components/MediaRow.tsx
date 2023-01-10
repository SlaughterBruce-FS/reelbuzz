import { IonContent, IonHeader, IonItem, IonPage, IonRouterLink, IonSlide, IonSlides, IonTitle, IonToolbar } from '@ionic/react';
import './MediaRow.css'
import { useHistory } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import {shuffleArray} from '../utilities';
import { useState, useEffect } from "react";
import { Movies, Trending } from '../interfaces';
import React from 'react';


const MediaRow: React.FC <{endpoint: string, title: string }> = ({ endpoint, title }) => {
    
    let history = useHistory();

    const [loadingData, setLoadingData] = useState(true);
    const [movies, setMoviesData] = useState<Movies[]>([]);

      useEffect(() => {
        axios
        .get<Movies[]>(`https://api.themoviedb.org/3/${endpoint}&api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
        .then((response: AxiosResponse ) => {
        //   console.log('Response: ', response.data.results.id);
          setMoviesData(shuffleArray(response.data.results))
        
        }).catch(error => {
         
        });
      }, [endpoint]);

    

    //   useEffect(() => {
    //     axios
    //     .get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}`)
    //     .then((response: AxiosResponse ) => {
    //       console.log('Response: trending movies', response.data.results);
       
        
    //     }).catch(error => {
         
    //     });
    //   },[]);

      

      if(!movies) return null;

    //   console.log('check here', movies)

    const loopComp = (comp: any, digit: number) => {
        let thumbnails = [];
        for(let index = 0; index < digit; index++){
            thumbnails.push(comp)
        }

        return thumbnails;
    }
    const slideOpts = {
        slidesPerView: 3
    }
    const openMovieView = () => {
        // console.log('open movie')
        // history.push('/moviesingle/1');
    } 
  return (
          <div className='media-list'>
        <h3 className='media-list__title'>{title}</h3>

      

        <IonSlides  pager={false} options={slideOpts} >
            {movies
            .map((movie) => {
                return(
                    <IonSlide style={{ width: '120px !important',  }} className='media-list__thumbnail' onClick={() => {
                      // history.push(`/moviesingle/${movie.id}`);
                    }}> 
            <IonItem key={movie.id} lines='none' className='ion-no-padding'  detail={false} routerLink={`/home/home/moviesingle/${movie.id}`}>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
            </IonItem>
            </IonSlide>
                )
            })}
  
        </IonSlides>
{/* 
        <div className='media-list__thumbnails' >
            {loopComp((
            <div className='media-list__thumbnail'> 
            <img src='https://m.media-amazon.com/images/M/MV5BYjUyN2VlZGEtNGEyZC00YjViLTgwYmQtZDJiM2FlOTU3Mjg2XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg' />
            </div>
            ),10)}
        </div> */}
    </div>

    
  );
};

export default MediaRow;
