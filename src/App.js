import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import { Navigation } from "./components/navigation/navigation.component";
import Footer from "./components/footer/footer.component";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
