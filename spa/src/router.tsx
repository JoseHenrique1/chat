import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Registration } from "./pages/registration";
import { NotFound } from "./pages/not-found";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth/signin" element={<Login />}/>
        <Route path="/auth/signup" element={<Registration />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}