import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

import ItemList from '../itemList';

const Tab2: React.FC = () => {

  const [setCurrent] = useState(null);

  return (
    <IonPage>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
        <ItemList doEdit={setCurrent}/>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
