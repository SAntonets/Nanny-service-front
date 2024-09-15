// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQsKoV-hWMETTbAa_MEZLHXN-zSQ3zWE",
  authDomain: "nanny-a18ca.firebaseapp.com",
  projectId: "nanny-a18ca",
  storageBucket: "nanny-a18ca.appspot.com",
  messagingSenderId: "826111812261",
  appId: "1:826111812261:web:95bcb588050fb00c83e34c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Get a list of nannyes from your database
async function addNanny(nanny) {
  try {
  const docRef = await addDoc(collection(db, "nannyes"), {
 name: nanny.name,
    avatar_url: nanny.avatar_url,
    birthday: nanny.birthday,
    experience: nanny.experience,
    reviews: nanny.reviews,
    education: nanny.education,
    kids_age: nanny.kids_age,
    price_per_hour: nanny.price_per_hour,
    location: nanny.location,
    about: nanny.about,
    characters: nanny.characters,
    rating: nanny.rating,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
}

export function addNannyes(nannyesCollection) {
  nannyesCollection.map(nanny => addNanny(nanny)
  )
}


const querySnapshot = await getDocs(collection(db, "nannyes"));
export const babysits = querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});