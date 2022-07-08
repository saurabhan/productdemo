import Image from "next/image";
import React from "react";
import { Products } from "../typings";

interface Props {
    product: Products;
}

const ProductCard = (prop : Props ) => {
    const { product } = prop;
  return (
    <div>
      <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
          <Image src={product.image} alt={product.name} width={200} height={200} />
        <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">
          {product.name}
        </h4>
        <p className="text-blue-500">RS{product.price}</p>

        <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
          <span className="mx-1">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
