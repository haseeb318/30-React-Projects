import { useEffect, useState } from "react";
import "./styles.css";
import { FaArrowUp } from "react-icons/fa";
const ScrollIndicator = ({ url }) => {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchUrl = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const datap = await response.json();
      // console.log(datap)
      if (datap && datap.products && datap.products.length > 0) {
        setData(datap.products);
        // console.log(data)
        setLoading(false);
      }
    } catch (error) {
      console.log("error :", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrl(url);
  }, [url]);


  const handleScrollPercentage = () => {

    console.log(

      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Please Wait Loading....</div>;
  }
  const handleScrolltoTop = () => {
    console.log("click ");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key ={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
      <p className={scrollPercentage>4?"arrow":"arrow-Dis"}
      onClick={handleScrolltoTop}
        ><FaArrowUp /></p>
    </div>
  );
};

export default ScrollIndicator;
