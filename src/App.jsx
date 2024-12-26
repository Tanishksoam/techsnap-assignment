import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SmoothScroll from "./component/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const ScrollColorChange = () => {
  const [pathLength, setPathLength] = useState(0);
  useEffect(() => {
    const displaceDiv = document.querySelector(".follow-mouse");

    // Update displacement on mouse move
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;

      // Adjust translation
      const xDisplacement = (clientX - window.innerWidth / 2) * 0.05; // Sensitivity factor
      const yDisplacement = (clientY - window.innerHeight / 2) * 0.05;

      // Apply displacement
      displaceDiv.style.transform = `translate(${xDisplacement}px, ${yDisplacement}px)`;
    });
  }, []);
  useEffect(() => {
    const path = document.querySelector(".svg-path");
    if (path) {
      const totalLength = path.getTotalLength();
      setPathLength(totalLength);

      gsap.fromTo(
        path,
        { strokeDashoffset: 0 },
        {
          strokeDashoffset: totalLength,
          scrollTrigger: {
            trigger: path.closest(".section"),
            start: "top 85%",
            end: "+=600",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray(".section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onEnter: () =>
          gsap.to("body", {
            backgroundColor: section.dataset.bgColor,
            duration: 1,
          }),
        onEnterBack: () =>
          gsap.to("body", {
            backgroundColor: section.dataset.bgColor,
            duration: 1,
          }),
      });
    });
  }, []);

  return (
    <SmoothScroll>
      <div className=" font-mono ">
        <div
          className="section flex flex-col justify-center items-center gap-2"
          data-bg-color="#f9e1ee"
          style={{ height: "100vh" }}
        >
          <div className=" w-full text-6xl self-stretch text-center font-extrabold follow-mouse ">
            Assignment Techsnap
          </div>
        </div>
        <div
          className="section section2"
          data-bg-color="#e0f0ff"
          style={{ height: "100vh" }}
        >
          <div className="w-1440 flex justify-center items-center gap-2 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1217"
              height="1209"
              viewBox="0 0 1217 1209"
              fill="none"
              className="w-full h-[110vh] absolute top-0 left-0"
            >
              <path
                d="M1212.5 1204.5V1045.5C1212.5 1022.86 1194.14 1004.5 1171.5 1004.5H46C23.3563 1004.5 5 986.144 5 963.5V238.5C5 215.856 23.3563 197.5 46 197.5H633C655.644 197.5 674 179.144 674 156.5V5"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1217"
              height="1209"
              viewBox="0 0 1217 1209"
              fill="none"
              className="w-full h-[110vh] absolute top-0 left-0"
            >
              <path
                d="M1212.5 1204.5V1045.5C1212.5 1022.86 1194.14 1004.5 1171.5 1004.5H46C23.3563 1004.5 5 986.144 5 963.5V238.5C5 215.856 23.3563 197.5 46 197.5H633C655.644 197.5 674 179.144 674 156.5V5"
                stroke="white"
                strokeWidth="9"
                strokeLinecap="round"
                className="svg-path"
                style={{
                  transformOrigin: "0px 0px",
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  strokeDasharray: pathLength,
                }}
              />
            </svg>
          </div>
        </div>
        <div
          className="section"
          data-bg-color="#ffeddf"
          style={{ height: "100vh" }}
        >
          <h1>Section 3</h1>
        </div>
      </div>
    </SmoothScroll>
  );
};

export default ScrollColorChange;
