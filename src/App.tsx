import { APIProvider } from "./services/APIContext";
import Homepage from "./pages/Homepage";
import "./styles/style.css";

function App() {
  return (
    <APIProvider>
      <Homepage />
    </APIProvider>
  );
}

export default App;
