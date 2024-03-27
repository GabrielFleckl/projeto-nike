import {
  PerspectiveCamera,
  Environment,
  PresentationControls,
  ContactShadows,
  ScrollControls,
  Scroll,
} from "@react-three/drei";

import { Model } from "./NikeShoes";

function Expo() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="#ffffff" position={[0, 3, 0]} intensity={1.5} />
      <ContactShadows
        position={[0, -0.485, 0]}
        opacity={0.25}
        scale={4}
        blur={1}
      />

      <ScrollControls pages={6} damping={1}>
        <PresentationControls
          global
          config={{ mass: 1, tension: 50 }}
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          speed={3}
          enabled={true}
        >
          <Model />
        </PresentationControls>
        <Scroll html>
          
        </Scroll>
      </ScrollControls>

      <Environment preset="sunset" blur={1} resolution={256} />
      <PerspectiveCamera makeDefault position={[0, -0.2, 1]} />
    </>
  );
}

export default Expo;
