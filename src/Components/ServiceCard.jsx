import Button from "./Reusables/Button";
import PrimaryHeading from "./Reusables/PrimaryHeading";
import PrimaryParagraph from "./Reusables/PrimaryParagraph";
import SecondaryParagraph from "./Reusables/SecondaryParagraph";

// eslint-disable-next-line react/prop-types
const Powerful = ({ image, isImageFirst }) => {
  return (
    <div className={`grid grid-cols-2 gap-36 items-center justify-center`}>
      <div className={`${isImageFirst ? "order-1" : "order-2"}`}>
        <img src={image} alt="img" />
      </div>

      <div className={`flex flex-col ${isImageFirst ? "order-2" : "order-1"}`}>
        <PrimaryHeading heading="Light, Fast & Powerful" />
        <PrimaryParagraph paragraph1="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus" />
        <SecondaryParagraph
          paragraph2="mus. Donec quam felis, ultricies nec, pellentesque eu,
        pretium quis, sem. Nulla consequat massa quis enim."
        />
        <Button>Purchase Now</Button>
      </div>
    </div>
  );
};

export default Powerful;
