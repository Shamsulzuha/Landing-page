import Button2 from "./Reusables/Button2";
import navLinks from "./Content";
import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import SocialIcons from "./Reusables/SocialIcons";

const Footer = () => {
  return (
    <div className="bg-[#E7ECFF]" id="contact">
      <div className="max-container px-40 pt-14 pb-7">
        <div className="flex justify-between items-center pb-4">
          <p className="text-[#939EA4] font-medium text-sm">
            ©2024 Shamsulzuha
          </p>
          <a
            href="#price"
            className="text-[26px] font-extrabold text-[#37447E] cursor-pointer"
          >
            Landing
          </a>
          <Button2 btn="Purchase Now" />
        </div>
        <hr className="text-[#CDD1D4]" />
        <div className="flex justify-between items-center pt-3">
          <ul className="flex gap-14">
            {navLinks.map((nav) => {
              return (
                <li
                  key={nav.label}
                  className="text-sm text-[#939EA4] font-medium cursor-pointer hover:text-dark-blue hover:underline underline-offset-1"
                >
                  <a href={nav.href}>{nav.label}</a>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-8">
            <SocialIcons icon={<FaFacebookF />} />
            <SocialIcons icon={<FaLinkedin />} />
            <SocialIcons icon={<FaTwitter />} />
            <SocialIcons icon={<FaYoutube />} />
            <SocialIcons icon={<FaInstagram />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
