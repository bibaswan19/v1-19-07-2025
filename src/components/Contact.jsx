import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact-us">
      <div className="contact-container">
        <div className="contact-inner">
          <div className="contact-info">
            <h2>
              Contact <strong>Us</strong>
            </h2>
            <div className="contact-item">
              <span>📍</span>
              <p>
                37, Nandalal Basu Sarani, College Para, Hakim Para, Siliguri,
                West Bengal 734001
              </p>
            </div>
            <div className="contact-item">
              <span>📧</span>
              <p>bibaswanedu@gmail.com</p>
            </div>
            <div className="contact-item">
              <span>📞</span>
              <p>+91 9641592339</p>
            </div>
            <div className="contact-item social-icons">
              <p>
                <span>
                  <a
                    href="https://www.instagram.com/bibaswanedufoundation?igsh=c2loZGpoMXk1YXR2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ig"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.facebook.com/Bibaswans.e.f/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fb"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://youtube.com/@bibaswaneducationalfoundation1?si=FAh_e2WiXZ_abnbc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="yt"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://t.me/Bibaswan2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tg"
                  >
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </span>
              </p>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.0342095747715!2d88.42902517543253!3d26.711354076767737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441c767d78843%3A0x9dba89ce7b0f7e9f!2sBibaswan%20Educational%20Foundation!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bibaswan Location"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;




