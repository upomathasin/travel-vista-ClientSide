import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import Swal from "sweetalert2";
const auth = getAuth(app);

export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cart, setCart] = useState([]);

  function myCart() {
    if (user) {
      fetch(`https://travel-vista-server-side.vercel.app/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCart(data));
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      myCart();
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  };

  const logOut = async () => {
    return signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Log out successful !",
          icon: "success",
        });
      })
      .catch((err) => console.log(err.message));
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const value = {
    cart: cart,
    myCart: myCart,
    user: user,
    loading: loading,
    createUser: createUser,
    signInUser: signInUser,
    updateUserProfile: updateUserProfile,
    logOut: logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
