import { useProgress } from "@react-three/drei";
import NikeLogo from "../assets/logo_nike.svg";

import { gsap } from "gsap";
import { useRef } from "react";

function NikeLoader() {
  const { active } = useProgress();

  const nikeLogo = useRef();

  gsap.to(nikeLogo.current, {
    opacity: 0,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  return (
    <div
      className={`${
        active ? "" : "opacity-0 pointer-events-none"
      } absolute bg-[#8F9BAB] w-screen z-20 grid place-items-center `}
    >
      <img ref={nikeLogo} className="w-96 h-screen" src={NikeLogo} alt="" />
    </div>
  );
}

export default NikeLoader;
