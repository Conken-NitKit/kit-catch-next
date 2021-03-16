import Router from "next/router";
import { auth } from "utils/firebase";

export const signOut = async () => {
  try {
    await auth.signOut();
    Router.push("signin");
  } catch (error) {
    alert(error.message);
  }
};
