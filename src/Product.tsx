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
              className="object-cover w-full h-full transition ease-in-out duration-300  hover:rounded-md hover:scale-105"
              src="https://img.freepik.com/free-vector/images-concept-illustration_114360-218.jpg?t=st=1709635714~exp=1709639314~hmac=99eae90e50db74aa797fe5cdd63d26f454b81bc67011c34c548ba9aab4fa73cf&w=740"
             // onError="this.onerror=null;this.src='https://img.freepik.com/free-vector/images-concept-illustration_114360-218.jpg?t=st=1709635714~exp=1709639314~hmac=99eae90e50db74aa797fe5cdd63d26f454b81bc67011c34c548ba9aab4fa73cf&w=740';"
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
