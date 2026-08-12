import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Background Motion */}
      <div className="hero-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/media/home.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark cinematic overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">

        {/* Meta */}
        <motion.div
          className="hero-meta"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <span>MUREC</span>

          <span className="meta-line" />

          <span>EST. 1950s</span>
        </motion.div>


        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 70,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          THE LEGACY
          <br />

          <em>BEYOND</em>

          <br />

          COMPARE
        </motion.h1>


        {/* Bottom Content */}
        <motion.div
          className="hero-footer"
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
        >

          {/* Description */}
          <div className="hero-description">
            <span>78+ YEARS OF</span>

            <p>
              Perseverance · Integrity ·
              Nation-building
            </p>
          </div>


          {/* Explore Bubble */}
          <div className="hero-explore">
            <span className="hero-explore-label">
              EXPLORE
            </span>

            <a
              href="#legacy"
              className="hero-explore-bubble"
              aria-label="Explore legacy"
            >
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowDown
                  size={17}
                  strokeWidth={1.1}
                />
              </motion.div>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Hero;