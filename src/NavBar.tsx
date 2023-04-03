
import { useState, FC } from "react";
import {   BsCart} from "react-icons/bs"; 
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { withCart, withUser } from "./withProvider";

type NavbarProps = {
  cartCount: number;
  setUser: Function;
  isLoggedIn: boolean;
};

const NavBar: FC<NavbarProps> = ({ cartCount, setUser, isLoggedIn }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function handleMenuOpenClick() {
    setMenuOpen(!isMenuOpen);
  }

  const links = [
    {
      id: 1,
      link: "Home",
      Route: "/",
    },
  
    {
      id: 2,
      link: "About",
      Route: "/",
    },
    {
      id: 3,
      link: "Contact",
      Route: "contact",
    },
  
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <div className="py-4 bg-white">
      <div className="flex justify-between max-w-6xl mx-auto item-center">
        <img
          className="hidden h-12 w-30 md:block "
          src="https://cdn.discordapp.com/attachments/910152020034486282/1092414192071475351/1680522228867.jpg"
        />

        <div>
          <div className=" md:hidden " onClick={handleMenuOpenClick} >
          {isMenuOpen ? <FaTimes className="fixed z-50" size={30}/> :  <FaBars
            size={30} 
          />}
            </div>
          {isMenuOpen && <MobileMenu className="md:hidden " />}
        </div>

        <div className="flex gap-4">
          {links.map(({ link, id, Route }) => (
            <div key={id} className="hidden space-x-4 text-xl md:block ">
              <Link className={"hover:text-primary-dark "} to={Route}>
                {link}
              </Link>
            </div>
          ))}
          {isLoggedIn ? (
            <a
              href="login"
              onClick={handleLogout}
              className="hidden text-xl font-bold md:block hover:text-primary-light text-primary-dark"
            >
              Logout
            </a>
          ) : (
            <a
              href="login"
              className="hidden text-xl font-bold md:block hover:text-primary-light text-primary-dark"
            >
              Login
            </a>
          )}

            <div className="flex gap-4">
            <div>
            
              <Link to="/cart">
                <div className="flex flex-col items-center justify-center hidden sm:block ">
                  <BsCart className="pb-1 text-4xl text-primary-default hover:text-primary-dark" />
                  <span className="-m-8 text-primary-default hover:text-primary-dark">
                    {cartCount}
                  </span>
                </div>
              </Link>
              
            </div>
            
            <div>
              
              <img
                className=" pb-2 h-12 w-30 md:hidden object-cover "
                src="https://cdn.discordapp.com/attachments/910152020034486282/1092414192071475351/1680522228867.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withUser(withCart(NavBar));
