import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainApp from "./MainApp";
function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;