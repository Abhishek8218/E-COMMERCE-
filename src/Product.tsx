import { FC } from "react";
import { Link } from "react-router-dom";

type ProductProps = {
  thumbnail: string;
  category: string;
  title: string;
  price: number;
  id: number;
};

const Product: FC<ProductProps> = ({
  thumbnail,
  category,
  title,
  price,
  id,
}) => {
  return (
    <div key={id}>
      <Link to={"/Products/" + id}>
        <div className="w-full h-full shadow-2xl shadow-black">
          <div className=" aspect-square">
            <img
              className="object-cover w-full h-full hover:rounded-md hover:scale-105"
              src={thumbnail}
              alt="Product Image"
            />
          </div>
          <div className="pl-1">
            <div className="text-xs text-gray-500">{category}</div>
            <div className="flex font-bold text-md word-break">{title}</div>
            <img
              className="w-20"
              src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej-1520x800.jpg"
            />
            <div className="text-xs">Rs.{price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
