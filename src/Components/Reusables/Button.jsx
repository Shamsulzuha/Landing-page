// eslint-disable-next-line react/prop-types
const Button = ({ children, styleBTn }) => {
  return (
    <a
      href="#"
      className={`bg-dark-blue text-white rounded-[2px] py-2 text-sm px-10 font-semibold shadow-md w-fit hover:opacity-90 ${styleBTn}`}
    >
      {children}
    </a>
  );
};

export default Button;
