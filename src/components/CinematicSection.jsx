import { motion } from "framer-motion";

const CinematicSection = ({
  number,
  label,
  title,
  italicLines,
  description,
  buttonText,
  video,
  active,
}) => {
  return (
    <section
      className={`cinematic-section ${
        active ? "cinematic-section-active" : ""
      }`}
    >
      {/* Background video */}
      <div className="cinematic-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      {/* Dark cinematic overlay */}
      <div className="cinematic-overlay" />

      {/* Content */}
      <div className="cinematic-content">

        {/* Section label */}
        <motion.div
          className="cinematic-label"
          initial={{ opacity: 0, y: 20 }}
          animate={
            active
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          transition={{
            duration: 0.7,
          }}
        >
          <span>{number}</span>

          <span className="label-line" />

          <span>{label}</span>
        </motion.div>

        {/* Main content */}
        <div className="cinematic-main">

         <motion.h2
  initial={{
    opacity: 0,
    y: 60,
  }}
  animate={
    active
      ? {
          opacity: 1,
          y: 0,
        }
      : {
          opacity: 0,
          y: 60,
        }
  }
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  {title.map((line, index) => (
    <span
      key={index}
      className={italicLines?.includes(index) ? "italic-line" : ""}
    >
      {line}
    </span>
  ))}
</motion.h2>

          <motion.div
            className="cinematic-description"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={
              active
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {
                    opacity: 0,
                    y: 30,
                  }
            }
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p>{description}</p>

            {buttonText && (
              <a href="#">
                {buttonText}
                <span>→</span>
              </a>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CinematicSection;