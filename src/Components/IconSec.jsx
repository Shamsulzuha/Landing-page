import images from "../assets/images";

// eslint-disable-next-line react/prop-types
const IconSec = ({ title, paragraph }) => {
  return (
    <div>
      <div>
        <img src={images.icon} alt="" />
      </div>
      <h3 className="text-dark-blue font-semibold pb-2 pt-3">{title}</h3>
      <p className="text-[#5D6970] text-xs leading-[18px]">{paragraph}</p>
    </div>
  );
};

export default IconSec;
