import React, {useState} from 'react';
import { IonContent, IonHeader, IonPage, 
  IonCard, IonTitle, IonToolbar, IonCardHeader, IonCardContent} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
//import AddItem from '../AddItem'
import ItemList from '../ItemList';
import AddItem2 from '../AddItem2'

const Tab1: React.FC = () => {

  const [current, setCurrent] = useState(null);

  //hannah
  const getEmpty = () => {
    return {
      title: '',
      content: '',
      date: '',
      location: '',
      picture: '',
      clear: '',
      initialValue: '',
    }
  }
  return (
    <IonPage>
      <IonContent color="primary">
        <IonHeader collapse="condense">
          <IonToolbar color="" >
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {}
        <IonCard>
          <IonCardHeader color = "secondary">
            <h3>Create a Task</h3>
          </IonCardHeader>
          <AddItem2  title={current} clear={() => setCurrent(getEmpty())}/>
          {}
          
        </IonCard>
        <ItemList  doEdit={setCurrent}/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
