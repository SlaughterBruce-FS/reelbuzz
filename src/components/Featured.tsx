import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonText } from '@ionic/react';
import './featured.css';
import { ellipse, addCircle, informationCircle, playBackCircle, playCircle } from 'ionicons/icons';
import React from 'react';



const Featured: React.FC = (props) => {

    const addToList = () => {
        console.log('clicked button')
        
    }

    const getInfoBtn = () => {
        console.log('clicked button')
    }

    const playMovieBtn = () => {
        console.log('clicked button')
    }


    return (
        <div className='featured'>
            <div className="featured__bg">
                <img src="https://www.themoviedb.org/t/p/w533_and_h300_bestv2/m0ppE0yXQeFWzlwLdDUFRfanp9R.jpg" />
            </div>
            <div className="featured__overlay"></div>
            <div className="featured__container">

                <div className="featured__info">
                    <h1 className="featured__title">Respect</h1>
                    <div className="featured__list">
                        <IonItem  >
                            <IonText > <h3 className='tagLine'>Biography</h3></IonText>
                             <IonIcon icon={ellipse} />
                        </IonItem>
                        <IonItem  >
                            <IonText > <h3 className='tagLine'>Biography</h3></IonText>
                             <IonIcon icon={ellipse} />
                        </IonItem>
                        <IonItem  >
                            <IonText > <h3 className='tagLine'>Biography</h3></IonText>
                             <IonIcon icon={ellipse} />
                        </IonItem>
                  </div>
                    {/* <ul className="featured__list">
                    <li className="featured__list-item">Biography <IonIcon icon={ellipse} /> </li>
                    <li className="featured__list-item">Pop Singer</li>
                    <li className="featured__list-item">African American</li>
                </ul> */}
                    <div className="featured__row">
                        <IonItem button onClick={addToList} detail={false} >
                            <div className='featured__row-add'>
                        <IonText > <h6 >add to list</h6></IonText>
                             <IonIcon icon={addCircle} />
                             </div>
                        </IonItem>
                        <IonItem button onClick={playMovieBtn} detail={false} >
                            <div className='featured__row-add'>
                        <IonText > <h6 >play trailer</h6></IonText>
                             <IonIcon icon={playCircle} />
                             </div>
                        </IonItem>
                        <IonItem button onClick={getInfoBtn} detail={false} >
                            <div className='featured__row-add'>
                        <IonText > <h6 >info</h6></IonText>
                             <IonIcon icon={informationCircle} />
                             </div>
                        </IonItem>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Featured;
