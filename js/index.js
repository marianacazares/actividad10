  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  import { 
          getFirestore,
          collection,
          addDoc,
          doc,
          setDoc
       } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

import { datos } from "./elementos.js";

  const firebaseConfig = {
  apiKey: "AIzaSyD0mWw-OTl97ag7ZaARE6Kpy3bYNxL01J0",
  authDomain: "testfrom-68298.firebaseapp.com",
  projectId: "testfrom-68298",
  storageBucket: "testfrom-68298.firebasestorage.app",
  messagingSenderId: "956256236665",
  appId: "1:956256236665:web:45fdbb45f62d6d63cfd0a8",
  measurementId: "G-F3T1MX76RG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

datos.boton.addEventListener("click",  async function(){
  try {
    const docRef = await addDoc(collection(db, "users"), {
        first: datos.nombre.value,
        last: datos.apellido.value,
        born: Number(datos.fecha.value)
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})

datos.boton2.addEventListener("click",async function() {
  await setDoc(doc(db, "cities", datos.id.value), {
     first: datos.nombre.value,
     last: datos.apellido.value,
     born: Number(datos.fecha.value)
});
})