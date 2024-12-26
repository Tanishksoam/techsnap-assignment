import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SmoothScroll from "./component/SmoothScroll";

gsap.registerPlugin(ScrollTrigger);

const ScrollColorChange = () => {
  const [pathLength, setPathLength] = useState(0);

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
            start: "top 80%",
            end: "+=500",
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
      <div>
        <div
          className="section flex flex-col justify-center items-center gap-2"
          data-bg-color="#f9e1ee"
          style={{ height: "100vh" }}
        >
          <h1>Section 1</h1>
        </div>
        <div
          className="section section2"
          data-bg-color="#e0f0ff"
          style={{ height: "100vh" }}
        >
          <h1>Section 2</h1>
          <div className="w-1140 flex justify-center items-center gap-2 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1098"
              height="835"
              viewBox="0 0 1098 835"
              fill="none"
              className="w-full h-[90vh] absolute top-0 left-0 "
            >
              <path
                d="M1093.5 830V771.5C1093.5 748.856 1075.14 730.5 1052.5 730.5H45.5C22.8563 730.5 4.5 712.144 4.5 689.5V328C4.5 305.356 22.8563 287 45.5 287H514C536.644 287 555 268.644 555 246V5"
                stroke="black"
                strokeWidth="9"
                strokeLinecap="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1098"
              height="835"
              viewBox="0 0 1098 835"
              fill="none"
              className="w-full h-[90vh] absolute top-0 left-0"
            >
              <path
                d="M1093.5 830V771.5C1093.5 748.856 1075.14 730.5 1052.5 730.5H45.5C22.8563 730.5 4.5 712.144 4.5 689.5V328C4.5 305.356 22.8563 287 45.5 287H514C536.644 287 555 268.644 555 246V5"
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
