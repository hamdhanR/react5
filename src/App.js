import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./component/Details";
import Login from "./component/Login";
import Start from "./component/Start";
import Booking from "./component/Booking";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="login" element={<Login />} />
          <Route path="booking" element={<Booking />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
