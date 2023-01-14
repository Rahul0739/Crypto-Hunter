import HomePage from "./component/Banner";
// import Coins from "./component/Coins";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./component/Coin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
