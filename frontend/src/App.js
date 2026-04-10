import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainApp from "./MainApp";
import Affiliations from "./pages/Affiliations"; 
function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;