import React from "react";
import "./AboutUs.css";
import teamImg from "../assets/about.png";
import growImg from "../assets/moto.png";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-intro">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            <b>"Education is the manifestation of perfection already in man " <br/>
            <span>-- Swami Vivekananda.</span></b><br/>And we the Bibaswan Educational Foundation firmly
            believe in this .We, The Bibaswan Educational Foundation, believe
            that education is not just about acquiring knowledge—it is about
            shaping, building & blusting out Individual's inner talent by
            empowering ones inherent confidence to meaningfully to society.<br/>And
            for this, Bibaswan Educational Foundation stands as a beacon of
            success years after years with unwavering dedication that paves the
            path of the countless aspirants to reach their dreams. Though its
            holistic approach to education, the institute modes, minds, natures,
            talent and guides individuals towards their destination, towards
            their goals, Bibaswan's legacy of achievement continue to shine
            brightly illuminating the future of those who dare to dream.<br/>Our
            primary objective is to provide proper education with quality and
            depth, backed by a strong foundation of educational ethics and
            integrity. Every program we design is guided by our commitment to
            academic excellence, honesty, and transparency.<br/>We are dedicated to
            empowering students with the right attitude, self-confidence, and
            discipline to succeed not only in examinations but also in life.
            Through structured learning, ethical guidance, and skill
            development, we ensure that every student grows into a responsible,
            capable, and confident individual.<br/>Beyond academics, we are deeply
            committed to our social responsibility. By fostering an environment
            of honesty and service, we aim to contribute positively to the
            larger community and nation.<br/>Looking forward, our vision is to
            establish Bibaswan Educational Foundation as a trusted pillar of
            learning and empowerment, nurturing future leaders who carry
            knowledge, values, and responsibility in equal measure.
          </p>
        </div>
        <img src={teamImg} alt="Team" className="about-img" />
      </div>

      <div className="about-mission">
        <img src={growImg} alt="Grow Better" className="mission-img" />
        <div className="mission-text">
          <h3>Moto Of Our Institute:</h3>
          <p>
            We believe that success is not just a destination but a journey, and
            we equip our students with the skills and mindset needed to navigate
            that journey with confidence. By fostering a growth
            mindset,resilience and ethical values, we empower our students to
            overcome challenges and sieze opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;



