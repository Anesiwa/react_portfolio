import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";

const Container = styled.div`
  height: 100vh;
  width: 100;
  scroll-snap-align: center;
`;

const Test = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Cube />
      </Canvas>
    </Container>
  );
};

export default Test;
