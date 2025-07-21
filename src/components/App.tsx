import { lazy } from "react";

const Features = lazy(() => import("./Features"));
const Footer = lazy(() => import("./Footer"));
const Header = lazy(() => import("./Header"));
const Hero = lazy(() => import("./Hero"));
// const MovingLogo = lazy(() => import("./MovingLogo"));
const SessionCallToAction = lazy(() => import("./SessionCallToAction"));
const SessionContact = lazy(() => import("./SessionContact"));
const SessionService = lazy(() => import("./SessionService"));
const SessionTestimonials = lazy(() => import("./SessionTestimonials"));
const SocialIcons = lazy(() => import("./SocialIcons"));

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {/* <MovingLogo /> */}
        <SocialIcons />
        <Features />
        <SessionService />
        <SessionTestimonials />
        <SessionContact/>
        <SessionCallToAction/>
        <Footer/>
      </main>
    </>
  );
}
