import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";


export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/auth/signin" element={<Login />}/>
        <Route path="/auth/signup" element={<div>a</div>}/>
        <Route path="*" element={<div>erro</div>}/>
      </Routes>
    </BrowserRouter>
  );
}