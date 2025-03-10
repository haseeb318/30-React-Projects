import { useEffect, useState } from "react";
import "./styles.css";

const ScrollIndicator = ({ url }) => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  // const fetchUrl = async (getUrl) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(getUrl);
  //     const datap = await response.json();
  //     // console.log(datap)
  //     if (datap && datap.products && datap.products.length > 0) {
  //       setData(datap.products);
  //       // console.log(data)
  //       setLoading(false);
  //     }
  //   } catch (error) {
  //     console.log("error :", error.message);
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchUrl(url);
  // }, [url]);

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

  // if (loading) {
  //   return <div>Please Wait Loading....</div>;
  // }
  return (
    <div>
      <div className="top-container">
        <h1>Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <p className="data-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
        doloremque temporibus earum facere? Laborum dolorum dicta beatae error
        eligendi nisi expedita voluptatibus repellendus veniam, eius vero
        officiis rerum, velit sapiente aliquid distinctio asperiores odio atque
        veritatis praesentium dignissimos. Sit alias magni, in, magnam aliquam
        rem labore at dolorum eos sunt voluptates numquam, provident nulla
        corporis itaque amet et cum delectus quaerat cupiditate odio harum
        earum! Reiciendis labore explicabo consectetur?
      </p>
      <p className="data-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
        doloremque temporibus earum facere? Laborum dolorum dicta beatae error
        eligendi nisi expedita voluptatibus repellendus veniam, eius vero
        officiis rerum, velit sapiente aliquid distinctio asperiores odio atque
        veritatis praesentium dignissimos. Sit alias magni, in, magnam aliquam
        rem labore at dolorum eos sunt voluptates numquam, provident nulla
        corporis itaque amet et cum delectus quaerat cupiditate odio harum
        earum! Reiciendis labore explicabo consectetur?
      </p>
      <p className="data-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
        doloremque temporibus earum facere? Laborum dolorum dicta beatae error
        eligendi nisi expedita voluptatibus repellendus veniam, eius vero
        officiis rerum, velit sapiente aliquid distinctio asperiores odio atque
        veritatis praesentium dignissimos. Sit alias magni, in, magnam aliquam
        rem labore at dolorum eos sunt voluptates numquam, provident nulla
        corporis itaque amet et cum delectus quaerat cupiditate odio harum
        earum! Reiciendis labore explicabo consectetur?
      </p>
      <p className="data-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
        doloremque temporibus earum facere? Laborum dolorum dicta beatae error
        eligendi nisi expedita voluptatibus repellendus veniam, eius vero
        officiis rerum, velit sapiente aliquid distinctio asperiores odio atque
        veritatis praesentium dignissimos. Sit alias magni, in, magnam aliquam
        rem labore at dolorum eos sunt voluptates numquam, provident nulla
        corporis itaque amet et cum delectus quaerat cupiditate odio harum
        earum! Reiciendis labore explicabo consectetur?
      </p>
      <p className="data-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
        doloremque temporibus earum facere? Laborum dolorum dicta beatae error
        eligendi nisi expedita voluptatibus repellendus veniam, eius vero
        officiis rerum, velit sapiente aliquid distinctio asperiores odio atque
        veritatis praesentium dignissimos. Sit alias magni, in, magnam aliquam
        rem labore at dolorum eos sunt voluptates numquam, provident nulla
        corporis itaque amet et cum delectus quaerat cupiditate odio harum
        earum! Reiciendis labore explicabo consectetur?
      </p>
      <p className="data-container">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt eos
        doloremque temporibus earum facere? Laborum dolorum dicta beatae error
        eligendi nisi expedita voluptatibus repellendus veniam, eius vero
        officiis rerum, velit sapiente aliquid distinctio asperiores odio atque
        veritatis praesentium dignissimos. Sit alias magni, in, magnam aliquam
        rem labore at dolorum eos sunt voluptates numquam, provident nulla
        corporis itaque amet et cum delectus quaerat cupiditate odio harum
        earum! Reiciendis labore explicabo consectetur?
      </p>

      {/* <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key ={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div> */}
    </div>
  );
};

export default ScrollIndicator;
