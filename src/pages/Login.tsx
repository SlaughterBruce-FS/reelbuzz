import { IonCol, IonContent,  IonPage, IonRow, IonItem, IonInput, IonButton, IonImg, IonAlert, useIonRouter   } from '@ionic/react';
import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';


function validateEmail(email: string) {
    const re = /^((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))$/;
    return re.test(String(email).toLowerCase());
  }

const Login: React.FC = () => {
  const navigation = useIonRouter();

    let history = useHistory();

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [message, setMessage] = useState<string>("");

  const handleLogin = () => {

    const logindata = {
      email: email,
      password: password,
    };

      console.log('login')
      axios.post(`http://localhost:8000/api/login`, logindata)
      .then((response: AxiosResponse) => {
          console.log('Response: login data ', response.data);
          navigation.push('/home', 'root', 'replace')
            }).catch(error => {
              console.log('something went wrong');
           });
      
      // history.push("/home");
      
  }


  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:8000/api/login`)
  //     .then((response: AxiosResponse) => {
  //       console.log('Response: login data ', response.data);
      

  //     }).catch(error => {

  //     });
  // }, []);

 

  return (
    <IonPage>
      <IonContent fullscreen>

      <IonRow>
          <IonCol>
            <IonAlert
              isOpen={error}
              onDidDismiss={() => setError(false)}
              cssClass="my-custom-class"
              header={"Error!"}
              message={message}
              buttons={["Dismiss"]}
            />
          </IonCol>
        </IonRow>

        <IonCol className='login__main'

        >
          <IonRow
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* <IonImg
              style={{ width: "350px", paddingBottom: "50px" }}
              src="./assets/" /> */}
              Logo
            <IonItem
            >
              <IonInput
                style={{ textAlign: 'center' }}
                placeholder="email" value={email} required type="email" onIonChange={(e: any) => setEmail(e.target.value)} />
            </IonItem>
            <IonItem
              style={{ paddingBottom: '10px' }}
              lines='none'>
              <IonInput
                style={{ textAlign: 'center' }}
                placeholder="Password" type="password" value={password} clearOnEdit onIonChange={(e: any) => setPassword(e.target.value)} />
            </IonItem>
            {/* <IonButton routerLink='/Newsfeed'>Login</IonButton> */}
            <IonButton onClick={handleLogin}>Login</IonButton>
            <a style={{ marginTop: '10px' }}
              href="#">Forgot Password</a>
          </IonRow>
        </IonCol>
       
      </IonContent>
    </IonPage>
  );
};

export default Login;
