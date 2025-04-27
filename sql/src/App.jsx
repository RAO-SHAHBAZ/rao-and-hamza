import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/SigunUp";
import Home from "./pages/Home";


function App() {
  return (
    <div>
        <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}>
        </Route>
        
        <Route path="/" element={<Home />}>
        </Route>
        
        <Route path="/signup" element={<Signup />}>
        </Route>
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
