import fire from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAA1Xx_x0rhrpwGgeGqbBdAg4hYJkfOQz4",
  authDomain: "react-fire-auth-520cd.firebaseapp.com",
  projectId: "react-fire-auth-520cd",
  storageBucket: "react-fire-auth-520cd.appspot.com",
  messagingSenderId: "152917101897",
  appId: "1:152917101897:web:ab533ae568bb312baa9e98",
};
export default fire.initializeApp(firebaseConfig);
