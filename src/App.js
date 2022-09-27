import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// views
import Home from "./Views/Home";
import Contacto from "./Views/Contacto";

// components
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App text-light">
    <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contacto" element={<Contacto />} />
       </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
