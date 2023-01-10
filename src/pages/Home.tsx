import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Mediarow from '../components/MediaRow';
import Mediarow2 from '../components/MediaRow2';
// import Featured from '../components/Featured';
import axios, { AxiosResponse } from 'axios';
import { useState, useEffect } from "react";
import React from 'react';



const Home: React.FC = (props) => {

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
        .then((response: AxiosResponse ) => {
        //   console.log('Response: genre', response.data);
    
        }).catch(error => {
         
        });
      },[]);

    

  
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
  
      <Mediarow2
          title="Movies trending this week"
          endpoint2="trending/movie/week"
        />
        <Mediarow2
          title="Trending on Tv this week"
          endpoint2="trending/tv/week"
        />
         <Mediarow
          title="Action"
          endpoint="discover/movie?with_genres=28&primary_release_year=2022"
        />


      </IonContent>
    </IonPage>
  );
};

export default Home;
