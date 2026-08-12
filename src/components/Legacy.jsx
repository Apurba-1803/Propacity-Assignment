import { motion } from "framer-motion";

const Legacy = () => {
  return (
    <section id="legacy" className="legacy-section">

      {/* Background video */}
      <div className="legacy-video">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/media/m1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark cinematic overlay */}
      <div className="legacy-overlay" />

      {/* EVERYTHING BELOW MUST SIT ABOVE VIDEO */}
      <div className="legacy-content">

  {/* Section label */}
  <motion.div
    className="legacy-label"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 0.8 }}
  >
    <span>01</span>
    <span className="label-line" />
    <span>OUR LEGACY</span>
  </motion.div>


  {/* Main heading */}
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    THE LEGACY
    <br />
    <em>BEYOND COMPARE.</em>
  </motion.h2>


  {/* Description */}
  <motion.div
    className="legacy-description"
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
    }}
  >
    <p>
      For over seven decades, we stood for perseverance,
      integrity, and nation-building through enterprise.
      Every step was guided by one oath: quality before
      profit, trust before everything.
    </p>

    <a href="#history" className="legacy-history-link">
      <span>OUR HISTORY</span>
      <span>→</span>
    </a>
  </motion.div>

</div>

    </section>
  );
};

export default Legacy;