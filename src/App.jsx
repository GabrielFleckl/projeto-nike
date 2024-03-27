import { Suspense } from "react";
import Expo from "./components/Expo";
import { Canvas } from "@react-three/fiber";
import { StatsGl, Loader } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#BCC5CE] to-[#929EAD]">
      <Canvas>
        <Suspense fallback={null}>
          <StatsGl />
          <Expo />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;

// bg-gradient-to-br from-[#8BC6EC] to-[#9599E2]

