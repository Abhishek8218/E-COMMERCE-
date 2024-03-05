
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
      Route: "/about",
    },
    {
      id: 3,
      link: "Contact",
      Route: "/contact",
    },
  
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };
 

  return (
    <div className="py-3 px-2 mb-2 h-18 bg-white border-4 border-y-orange-300 sticky top-0">
      <div className="flex justify-between max-w-6xl mx-auto item-center">
        <img
          className="hidden h-12 w-30 md:block rounded-md "
          src="https://cdn.discordapp.com/attachments/910152020034486282/1092412419319533628/IMG_20230403_170639.jpg?ex=65f82758&is=65e5b258&hm=4456562c3b02c64daf57e24fbf6fc565f7f0711e969d054bbb17713190142a50&"
        />

        <div>
          <div className=" md:hidden " onClick={handleMenuOpenClick} >
          {isMenuOpen ? <FaTimes className="fixed z-50" size={30}/> :  <FaBars
            size={30} 
          />}
            </div>
          {isMenuOpen && <MobileMenu className="md:hidden fixed" />}
        </div>

        <div className="flex gap-4">
          {links.map(({ link, id, Route }) => (
            <div key={id} className="hidden space-x-4 text-xl md:block ">
              <Link className="hover:text-primary-dark "
   
                
                to={Route}>
                {link}
              </Link>
            </div>
          ))}
          {isLoggedIn ? (
            <Link
              to="/login"
              onClick={handleLogout}
              className="hidden text-xl font-bold md:block hover:text-primary-light text-primary-dark"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/login"
              className="hidden text-xl font-bold md:block hover:text-primary-light text-primary-dark"
            >
              Login
            </Link>
          )}

            <div className="flex gap-4">
            <div>
            
              <Link to="/cart">
                <div className="relative hidden sm:block ">
                  <BsCart className=" text-4xl text-primary-default hover:text-primary-dark" />
                  <span className=" absolute top-0 right-0 inline-flex items-center justify-center px-3 py-1  text-primary-default hover:text-primary-dark">
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
