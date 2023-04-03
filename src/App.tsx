import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./NavBar";
import ProductPage from "./ProductListPage";
import NotFound from "./NotFound";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import AlertCard from "./Alert";
import UserProvider from "./Provider/UserProvider";
import AlertProvider from "./Provider/AlertProvider";
import CartProvider from "./Provider/CartProvider";
import Contact from "./Contact";
import Details from "./Details";

function App() {
  return (
    <div className="flex flex-col h-screen p-2 overflow-scroll bg-gray-default">
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            
            <Navbar />
            <AlertCard />
            <div className="grow">
              <Routes>
                <Route index element={<ProductPage />} />
                <Route path="/Products/:id" element={<Details />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot" element={<ForgotPassword />} />
               </Routes>
            </div>
          <Footer />
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;