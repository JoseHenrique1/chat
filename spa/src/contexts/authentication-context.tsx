import { createContext, useEffect, useState } from 'react';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AuthenticationContextType, AuthenticationProviderProps, user } from '../interfaces/contexts';
import { AxiosResponse } from 'axios';
import { api } from '../utils/axios';


export const AuthenticationContext = createContext({} as AuthenticationContextType);

export function AuthenticationContextProvider({ children }: AuthenticationProviderProps) {
  const myapi = api;
  myapi.defaults.headers.common.Authorization = `Bearer ${Cookies.get("token")}`
  const navigate = useNavigate()
  const [user, setUser] = useState<user|null>(null)

  function handleLogout() {
    Cookies.remove("token")
    setUser({
      email: "",
      name: ""
    })
    navigate("/auth/signin")
  }

  async function handleGetUser() {
    const user: AxiosResponse<user> = await myapi.get(`/auth/user`)
    setUser(user.data)
  }

  useEffect(() => {
    handleGetUser()
    return () => {
      setUser({
        email: "",
        name: ""
      })
    }
  }, [])

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        handleLogout,
        api: myapi
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};