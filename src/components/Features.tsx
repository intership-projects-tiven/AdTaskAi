import FeatureBox from "./FeatureBox";
import GraphBox from "./GraphBox";
import LightningDesign from "./LightningDesign";
import RotatingRadar from "./RotatingRadar";
import RotatingSetting from "./RotatingSetting";
import SessionHeading from "./SessionHeading";

function Features() {
  return (
    <section className="features p-4 container mx-auto">
      <SessionHeading
        heading="features"
        subHeading="Feature packed to make"
        subHeading2="Digital marketing easier and affordable."
      />
      <p className="text-center mb-32">
        Experience Intelligent Features to optimize your marketing efforts.
      </p>
      <div className="grid grid-cols-3 gap-8 place-items-center max-w-[70rem] mx-auto">
        <FeatureBox
          className="h-[37.0625rem] w-[22rem]  row-span-2 "
          heading="Reach Target Audience"
          description="Pinpoint the perfect audience with precision. Our AI-driven
          targeting ensures every message resonates where it matters most."
        >
          <RotatingRadar />
        </FeatureBox>
        <FeatureBox
          className="h-[17.5rem] w-[22rem]"
          heading="Marketing made Easier"
          description="Save time and simplify campaign management. Let automated workflows handle the heavy lifting, so you can focus on creativity."
        >
          <RotatingSetting/>
        </FeatureBox>
        <FeatureBox
          className="h-[37.0625rem] w-[22rem] row-span-2  "
          heading="Intelligent Agents to Optimize your Reach"
          description="Scale and refine your marketing with AI-powered agents. They track performance in real-time to help you reach more customers efficiently."
        >
        <LightningDesign/>
        </FeatureBox>
        <FeatureBox
          className="h-[17.5rem] w-[22rem] "
          heading="Smart Marketing Insights"
          description="Unlock actionable data to guide every decision. Stay ahead of trends, refine your strategies, and make confident moves with powerful analytics."
        >
           <GraphBox/>
        </FeatureBox>
      </div>
    </section>
  );
}

export default Features;
