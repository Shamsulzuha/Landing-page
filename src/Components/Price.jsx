import images from "../assets/images";
import Button from "./Reusables/Button";
import PrimaryHeading from "./Reusables/PrimaryHeading";

const Price = () => {
  return (
    <div
      className="max-container relative overflow-hidden px-40 py-40"
      id="price"
    >
      <img src={images.rectangle} className="absolute inset-0 -z-10" />

      <div className=" flex flex-col justify-center items-center gap-5">
        <PrimaryHeading heading="A Price To Suit Everyone" />
        <p className="text-light-blue leading-7 w-4/6 text-center">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus.
        </p>
        <div className="pt-4 pb-6">
          <h1 className="text-5xl text-dark-blue font-semibold">$40</h1>
          <p className="text-light-blue leading-6 pt-1 text-center">
            UI Design Kit
          </p>
        </div>
        <div>
          <p className="text-light-blue leading-6 pb-2 text-center">
            See, One price.
          </p>
          <Button>Purchase UI Kit</Button>
        </div>
      </div>
    </div>
  );
};

export default Price;
