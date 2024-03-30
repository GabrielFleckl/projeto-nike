import { Suspense, useLayoutEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";

import Navbar from "./components/Navbar";
import Expo from "./components/Expo";
import NikeLoader from "./components/NikeLoader";

function App() {
  const nike = useRef();

  const mobile =
    Math.min(window.screen.width, window.screen.height) < 768 ||
    navigator.userAgent.indexOf("Mobi") > -1;

  useLayoutEffect(() => {
    gsap.fromTo(
      nike.current,
      {
        opacity: 0,
      },
      { duration: 4, opacity: 0.3, ease: "power1", delay: 8 }
    );
  });

  return (
    <div className="h-screen w-screen flex overflow-hidden touch-none md:touch-auto justify-center bg-gradient-to-br relative from-[#BCC5CE] to-[#929EAD]">
      <Navbar />

      <p
        ref={nike}
        className={`${
          mobile
            ? "text-slate-500 absolute inset-0 flex place-items-center mb-20 rotate-90 text-[10em] tracking-[0.35em] antialiased"
            : "text-slate-500 ml-20 absolute inset-0 grid place-items-center text-[20em] tracking-[0.30em] antialiased"
        }`}
      >
        NIKE
      </p>

      <Canvas>
        <Suspense fallback={null}>
          <Expo />
        </Suspense>
      </Canvas>

      <NikeLoader />
    </div>
  );
}

export default App;

// bg-gradient-to-br from-[#8BC6EC] to-[#9599E2]

{
  /* <p className="text-slate-500 absolute text-[20em] tracking-[0.25em] antialiased top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">NIKE</p> */
}
