import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const routes = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "About",
      route: "about",
    },
    {
      name: "Services",
      route: "services",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];
  return (
    <>
      <div className="w-full h-20 backdrop-blur-md bg-white/40 z-20 flex justify-evenly items-center max-md:justify-between fixed top-0 shadow-lg">
        <div className="mx-2">{"<Sameer Deshmukh>"}</div>
        <ul className="flex max-md:hidden flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
          {routes.map((instance: any) => (
            <Link
              to={instance.route}
              activeClass={"bg-blue-500 !text-white"}
              className={
                "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white hover:cursor-pointer"
              }
              spy={true}
              smooth={true}
              onClick={() => setToggle(false)}
            >
              {instance.name}
            </Link>
          ))}
        </ul>
        <div className="max-w-6 mx-8 hidden max-md:block">
          <Hamburger
            toggled={toggle}
            size={22}
            duration={0.8}
            distance={"lg"}
            toggle={setToggle}
            color={"#000000"}
          />
        </div>
      </div>
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              "backdrop-blur-md bg-white/40 py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              <li className="cursor-pointer">
                {routes.map((instance: any) => (
                  <Link
                    to={instance.route}
                    activeClass={"!text-white bg-blue-500"}
                    className={
                      "hover:bg-blue-500 text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white hover:cursor-pointer"
                    }
                    spy={true}
                    smooth={true}
                    onClick={() => setToggle(false)}
                  >
                    <li>{instance.name}</li>
                  </Link>
                ))}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
