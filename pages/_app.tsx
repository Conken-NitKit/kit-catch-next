import { useState } from "react";
import { AppProps } from "next/app";
import { DEFAULT_USER_INFO } from "models/User";
import { userContext } from "contexts/userContext";

export default function Root({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(DEFAULT_USER_INFO);
  return (
    <userContext.Provider value={{ user: user, setUser }}>
      <Component {...pageProps} />
    </userContext.Provider>
  );
}
