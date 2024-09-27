import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import { getDoc, doc, updateDoc, deleteDoc, query, where, getDocs, limit, startAfter,  } from 'firebase/firestore';

export async function addNanny(nanny) {
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




// Отримання масиву всіх нянь
export async function getAllNannies() {
  try {
    const querySnapshot = await getDocs(collection(db, "nannyes"));
    const nannies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return nannies;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return []; // повертаємо порожній масив у разі помилки
  }
}

// Отримання однієї няні за ID
export async function getNannyById(nannyId) {
  try {
    const docRef = doc(db, "nannyes", nannyId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    return null;
  }
}

// Редагування няні
export async function updateNanny(nannyId, updatedData) {
  try {
    const docRef = doc(db, "nannyes", nannyId);
    await updateDoc(docRef, updatedData);
    console.log("Document updated with ID: ", nannyId);
  } catch (error) {
    console.error("Error updating document: ", error);
  }
}

// Видалення няні
export async function deleteNanny(nannyId) {
  try {
    const docRef = doc(db, "nannyes", nannyId);
    await deleteDoc(docRef);
    console.log("Document deleted with ID: ", nannyId);
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

// Отримання нянь за певними критеріями (наприклад, за місцем розташування)
export async function getNanniesByLocation(location) {
  try {
    const q = query(collection(db, "nannyes"), where("location", "==", location));
    const querySnapshot = await getDocs(q);
    const nannies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return nannies;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
}

// Отримання нянь за рейтингом
export async function getNanniesByRating(rating) {
  try {
    const q = query(collection(db, "nannyes"), where("rating", ">=", rating));
    const querySnapshot = await getDocs(q);
    const nannies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return nannies;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
}


const nanniesPerPage = 3; // Кількість нянь на сторінці
let currentPage = 1; // Поточний номер сторінки
let lastDoc = null; // Зберігає останній документ з попередньої сторінки

// Функція для отримання нянь
export async function getNannies() {
  try {
    let q;
    if (lastDoc) {
      q = query(collection(db, "nannyes"), startAfter(lastDoc), limit(nanniesPerPage));
    } else {
      q = query(collection(db, "nannyes"), limit(nanniesPerPage));
    }
    const querySnapshot = await getDocs(q);
    const nannies = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];// Зберігаємо останній документ
    return nannies;
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
}


