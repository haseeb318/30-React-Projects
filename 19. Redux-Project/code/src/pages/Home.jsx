import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";

export const Home = () => {
  const [product, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const resp = await fetch("https://fakestoreapi.com/products");
      const data = await resp.json();
      console.log(data);
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      // console.log(product);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <div>Loading.....</div>
        ) : (
          <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
            {product && product.length
              ? product.map((item) => <ProductItem key={item.id} product={item} />)
              : null}
          </div>
        )}

      </div>
    </>
  );
};
