import Router from "next/router";
import { DEFAULT_USER_INFO } from "models/User";
import { auth, db } from "utils/firebase";

export const signIn = async (
  email: string,
  password: string,
  setSignInError: (message: string) => void
) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = db.collection("user").doc(user.uid);
        !(await userRef.get()).exists &&
          userRef.set({
            ...DEFAULT_USER_INFO,
            uid: user.uid,
            email: email,
          });
      }
    });
    Router.push("/");
  } catch (error) {
    console.log(error.message);
    setSignInError(error.message);
  }
};
