// eslint-disable-next-line react/prop-types
const Button2 = ({ btn }) => {
  return (
    <a
      href="#price"
      className={`bg-dark-blue text-white rounded-[2px] py-[6px] text-xs px-10 font-medium w-fit hover:opacity-90 shadow-md`}
    >
      {btn}
    </a>
  );
};

export default Button2;
