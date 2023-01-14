import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore/lite";
import db from '../data/firebase.config';

// CREATE
// Esta función recibe el objeto que quiero agregar como nuevo documento de mi colección y como segundo parámetro el nombre de mi colección.

export const createItem = async (obj, nameCollection) => {
    try {
        const colRef = collection(db, nameCollection);
        const data = await addDoc(colRef, obj);
        return data.id;
    }catch(error) {
        console.error(error);
    }
}

// READ
  export const getItems = async (nameCollection) => {
    const colRef = collection(db, nameCollection)
    const result = await getDocs(query(colRef))

    return getArrayFromCollection(result);
  } 

  export const getItemById = async (id, nameCollection) => {
    const colRef = collection(db, nameCollection);
    const result = await getDoc(doc(colRef, id));
    console.log(result);
    return { ...result.data(), id: result.id};
  }


/* -------------------------- Funciones de soporte -------------------------- */
// Crea un nuevo array con los elementos que se obtienen de firebase y agrega la propiedad id
const getArrayFromCollection = ( collection ) => {
    return collection.docs.map( doc =>{
        return { ...doc.data(), id: doc.id }
    })
}

//SUBIR TODOS NUESTRO PRODUCTOS A FIRESTORE:
export const uploadCollectionItems = async (arrayItems, nameCollection) => {
    arrayItems.forEach( async(item) => {
        await createItem(item,nameCollection);
    });
}

