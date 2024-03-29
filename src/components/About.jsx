import React, { Suspense } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-right: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: var(--tertiary-color);
`;

const Desc = styled.p`
  font-size: 24px;
  color: var(--branding-color);
`;

const Button = styled.button`
  background-color: var(--tertiary-color);
  color: var(--font-color);
  font-weight: bold;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--quad-color);
    color: var(--light-branding-color);
  }
`;

const About = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatIDo>
          <Desc>
            a creative group of designers and developers with a passion for the
            arts.
          </Desc>
          <Button>
            {" "}
            <a href="/portfolio">See my Work</a>
          </Button>
        </Right>
      </Container>
    </Section>
  );
};
export default About;
