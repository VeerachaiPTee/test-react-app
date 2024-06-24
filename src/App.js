import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageRouter from "./Pages/routes/Router";

function App() {
  return (
    <Router>
      <Navbar />
      <PageRouter />
    </Router>
  );
}

export default App;
