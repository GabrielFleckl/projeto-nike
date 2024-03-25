import React from "react";
import Expo from "./components/Expo";
import { Canvas } from "@react-three/fiber";
import { StatsGl } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <StatsGl />
        <Expo />
      </Canvas>
    </div>
  );
}

export default App;
