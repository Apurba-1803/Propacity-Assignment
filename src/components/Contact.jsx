import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="contact" id="contact">

      {/* Section label */}
      <motion.div
        className="contact-top"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span>05</span>

        <span className="contact-top-line" />

        <span>CONTACT</span>
      </motion.div>


      {/* Main statement */}
      <motion.div
        className="contact-heading"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <h2>
          LET'S BUILD
          <br />
          <em>WHAT COMES NEXT.</em>
        </h2>
      </motion.div>


      {/* Contact information */}
      <div className="contact-details">

        {/* Address */}
        <motion.div
          className="contact-detail"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="contact-detail-number">
            01
          </span>

          <div>
            <span className="contact-detail-label">
              CORPORATE ADDRESS
            </span>

            <p>
              Madhusudan, 2nd Floor, Riana Towers, 51-52,
              <br />
              Noida Sector 136, Uttar Pradesh - 201301
            </p>
          </div>
        </motion.div>


        {/* Email */}
        <motion.a
          href="mailto:info@murec.com"
          className="contact-detail contact-detail-link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="contact-detail-number">
            02
          </span>

          <div>
            <span className="contact-detail-label">
              EMAIL
            </span>

            <p>
              info@murec.com
            </p>
          </div>

          <span className="contact-detail-arrow">
            <ArrowUpRight size={17} strokeWidth={1.2} />
          </span>
        </motion.a>


        {/* Phone */}
        <motion.a
          href="tel:+919717773229"
          className="contact-detail contact-detail-link"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span className="contact-detail-number">
            03
          </span>

          <div>
            <span className="contact-detail-label">
              PHONE NUMBER
            </span>

            <p>
              +91 97177 73229
            </p>
          </div>

          <span className="contact-detail-arrow">
            <ArrowUpRight size={17} strokeWidth={1.2} />
          </span>
        </motion.a>

      </div>


      {/* Disclaimer */}
      <motion.div
        className="contact-disclaimer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <span>IMPORTANT</span>

        <p>
          This website is purely conceptual and not a legal document.
          All layouts, specifications, amenities, and visuals are subject
          to change as may be decided by MUREC or the competent authority.
          No information herein shall be construed as an offer,
          solicitation, or invitation to purchase. Interested parties are
          requested to verify all details, including approvals,
          specifications, and prices, directly with MUREC before making
          any commitments.
        </p>
      </motion.div>


      {/* Footer */}
      <footer className="contact-footer">
        <span>M U R E C</span>

        <span>© 2026 MUREC</span>
      </footer>

    </section>
  );
};

export default ContactSection;