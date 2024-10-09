import images from "../assets/images";
import Button from "./Reusables/Button";

const Hero = () => {
  return (
    <div className="max-container pl-40 relative overflow-hidden pb-20 pt-40">
      <img src={images.path} className="absolute -top-20 -right-40 -z-10" />

      <div className="grid grid-cols-2 items-center gap-20">
        <div className="">
          <h1 className="text-5xl text-dark-blue font-semibold leading-[66px] tracking-[1px]">
            Introduce Your Product Quickly & Effectively
          </h1>
          <p className="pt-5 pb-3 text-lg text-light-blue leading-8">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
          </p>
          <p className="pb-14 text-lg text-light-blue leading-8">
            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim.
          </p>
          <div className="flex gap-7">
            <Button>Purchase UI Kit</Button>
            <Button styleBTn="!bg-transparent !text-[#091133] !border-2 !border-[#091133]">
              Learn More
            </Button>
          </div>
        </div>
        <div className="items-end justify-end flex">
          <img className="max-h-[600px]" src={images.hero} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
