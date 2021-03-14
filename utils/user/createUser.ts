import Router from "next/router";
import { IUser } from "models/User";
import { auth, db } from "utils/firebase";

export const createUser = async (
  userInfo: IUser,
  password: string,
  setSignUpError: (message: string) => void
) => {
  try {
    await auth.createUserWithEmailAndPassword(userInfo.email, password);
    await auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = db.collection("user").doc(user.uid);
        !(await userRef.get()).exists &&
          userRef.set({
            ...userInfo,
            uid: user.uid,
          });
      }
    });
    Router.push("/");
  } catch (error) {
    console.log(error.message);
    setSignUpError(error.message);
  }
};
