import images from "../assets/images";
import IconSec from "./IconSec";
import PrimaryHeading from "./Reusables/PrimaryHeading";
import PrimaryParagraph from "./Reusables/PrimaryParagraph";

const Powerful = () => {
  return (
    <div className="max-container grid grid-cols-2 gap-4 items-center justify-center px-40 py-20">
      <div className="flex flex-col">
        <PrimaryHeading heading="Light, Fast & Powerful" />
        <PrimaryParagraph
          paragraph1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus"
          paragraph2="mus. Donec quam felis, ultricies nec, pellentesque eu,
        pretium quis, sem. Nulla consequat massa quis enim."
        />
        <div className="grid grid-cols-2 gap-6 pt-14">
          <IconSec
            title="Title Goes Here"
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          />
          <IconSec
            title="Title Goes Here"
            paragraph="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
          />
        </div>
      </div>
      <div>
        <img src={images.powerful} alt="img" />
      </div>
    </div>
  );
};

export default Powerful;
