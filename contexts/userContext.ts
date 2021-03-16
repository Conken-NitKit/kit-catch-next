import { createContext } from "react";
import { DEFAULT_USER_INFO, IUser } from "models/User";

export const userContext = createContext<{
  user: IUser;
  setUser: (currentUser: IUser) => void;
}>({
  user: DEFAULT_USER_INFO,
  setUser: (_: IUser) => {},
});
