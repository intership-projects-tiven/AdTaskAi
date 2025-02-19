import Features from "./Features";
import Header from "./Header";
import Hero from "./Hero";
import MovingLogo from "./MovingLogo";
import SessionService from "./SessionService";
import SessionTestimonials from "./SessionTestimonials";
import SocialIcons from "./SocialIcons";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MovingLogo />
        <SocialIcons />
        <Features />
        <SessionService />
        <SessionTestimonials />
        <section className="contact">
          <div>
            <h1>Ask whatever you have in your mind now</h1>
            <p>
              Whether you have questions or are ready to discuss your business,
              we’re here to help. Reach out today.
            </p>
            <p>icon contact@adtask.ai</p>
            <p>(969) 819-8061</p>
            <p>San Francisco Bay Area</p>
          </div>
          <form>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Message</label>
              <textarea></textarea>
            </div>
            <button type="submit">submit</button>
          </form>
        </section>
        <section className="callToAction">
          <h1>AdTask.ai</h1>
          <h2>Are you ready to boost your Digital Presence?</h2>
          <button>Start Free Trail</button>
          <button>Schedule a Call</button>
        </section>
        <footer>
          <div>
            <h1>adTask.ai (vector)</h1>
            <p>icon contact@adtask.ai</p>
            <p>icon San Francisco Bay Area</p>
          </div>
          <div>
            <ul>
              <li>Utilities</li>
              <li>Home</li>
              <li>Products</li>
              <li>Tools</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Socials</li>
              <li>X</li>
              <li>LinkedIn</li>
              <li>instagram</li>
              <li>Facebook</li>
            </ul>
          </div>
          <p>All right reserved C 2025 adTask</p>
        </footer>
      </main>
    </>
  );
}
