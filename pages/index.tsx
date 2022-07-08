import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useReducer, useState } from "react";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { products } from "../db/Products.json";
import { Products } from "../typings";

const init = products

const reducer = (state : typeof init, action: string) => {
  switch (action) {
    case "LTH":
      console.log("LTH")
      return [...products.sort((a, b ) => a.price - b.price)];
    case "HTL":
      console.log("HTL")
      return [...products.sort((a, b) => b.price - a.price)];
    case "S":
      return products.filter(product => product.size === "S");
    case "M":
      return products.filter(product => product.size === "M");
    case "L":
      return products.filter(product => product.size === "L");
    case "Nike":
      return products.filter(product => product.brand === "Nike");
    case "HnM":
      return products.filter(product => product.brand === "HnM");
    case "Men":
      return products.filter(product => product.ideal_for === "Men");
      case "Women":
        return products.filter(product => product.ideal_for === "Women");
      default:
        return products;
  }
}

const Home: NextPage = () => {
  const [prod, setProd] = useState(products)
  const [state , dispatch] = useReducer(reducer, products);

  console.log(state)
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Product Filter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-1">
        <div className="container px-6 py-8 mx-auto">
          <div className="lg:flex lg:-mx-2">
            <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
              <Sidebar dispatch={dispatch}/>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {
            
                state.map((product, index) => (
                  <ProductCard product={product} key={index} />
                ))
            }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
