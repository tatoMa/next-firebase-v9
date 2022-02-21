import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};
initializeApp(firebaseConfig);

export default function Home() {
  const [users, setUsers] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    const collectionRef = collection(db, "users");
    onSnapshot(collectionRef, (onSnapshot) => {
      setUsers(onSnapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div>
      <h1>title</h1>
      {users.map((user) => (
        <p key={user.name}>{user.name}</p>
      ))}
    </div>
  );
}
