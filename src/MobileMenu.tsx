import { FC } from "react";
import { Link } from "react-router-dom";
import { withCart, withUser } from "./withProvider";
import {   BsCart} from "react-icons/bs";
type MobileMenuProps = { 
setUser: Function; 
isLoggedIn: boolean;
cartCount: number;
};

const MobileMenu: FC<MobileMenuProps> = ({setUser, isLoggedIn, cartCount }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(undefined);
  };

  return (
    <div className="">
      <div className=" absolute flex flex-col justify-center mt-10 space-y-4 h-screen w-1/2 pl-12 bg-orange-500 text-white text-3xl rounded-sm md:hidden ">
        <Link
          to="/"
          className="font-bold  hover:text-white underline"
        >
          Home
        </Link>
        
        <Link
          to="about"
          className="font-bold   hover:text-white underline "
        >
          About
        </Link>
        <Link
          to="contact"
          className="font-bold hover:text-white underline "
        >
          Contact
        </Link>
        {isLoggedIn ? (
          <Link
            to="login"
            onClick={handleLogout}
            className="font-black hover:text-primary-light text-primary-dark underline"
          >
            Logout
          </Link>
        ) : (
          <Link
            to="login"
            className="font-bold  hover:text-primary-light text-white underline"
          >
            Login
          </Link>
      
          
        )}
        <Link to="/cart">
                <div className="flex flex-col items-center justify-center">
                  <BsCart className="pb-1 pr-10 text-8xl text-primary-default hover:text-primary-dark" />
                </div>
              </Link>

      </div>
    </div>
  );
};

export default withUser(withCart(MobileMenu));