import React from 'react';
import Item from "./item";
import firebase from 'firebase';
import {userCollection, useCollection} from "react-firebase-hooks/firestore"
import { IonList} from '@ionic/react';

export default function ItemList({doEdit}){
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("items").orderBy("createdOn", "desc"),
        {
            snapshotListenOptions: {includeMetadataChanges: true}
        }
    );
    const closeSlidingItems = () => {
        var list = document.getElementById("list");
        list.closeSlidingItems();
    };

    const doDelete = id => {
        firebase.firestore().collection("items").doc(id).delete();
    };

    return (
        <>
        <h3>To Do:</h3>
        <IonList id="list">
            {value && value.docs.map(doc => {
                return (
                    !loading && (
                        <Item doc={doc}
                        doEdit = { i=> {
                            closeSlidingItems();
                            doEdit(i);
                        }}
                        doDelete ={ i => {
                            closeSlidingItems();
                            doDelete(i);
                        }}
                        key = {doc.id}
                        />
                        )
                );
            })}
        </IonList>
        </>
    )
}