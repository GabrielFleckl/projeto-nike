import {
  PerspectiveCamera,
  Environment,
  PresentationControls,
  ContactShadows,
  ScrollControls,
} from "@react-three/drei";

import { Model } from "./NikeShoes";
import Overlay from "./Overlay";

function Expo() {

  // const mobile = window.innerWidth < 500

  const mobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;


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

      <ScrollControls pages={mobile ? 3.2 : 4} damping={0.7}>
        <PresentationControls
          global
          config={{ mass: 1, tension: 50 }}
          rotation={[0, 0, 0]}
          polar={[0, 0]}
          speed={3}
          enabled={true}
          azimuth={[-Infinity, Infinity]}
          snap
        >
          <Model />
        </PresentationControls>
        <Overlay />
        
      </ScrollControls>

      <Environment preset="sunset" blur={1} resolution={256} />
      <PerspectiveCamera makeDefault position={[-0.050, -0.2, 1]} fov={mobile ? 65 : 45} />
    </>
  );
}

export default Expo;
