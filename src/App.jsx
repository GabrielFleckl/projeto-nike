import { Suspense, useLayoutEffect, useRef } from "react";
import Expo from "./components/Expo";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import Navbar from "./components/Navbar";

import { gsap } from "gsap";

function App() {
  const nike = useRef();
  const mobile = window.innerWidth < 500;

  useLayoutEffect(() => {
    gsap.fromTo(
      nike.current,
      {
        opacity: 0,
      },
      { duration: 4, opacity: 0.3, ease: "power1", delay: 3 }
    );
  });

  return (
    <div className="h-screen w-full bg-gradient-to-br relative from-[#BCC5CE] to-[#929EAD]">
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
          {/* <StatsGl /> */}
          <Expo />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
}

export default App;

// bg-gradient-to-br from-[#8BC6EC] to-[#9599E2]

{
  /* <p className="text-slate-500 absolute text-[20em] tracking-[0.25em] antialiased top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">NIKE</p> */
}
