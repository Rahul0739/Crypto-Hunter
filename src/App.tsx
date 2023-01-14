import HomePage from "./component/Banner";
// import Coins from "./component/Coins";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./component/Coin";
import { useState } from "react";

function App() {
  const [coinsDetails, setCoinsDetails] = useState();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage setCoinsDetails={setCoinsDetails} />}
          />
          <Route
            path="/coin/:id"
            element={<Coin coinsDetails={coinsDetails} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
