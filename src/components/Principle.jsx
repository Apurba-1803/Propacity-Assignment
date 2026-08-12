import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "TRUST",
  },
  {
    number: "02",
    title: "QUALITY",
  },
  {
    number: "03",
    title: "TRANSPARENCY",
  },
  {
    number: "04",
    title: "INNOVATION",
  },
];

const PrinciplesSection = () => {
  return (
    <section className="principles" id="principles" className="principles-section">

      <div className="principles-top">
        <span>02</span>

        <span className="principles-label">
          LIVING BY PRINCIPLES
        </span>
      </div>

      <div className="principles-heading">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          LIVING BY
          <br />
          <em>PRINCIPLES.</em>
        </motion.h2>

        <p>
          Our journey has always been guided by
          principles that define how we create,
          collaborate and grow.
        </p>
      </div>

      <div className="principles-content">

        <div className="principles-list">
          {principles.map((principle, index) => (
            <motion.div
              className="principle-item"
              key={principle.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <span className="principle-number">
                {principle.number}
              </span>

              <span className="principle-title">
                {principle.title}
              </span>

              <span className="principle-arrow">
                <ArrowUpRight size={17} />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="principles-video"
          initial={{
            opacity: 0,
            scale: 0.96,
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
              src="/media/Vid2.mp4"
              type="video/mp4"
            />
          </video>

          <div className="principles-video-label">
            <span>MUREC</span>
            <span>VALUES / 02</span>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

export default PrinciplesSection;