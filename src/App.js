import "./App.css";
import Footer from "./components/footer/footer.component";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url("./img/background_2.png");
  color: var(--light-branding-color);
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 10px;
`;

export default function App() {
  return (
    <Container className="App">
      <Hero />
      <About />
      <Work />
      <Contact />
      <Footer />
    </Container>
  );
}
