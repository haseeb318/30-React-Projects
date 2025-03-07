import { useEffect, useState } from "react";
import "./Productcomp.css";

const ProductComp = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disableButton , setDisableButton]= useState(false)

  const fetchProduct = async () => {
    try {
      setLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      let result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts(() => [...products, ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log("error occured", error.name);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(()=>{
    if (products && products.length === 100) setDisableButton(true);
  },[products])

  if (loading) {
    return <div>Loading data ! Please wait....</div>;
  }


  return (
    <div className="productMain--container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
          
      </div>
      <div className="btn-container">
        <button disabled={disableButton} onClick={()=>setCount(count+1)}>Loading More</button>
        {disableButton ? <p>You have reached to 100 products</p> : null}
    </div>

    </div>
  );
};

export default ProductComp;
