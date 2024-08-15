import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { APIProvider } from "./services/APIContext";
import Homepage from "./pages/Homepage";
import RestaurantDetails from "./pages/RestaurantDetails";
import "./styles/style.css";

function App() {
  return (
    <APIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/restaurant/:category/:id"
            element={<RestaurantDetails />}
          />
        </Routes>
      </Router>
    </APIProvider>
  );
}

export default App;
