import {
  AmazonIcons,
  ArrowUpLogo,
  LinkedInIcon,
  MetaLogo,
  TicktokIcon,
  XIcon,
} from "./icons";

function SocialIcons() {
  const icons = [
    <ArrowUpLogo />,
    <TicktokIcon />,
    <LinkedInIcon />,
    <AmazonIcons />,
    <XIcon />,
    <MetaLogo />,
  ];
  return (
    <div className="flex flex-col gap-8 items-center mb-[200px]">
      <p className="text-xs">Adtask AI works with :</p>
      <div className="flex gap-7">
        {icons.map((item) => (
          <div className="p-[1px] bg-gradient-to-r from-color8 to-color9 inline-block rounded-lg relative">
            <div className="radialGradient border-color9 p-4 h-20 w-20  rounded-lg relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialIcons;
