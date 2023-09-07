import React, { createContext, useContext, useState, useEffect } from "react";
import supabase from "../lib/supabase";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    async function fetchCurrentUser() {
      const currentUser = await supabase.auth.getUser();
      console.log("Current User from Supabase:", currentUser?.data?.user);
      setUser(currentUser?.data?.user);
      setIsInitialized(true);
    }

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, isInitialized }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
