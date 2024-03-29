import { useProgress } from "@react-three/drei";

import { gsap } from "gsap";
import { useRef } from "react";

function NikeLoader() {
  const { active } = useProgress();

  const nikeLogo = useRef();
  const nikeLogoContainer = useRef()

  gsap.to(nikeLogo.current, {
    opacity: 0,
    duration: 0.7,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
    delay:2
  });

  gsap.to(nikeLogoContainer.current, {
    opacity: 0,
    duration: 1,
    delay:5,
  });

  return (
    <div ref={nikeLogoContainer}
      className={`${
        active ? "" : "pointer-events-none "
      } absolute bg-[#8F9BAB] w-screen h-screen z-20 grid place-items-center `}
    >
      <div className="w-[350px]">
        <svg ref={nikeLogo} width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="gradientFill">
            <stop offset="100%" stop-color="white" />
            <stop offset="100%" stop-color="black" />
          </linearGradient>
          <mask id="mask">
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#gradientFill)"
            >
              <animate
                attributeName="width"
                from="0%"
                to="100%"
                dur="2s"
                fill="black"
              />
            </rect>
          </mask>
          <path
            id="outline"
            d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"
            fill="white"
            
          />
          <path
            d="M42.741 71.477c-9.881 11.604-19.355 25.994-19.45 36.75-.037 4.047 1.255 7.58 4.354 10.256 4.46 3.854 9.374 5.213 14.264 5.221 7.146.01 14.242-2.873 19.798-5.096 9.357-3.742 112.79-48.659 112.79-48.659.998-.5.811-1.123-.438-.812-.504.126-112.603 30.505-112.603 30.505a24.771 24.771 0 0 1-6.524.934c-8.615.051-16.281-4.731-16.219-14.808.024-3.943 1.231-8.698 4.028-14.291z"
            fill="black"
            mask="url(#mask)"
          />
        </svg>
      </div>
    </div>
  );
}

export default NikeLoader;

// hidden overflow-hidden opacity-0
