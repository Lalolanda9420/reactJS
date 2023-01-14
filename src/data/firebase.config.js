import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { uploadCollectionItems } from "../helpers/firestore.controllers";
import { products } from "./data";

const firebaseConfig = {
  apiKey: "AIzaSyD2uBPuRJAxaZ1YkaXHa3twdn-GHzFerog",
  authDomain: "shopeando-app.firebaseapp.com",
  projectId: "shopeando-app",
  storageBucket: "shopeando-app.appspot.com",
  messagingSenderId: "399330825374",
  appId: "1:399330825374:web:41b0d2b5772a4ed1dcd78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export mi firebase para que sea usado en cualquier parte de la app
export default db;


// Correr por unica vez cuando aun no he subido los productos de mi coleccion
if(false){
    setTimeout(() => {
        console.log('subiendo archivos...')
        uploadCollectionItems(products,'products');
    }, 4000);
}