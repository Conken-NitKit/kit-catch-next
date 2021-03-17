import Router from "next/router";
import { auth, db } from "utils/firebase";
import "firebase/firestore";

export const createUser = async (
  userName: string,
  classId: string,
  email: string,
  password: string,
  setSignUpError: (message: string) => void
) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = db.collection("user").doc(user.uid);
        !(await userRef.get()).exists &&
          userRef.set({
            uid: user.uid,
            classId: classId,
            displayName: userName,
            email: email,
          });
      }
    });
    Router.push("/settings");
  } catch (error) {
    console.log(error.message);
    setSignUpError(error.message);
  }
};
