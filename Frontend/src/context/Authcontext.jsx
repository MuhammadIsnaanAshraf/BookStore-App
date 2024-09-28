import { createContext, useContext, useState } from "react";

const Authcontext = createContext();

export default function Authprovider({ children }) {
  const initialUser = localStorage.getItem("User");
  const [authUser, setAuthUser] = useState(
    initialUser ? JSON.parse(initialUser) : undefined
  );

  return (
    <Authcontext.Provider value={[authUser, setAuthUser]}>
      {children}
    </Authcontext.Provider>
  );
}

export const useAuth = () => {
  return useContext(Authcontext); // Return the context value
};
