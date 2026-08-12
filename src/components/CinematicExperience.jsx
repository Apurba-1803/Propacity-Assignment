import { useEffect, useRef, useState } from "react";
import CinematicSection from "./CinematicSection";
import cinematicSections from "../data/cinematicSection";

const CinematicExperience = () => {
  const wrapperRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    const scrollContainer =
      document.querySelector(".snap-container");

    if (!scrollContainer) {
      console.log("snap-container not found");
      return;
    }

    let animationFrame;

    const updateSection = () => {
      /*
       * scrollTop = how far the main page has scrolled.
       *
       * wrapper.offsetTop = where the cinematic
       * experience starts inside that scrolling area.
       */
      const scrolled =
        scrollContainer.scrollTop -
        wrapper.offsetTop;

      /*
       * The cinematic experience is 400vh.
       *
       * The viewport itself is 100vh.
       *
       * Therefore the user has 300vh of actual
       * scrolling distance while the viewport stays sticky.
       */
      const scrollDistance =
        wrapper.offsetHeight -
        scrollContainer.clientHeight;

      if (scrollDistance > 0) {
        const progress = Math.max(
          0,
          Math.min(
            scrolled / scrollDistance,
            0.999999
          )
        );

        const newIndex = Math.min(
          Math.floor(
            progress *
              cinematicSections.length
          ),
          cinematicSections.length - 1
        );

        setActiveIndex((currentIndex) => {
          if (currentIndex !== newIndex) {
            console.log(
              "Cinematic section:",
              newIndex + 1
            );
          }

          return newIndex;
        });
      }

      animationFrame =
        requestAnimationFrame(updateSection);
    };

    animationFrame =
      requestAnimationFrame(updateSection);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="cinematic-wrapper"
    >
      <div className="cinematic-viewport">
        {cinematicSections.map(
          (section, index) => (
            <CinematicSection
              key={section.number}
              {...section}
              active={
                index === activeIndex
              }
            />
          )
        )}
      </div>
    </section>
  );
};

export default CinematicExperience;