import Router from "next/router";
import { auth, db } from "utils/firebase";
import { defaultUserInfo } from "models/User";

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
            ...defaultUserInfo,
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
