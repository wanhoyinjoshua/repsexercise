// Import Firebase libraries
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc,collection, getDocs, query, orderBy, limit, startAfter, doc, getDoc } from 'firebase/firestore';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDvf4m01n4uzYhQ7ZNCV96PKISHhRJgEtQ",
    authDomain: "reps-d1b65.firebaseapp.com",
    projectId: "reps-d1b65",
    storageBucket: "reps-d1b65.appspot.com",
    messagingSenderId: "64064927654",
    appId: "1:64064927654:web:c0a55f9b458adbbe698167",
    measurementId: "G-D764MXGR0M"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to fetch and display users (with pagination)
export async function fetchUsers(startAfterDoc = null) {
  const usersRef = collection(db, 'users');
  let q;

  if (startAfterDoc) {
    q = query(usersRef, orderBy('score', 'desc'), startAfter(doc(db, 'users', startAfterDoc.id)), limit(10)); // Fetch 10 users at a time
  } else {
    q = query(usersRef, orderBy('score', 'desc'), limit(1000)); // Fetch initial 10 users
  }

  const querySnapshot = await getDocs(q);

  var list=[]
 
  // Display users in your UI
  querySnapshot.forEach((doc) => {
    console.log(doc.id, ' => ', doc.data());
    list.push( doc.data())
    // Update your UI with user data (username, score)
  });
  return list
  // Check if there are more users to load
  if (querySnapshot.docs.length > 0) {
    const lastDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
    // Enable "Load More" button or similar UI element
    // When clicked, call fetchUsers(lastDoc) to load the next page
  } else {
    // Disable "Load More" button or indicate that there are no more users
  }
}


export async function addStat(username,score){
    const usersCollectionRef = collection(db, 'users'); // Replace 'users' with your collection name
    const newUserData = {
        username: username,
        score: score,
        date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
        // Add other fields as needed
      };

      try {
        const docRef = await addDoc(usersCollectionRef, newUserData);
        console.log('Document written with ID: ', docRef.id);
        return docRef; // Returns the document reference on success
      } catch (error) {
        console.error('Error adding document: ', error);
        return error; // Returns the error object on failure
      }
    addDoc(usersCollectionRef, newUserData)
  .then((docRef) => {
    console.log('Document written with ID: ', docRef.id);
    return docRef
  })
  .catch((error:Error) => {
    console.error('Error adding document: ', error);
    return error
  });

}

// Initial fetch

