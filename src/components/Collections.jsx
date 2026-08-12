import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const CollectionSection = () => {
  return (
    <section className="collection" id="collection" className="collection-section">

      <div className="collection-top">

        <span>03</span>

        <span className="collection-label">
          MUREC COLLECTION
        </span>

      </div>


      <div className="collection-heading">

        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
          }}
        >
          MUREC
          <br />
          <em>COLLECTION.</em>
        </motion.h2>


        <motion.p
          initial={{
            opacity: 0,
            y: 30,
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
          A collection shaped by vision,
          quality and a commitment to
          creating lasting value.
        </motion.p>

      </div>


      <div className="collection-visual">

        <motion.div
          className="collection-video"
          initial={{
            opacity: 0,
            scale: 0.92,
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
            duration: 1.2,
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
              src="/media/v3.mp4"
              type="video/mp4"
            />
          </video>


          <div className="collection-video-overlay">

            <span>
              MUREC / 03
            </span>

            <span>
              COLLECTION
            </span>

          </div>

        </motion.div>

      </div>


      <div className="collection-footer">

        <span className="collection-caption">
          CRAFTED WITH PURPOSE
        </span>


        <a
          href="#contact"
          className="collection-link"
        >
          Explore Collection

          <ArrowUpRight size={16} />

        </a>

      </div>

    </section>
  );
};

export default CollectionSection;