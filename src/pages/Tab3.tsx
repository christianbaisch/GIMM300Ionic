import React, {useState} from 'react';
import { IonContent, IonHeader, IonFooter, IonPage, IonTitle, IonToolbar, IonSearchbar, IonCard} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import {IonicSelectableModule} from 'ionic-selectable';
import ItemList from '../ItemList';
import Item from '../item';

const Tab3: React.FC = () => {

  const[searchText, setSearchText] = useState('');
  const [setCurrent] = useState(null);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Find Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>    
        <IonHeader collapse="condense">
          <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>      
          </IonToolbar>
        </IonHeader>
        <IonSearchbar value={searchText} onIonChange={e => 
          setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>
        <IonCard>
          <ItemList doEdit={setCurrent}/>
        </IonCard>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Tab3;
