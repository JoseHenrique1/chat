import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useCheckToken() {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = Cookies.get("token")
    if(!token){
      navigate("/auth/signin")
      return
    }
  },[])
}