import axios from "axios";

const apiurl = import.meta.env.VITE_API

export const api = axios.create({
  baseURL: apiurl,
})

