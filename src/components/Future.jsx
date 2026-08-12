import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const FutureSection = () => {
  return (
    <section className="future" id="future">

      <div className="future-top">
        <span>04</span>

        <span className="future-label">
          LOOKING AHEAD
        </span>
      </div>


      <div className="future-layout">

        <div className="future-copy">

          <motion.h2
            initial={{
              opacity: 0,
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
            }}
          >
            BUILT FOR
            <br />
            <em>WHAT'S NEXT.</em>
          </motion.h2>


          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            Building on decades of experience,
            we continue to look ahead with
            purpose, responsibility and vision.
          </motion.p>

        </div>


        <motion.div
          className="future-video"
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 1,
          }}
        >

          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source
              src="/media/v2.mp4"
              type="video/mp4"
            />
          </video>


          <div className="future-video-label">
            <span>MUREC</span>

            <span>
              LOOKING AHEAD
            </span>
          </div>

        </motion.div>

      </div>


      <div className="future-bottom">

        <span>
          04 — THE FUTURE
        </span>

        <ArrowDownRight size={18} />

      </div>

    </section>
  );
};

export default FutureSection;