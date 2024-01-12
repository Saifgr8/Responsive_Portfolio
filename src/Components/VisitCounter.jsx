import React, { useEffect, useState } from "react";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
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

const VisitCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const incrementCount = async () => {
      const counterRef = doc(db, "counters", "visits");

      try {
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
      } catch (error) {
        console.error("Error updating visit counter:", error);
      }
    };

    incrementCount();
  }, [db]);

  return (
    <div>
      Profile Visits: <span className="text-lg ">{count} 🤩</span>
    </div>
  );
};

export default VisitCounter;
