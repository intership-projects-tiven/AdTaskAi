import { SecondaryButton2 } from "./Buttons";
import { Stars } from "./icons";
import LogoDesignMain from "./LogoDesignMain";

function Hero() {
  return (
    <section className="flex flex-col gap-12 my-16 relative">
      <div className=" flex justify-start items-center flex-col gap-12 text-center">
        <div className="flex  items-center flex-shrink-0 border bg-gradient-to-r from-color3/5 to-color4/5 border-color4 rounded-xl p-2 ">
          <div className="-mr-2">
            <Stars />
          </div>
          <p className="uppercase text-xs px-3">
            Transform Your Digital Presence with AI Agents
          </p>
        </div>
        <div className="flex gap-2 justify-center rounded-xl p-2">
          <div className="text-8xl">
            <LogoDesignMain />
          </div>
        </div>
        <p className="text-center max-w-[47.9375rem] mx-auto">
          Stop struggling with marketing decisions. Our AI assistant analyzes
          your business, creates personalized strategies, and helps you execute
          them - all in real-time.
        </p>
        <div className="flex gap-2 flex-col">
          <SecondaryButton2>Start Free Trail</SecondaryButton2>
          <p className="text-[.625rem] ">Try AdTask AI free for 30 days</p>
        </div>
      </div>
      <iframe
       className="border border-color7 rounded-3xl mx-auto w-1/2 h-[37.5rem] "

        src="https://www.youtube.com/embed/CPWxExGk7PM"
        title="Charli xcx - Apple (official lyric video)"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </section>
  );
}

export default Hero;
