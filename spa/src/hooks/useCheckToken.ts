import Cookies from "js-cookie";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useCheckToken() {
  
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const token = Cookies.get("token")
    const { pathname } = location


    if (!token && pathname === "/") {
      navigate("/auth/signin")
      return
    }
    if (token && pathname === "/auth/signin") {
      navigate("/")
      return
    }
    if (token && pathname === "/auth/signup") {
      navigate("/")
      return
    }
  }, [])
}