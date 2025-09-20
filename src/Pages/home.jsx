import { useState, useEffect, useRef } from "react";
import "../Components/Home.css";
import Footer from "../Components/Footer.jsx";
import heroimage from "../assets/hero.png"
import globeFlags from "../assets/globe.png";
import city from "../assets/city.jpeg"
import earbuds from "../assets/apple_earphone_image.png"
import phone from "../assets/translate.jpeg"
import conversation from "../assets/conversation.jpeg"
import { FaShoppingCart, FaCheckCircle, FaStar, FaCrown, FaGlobe, FaHeadphones, FaBolt, FaMobileAlt,FaQuestionCircle, FaQuoteLeft,FaUser, FaEnvelope, FaCommentDots, FaApple, 
  FaGooglePlay } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
 useEffect(() => {
    const cards = document.querySelectorAll(".plan");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = [...entry.target.parentNode.children].indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.2}s`; // stagger
            entry.target.classList.add("animate-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
   useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Translify?",
      answer: "Translify is your AI-powered buddy that provides real-time language translation supporting all known languages."
    },
    {
      question: "Do I need the internet for it to work?",
      answer: "Yes, you’ll need an internet connection for live translations. However, you can pre-download languages for offline use."
    },
    {
      question: "Which devices are supported?",
      answer: "Translify works on all major devices including Android, iOS, and desktop via our app."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 7-day free trial on all subscription plans so you can test the features before committing."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
const testimonials = [
    {
      text: "Translify completely changed how I travel. I no longer feel lost in foreign countries!",
      name: "Sarah Johnson"
    },
    {
      text: "I use Translify for my international business meetings, and it has saved me countless times.",
      name: "David Martinez"
    },
    {
      text: "As a student abroad, this app is a lifesaver. It's like having a translator in my pocket.",
      name: "Aisha Bello"
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="header">
          <h1>Do you want to explore the World?</h1>
          <p>Dont let language barrier hinder you <span>Translify</span> got you covered.</p> 
          <img src={heroimage} alt="hero image" />
        </div>
      </section>
      <section className="about">
        <h1>About Us</h1>
        <section className="about-content">
        <div className="left">
          <p>Have you ever felt zoned out or out of place due to language barrier?
            Thats what Translify is made for. <br /> Imagine Your Ai buddy that enables real time language translator.
            supporting all Known languages.
          </p>
        </div>
        <div className="right">
          <img src={city} alt="" />
        </div>
         </section>
      </section>
      <section className="usage">
        <h1>How to Use</h1>
        <div className="step1">
          <h1>Step 1</h1>
          <p>Connect Earbuds to your Translify gadget through bluetooth connection</p>
          <img src={earbuds} alt="" />
        </div>
        <div className="step2">
          <h1>Step 2</h1>
          <p>Make sure you have pre-installed all needed languages.
            Click the center button to enable live translator.
          </p>
          <img src={phone} alt="" />
        </div>
        <div className="step3">
          <h1>Step 3</h1>
          <p>Insert your earbuds and get a live translator of all language to your  local language at the
            comfort of your earbuds.
          </p>
          <img src={conversation} alt="" />
        </div>
      </section>
     {/* Subscription Section */}
      <section className="subscription">
        <h1>Choose Your Plan</h1>
        <div className="plans">
          {/* Basic Plan */}
          <div className="plan basic">
            <FaCheckCircle className="plan-icon" />
            <h2>Basic</h2>
            <p className="price">$9.99 / month</p>
            <ul>
              <li>✔ Limited Languages</li>
              <li>✔ 24/7 Support</li>
              <li>✔ Standard Speed</li>
            </ul>
            <button>Get Basic</button>
          </div>

          {/* Premium Plan */}
          <div className="plan premium">
            <FaStar className="plan-icon" />
            <h2>Premium</h2>
            <p className="price">$19.99 / month</p>
            <ul>
              <li>✔ All Languages</li>
              <li>✔ Faster Speed</li>
              <li>✔ Priority Support</li>
            </ul>
            <button>Get Premium</button>
          </div>

          {/* Gold Plan */}
          <div className="plan gold">
            <FaCrown className="plan-icon" />
            <h2>Gold</h2>
            <p className="price">$29.99 / month</p>
            <ul>
              <li>✔ Unlimited Languages</li>
              <li>✔ Ultra-Fast Translation</li>
              <li>✔ VIP Support</li>
            </ul>
            <button>Get Gold</button>
          </div>
        </div>
      </section>
      {/*  Features Section */}
      <section className="features">
        <h1 className="features-title" data-aos="fade-up">Why Choose Translify?</h1>
        <div className="features-container">
          <div className="feature-card" data-aos="zoom-in" data-aos-delay="100">
            <FaGlobe className="feature-icon animated-icon" />
            <h2>Supports All Languages</h2>
            <p>Translate any known language in real time with AI-powered accuracy.</p>
          </div>

          <div className="feature-card" data-aos="zoom-in" data-aos-delay="200">
            <FaHeadphones className="feature-icon animated-icon" />
            <h2>Seamless Earbud Integration</h2>
            <p>Get instant translations directly in your earbuds, hands-free.</p>
          </div>

          <div className="feature-card" data-aos="zoom-in" data-aos-delay="300">
            <FaBolt className="feature-icon animated-icon" />
            <h2>Lightning Fast</h2>
            <p>Experience real-time translations without delays or interruptions.</p>
          </div>

          <div className="feature-card" data-aos="zoom-in" data-aos-delay="400">
            <FaMobileAlt className="feature-icon animated-icon" />
            <h2>Cross-Device</h2>
            <p>Use Translify on your phone, tablet, or desktop without limits.</p>
          </div>
        </div>
      </section>
      <section className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            className={`faq-item ${activeIndex === index ? "active" : ""}`} 
            key={index}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <FaQuestionCircle className="faq-icon" />
              <h3>{faq.question}</h3>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="contact">
      <h1>Get in Touch</h1>
      <p>Have questions or feedback? Fill the form below and we’ll reach out to you.</p>

      <form className="contact-form">
        <div className="form-group">
          <FaUser className="form-icon" />
          <input type="text" placeholder="Your Name" required />
        </div>

        <div className="form-group">
          <FaEnvelope className="form-icon" />
          <input type="email" placeholder="Your Email" required />
        </div>

        <div className="form-group textarea-group">
          <FaCommentDots className="form-icon" />
          <textarea placeholder="Your Message" rows="5" required></textarea>
        </div>

        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </section>
    <section className="testimonials">
      <h1>What People Say</h1>
      <div className="testimonial-container">
        {testimonials.map((t, index) => (
          <div className="envelope" key={index}>
            <div className="envelope-letter">
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{t.text}</p>
            </div>
            <div className="envelope-body">
              <h3>{t.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="cta">
      <div className="cta-content">
        <h1>Get Your Translify Pocket Translator Today</h1>
        <p>Break all language barriers. Order your device now or download our mobile app for free.</p>

        <div className="cta-buttons">
          <button className="btn-order">
            <FaShoppingCart className="icon" /> Order Now
          </button>

          <div className="app-buttons">
            <a href="#" className="btn-appstore">
              <FaApple className="icon" /> App Store
            </a>
            <a href="#" className="btn-playstore">
              <FaGooglePlay className="icon" /> Google Play
            </a>
          </div>
        </div>
      </div>
    </section>
      <Footer />
    </>
  );
}
