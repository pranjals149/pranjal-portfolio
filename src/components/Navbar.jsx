import { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";

const getClassNames = (device) => ({
  ulClassName:
    device === "desktop"
      ? "list-none hidden sm:flex flex-row gap-10"
      : "list-none flex justify-end items-start flex-col gap-4",
  liClassName:
    device === "desktop"
      ? "hover:text-white text-[18px] font-medium cursor-pointer"
      : "font-poppins text-[16px] font-medium cursor-pointer",
});

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState("");

  const generateListsforDevices = (device) => {
    const classNames = getClassNames(device);

    return (
      <ul className={classNames.ulClassName}>
        {navLinks.map((link) => (
          <li
            key={link.id}
            onClick={() => setActive(link.title)}
            className={`${
              active === link.title ? "text-white" : "text-secondary"
            } ${classNames.liClassName}`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Pranjal &nbsp;
            <span className="sm:block hidden">| A Frontend Developer</span>
          </p>
        </Link>
        {generateListsforDevices("desktop")}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {generateListsforDevices("mobile")}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
