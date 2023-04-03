import { FC } from "react";
import Product from "./Product";

type ProductListProps = { products: any };

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-2 gap-4 mx-auto sm:grid-cols-3">
      {products.map(function (props: any) {
        return <Product key={props.id} {...props} />;
      })}
    </div>
  );
};
export default ProductList;