import { useEffect, useState } from "react";
import { CounterContext } from "./CounterContext";
import { jwtDecode } from "jwt-decode";

function Store({ children }) {
  let [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const session= jwtDecode(token)
      setUser(session.user)
    } 
  }, []);

  return (
    <CounterContext.Provider value={{ user, setUser}}>
      {children}
    </CounterContext.Provider>
  );
}

export default Store;

