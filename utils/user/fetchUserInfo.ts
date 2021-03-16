import { instanceOfUser, IUser } from "models/User";
import { auth, db } from "utils/firebase";

export const fetchUserInfo = (setUser: (user: IUser) => void) => {
  const unSub = auth.onAuthStateChanged(async (fetchedUser) => {
    if (fetchedUser) {
      const userRef = db.collection("user").doc(fetchedUser.uid);
      await userRef
        .get()
        .then((doc) => {
          const fetchedUserInfo = doc.data();
          instanceOfUser(fetchedUserInfo) && setUser(fetchedUserInfo);
        })
        .catch((err) => console.log("Error getting documents", err));
    }
  });
  return { unSub: unSub };
};
