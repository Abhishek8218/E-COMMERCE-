
import { FC, useEffect, useState, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { getProductData } from "./Api";
import { HiArrowSmLeft, HiArrowNarrowLeft ,HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import NotFound from "./NotFound";
import { withCart } from "./withProvider";

type DetailsProps = { addToCart: Function };

type useParamsprops = { id: any };

type productProps = {
  thumbnail: string;
  price: number;
  id: number;
  description: string;
  category: string;
  title: string;
  brand: string;
  stock: number;
};

const Details: FC<DetailsProps> = ({ addToCart }) => {
  //
  const id = +useParams<useParamsprops>().id;
  const [product, setProduct] = useState<productProps>();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
function () {
      const p = getProductData(id);
      p.then(function (response: any) {
        setProduct(response);

        setLoading(false);
      }).catch(() => {});
    },
    [id]
  );

  function handleCountChange(event: ChangeEvent<HTMLInputElement>) {
    setCount(+event.target.value);
  }

  function handleAddToCartClick (){
    addToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="bg-slate-100">
        <div className="flex justify-start p-2">
          <Link
            className="flex m-2 items-center px-2 font-semibold text-xl hover:text-white hover:rounded-full hover:bg-black"
            to="/"
          >
            <HiArrowSmLeft className="text-4xl" />
            Home
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row sm:p-10 bg-white rounded-md shadow-lg">
          <div className="p-6 w-full h-full">
            <img src={product.thumbnail} />
          </div>
          <div className="self-center p-4">
            <div className="font-bold text-5xl mb-6 px-2">{product.title}</div>
            <span className="font-bold text-3xl px-2">${product.price}</span>
            <p className="text-2xl mt-6 px-2">{product.description}</p>
            <div className="flex flex-row gap-2 py-6 px-2">
              <input
                value={count}
                type="number"
                onChange={handleCountChange}
                className="box-border  
 h-10 w-20 border-gray-700 border-2"
              />
              <button
                className=" text-white text-xl px-6 py-1 text-center rounded-md bg-orange-600 hover:bg-red-600"
                onClick={handleAddToCartClick}
                type="button"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-2">
          {id > 1 && (
          <Link
            className="flex m-2 items-center p-2 px-2 font-semibold text-xl hover:text-white hover:rounded-full hover:bg-black"
            to={"/products/" + (id - 1)}
          >
            <HiArrowNarrowLeft className="text-2xl" />
            Previous
          </Link>
      )}
      
          {id < 100 && (
  <Link
            className="flex m-2 items-center px-2 p-2 font-semibold text-xl hover:text-white hover:rounded-full hover:bg-black"
            to={"/products/" + (id + 1)}
          >
            <HiArrowNarrowRight className="text-2xl" />
            Next
          </Link>
     ) }
        </div>
      </div>
    </>
          
              
  );
 };
  
export default withCart(Details);