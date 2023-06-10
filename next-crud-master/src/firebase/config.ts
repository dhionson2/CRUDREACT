import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./ConfigFirebase";

// Inicialize o Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Agora você pode usar o Firestore
const db = firebase.firestore();

// Exemplo de uso: obter documentos de uma coleção
db.collection("suaColecao").get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.log("Erro ao obter documentos:", error);
  });
