import images from "../assets/images";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <div className="max-container flex flex-col gap-28 px-40 py-20" id="about">
      <ServiceCard image={images.service1} isImageFirst={true} />
      <ServiceCard image={images.service2} isImageFirst={false} />
      <ServiceCard image={images.service3} isImageFirst={true} />
    </div>
  );
};

export default Services;
