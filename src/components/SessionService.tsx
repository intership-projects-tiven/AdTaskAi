import GridItem from "./GridItem";
import SessionHeading from "./SessionHeading";

function SessionService() {
  return (
    <section className="services container mx-auto">
      <SessionHeading
        heading="services"
        subHeading="Innovative Services"
        subHeading2="for Growth."
      />
      <div className="max-w-[70.9375rem] mx-auto m-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-y-14 gap-x-[66px] place-content-center">
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
          <GridItem />
        </div>
      </div>

      <button>Contact Us</button>
    </section>
  );
}

export default SessionService;
