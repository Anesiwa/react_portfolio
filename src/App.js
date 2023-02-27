import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import { Navigation } from "./routes/navigation/navigation.component";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
