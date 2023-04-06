import "./App.css";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation.NEW";
import AboutPage from "./routes/about/about-page";
import ContactPage from "./routes/contact/contact-page";
import Portfolio from "./routes/portfolio/portfolio";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: var(--background-color);
  color: var(--light-branding-color);
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function App() {
  return (
    <Container className="App">
      <Navigation />
      <div className="appWrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Container>
  );
}
