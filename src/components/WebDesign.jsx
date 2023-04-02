import Cube from "./Cube";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const WebDesign = () => {
  return (
    <div>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Cube />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default WebDesign;