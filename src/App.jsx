import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Checkout from "./pages/Checkout";
import UndefinedPage from "./pages/UndefinedPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sepet" element={<Checkout />} />
          <Route path="*" element={<UndefinedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
