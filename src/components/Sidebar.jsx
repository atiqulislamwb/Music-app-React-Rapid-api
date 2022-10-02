import { useState } from "react";
import { NavLink } from "react-router-dom";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {};

  const NavLinks = () => (
    <>
      <div className="mt-10">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.to}
            onClick={() => handleClick && handleClick()}
            className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          >
            <link.icon className="w-6 h-6 mr-2" />
            {link.name}
          </NavLink>
        ))}
      </div>
    </>
  );

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#1c182b]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className="md:hidden block absolute top-10 right-10 ">
        {toggle ? (
          <CgClose
            className="text-white"
            onClick={() => setToggle(!toggle)}
            size={35}
          />
        ) : (
          <CgMenuRightAlt
            size={35}
            color="white"
            onClick={() => setToggle(!toggle)}
          />
        )}
      </div>

      {toggle && (
        <div
          className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483D8B] backdrop-blur-md text-white z-10 p-6 md:hidden smooth-transition  ${
            toggle ? "left-0" : "-left-full"
          }`}
        >
          <img src={logo} alt="logo" className="w-full h-14 object-contain" />
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Sidebar;
