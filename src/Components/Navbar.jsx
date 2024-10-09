import navLinks from "./Content/index";
import Button2 from "./Reusables/Button2";

const Navbar = () => {
  return (
    <div className="max-container flex justify-between items-center px-40 py-4 fixed right-0 left-0 top-0 z-10">
      <ul className="flex gap-14">
        {navLinks.map((nav) => {
          return (
            <li
              key={nav.label}
              className="text-sm text-primary cursor-pointer hover:text-dark-blue hover:underline underline-offset-1"
            >
              <a href={nav.href}>{nav.label}</a>
            </li>
          );
        })}
      </ul>
      <a
        href="#price"
        className="text-[26px] font-extrabold text-[#37447E] cursor-pointer"
      >
        Landing
      </a>

      <Button2 btn="Buy Now" />
    </div>
  );
};

export default Navbar;
