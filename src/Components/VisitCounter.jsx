import React, { useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "./curve.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDMiI-11_jVL4Ynvw5ySns4B-klFZsNmVE",
  authDomain: "portfolio-3e526.firebaseapp.com",
  projectId: "portfolio-3e526",
  storageBucket: "portfolio-3e526.appspot.com",
  messagingSenderId: "818505789727",
  appId: "1:818505789727:web:8705b2a62ca646887cc02a",
  measurementId: "G-PBSSFR3KSK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Ping = () => {
  return (
    <div className="flex space-x-2 mt-5 pl-3">
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
      <div className="w-2 h-2 bg-gray-600 rounded-full animate-ping"></div>
    </div>
  );
};

const VisitCounter = () => {
  const [count, setCount] = useState(0);

 useEffect(() => {
   const fetchIPAndIncrementCount = async () => {
     try {
       // Get user's IP address from ipify
       const { ip } = await fetch("https://api.ipify.org?format=json").then(
         (response) => response.json()
       );

       const currentDate = new Date().toLocaleDateString("en-US", {
         weekday: "short",
         year: "numeric",
         month: "short",
         day: "numeric",
       });

       const compoundKey = `${currentDate}-${ip}`;
       const userRef = doc(db, "users", compoundKey);

       // Check if the user exists in Firestore
       const userDoc = await getDoc(userRef);

       if (!userDoc.exists()) {
         // If user doesn't exist, create the user with the current date and IP address
         await setDoc(userRef, { date: compoundKey, ip, visited: true });

         // Update the count in Firestore
         const counterRef = doc(db, "counters", "visits");
         const docSnapshot = await getDoc(counterRef);

         if (docSnapshot.exists()) {
           const currentCount = docSnapshot.data().count;
           setCount(currentCount);
         } else {
           // Create the counter if it doesn't exist
           await setDoc(counterRef, { count: 0 });
         }

         // Increment the count
         await updateDoc(counterRef, { count: increment(1) });
         setCount((prevCount) => prevCount + 1);
       } else {
         // If the user has already visited, fetch the latest count
         const docSnapshot = await getDoc(doc(db, "counters", "visits"));
         const currentCount = docSnapshot.data().count;
         setCount(currentCount);
       }
     } catch (error) {
       console.error("Error updating visit counter:", error);
     }
   };

   fetchIPAndIncrementCount();
 }, [db]);


  return (
    <div className="flex pt-10 relative flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-blue-200 p-4 rounded-t-full ">
      <span style={{ fontFamily: "monospace", fontSize: "2em" }}>
        Profile Visits 🤩
      </span>
      <span
        style={{ fontFamily: "monospace", position: "relative" }}
        className="text-7xl p-2 text-blue-500"
      >
        {count ? (
          <>
            <div className="txt">{count}</div>
          </>
        ) : (
          <Ping />
        )}
      </span>
    </div>
  );
};

export default VisitCounter;
