import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

const ImageSlider = ({ url, limit, page = 10 }) => {
  
  const [image, setImage] = useState([]);
  const [currentSlide, setCurrenSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImage(data);
        setLoading(false);
      }
      
    } catch (error) {
      console.log("Cant Get The Image ", error);
      setError(error);
      setLoading(false);
    }
  };

  console.log(image);
  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  if (loading) {
    return <div>Please wait loading....</div>;
  }

  if (errorMsg !== null) {
    return <div>Error Occured {errorMsg}</div>;
  }

  const handlePrevious = () => {
    setCurrenSlide(currentSlide === 0 ? image.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrenSlide(currentSlide === image.length - 1 ? 0 : currentSlide + 1);
  };

  return (

    <div className="container">

      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {image && image.length
        ? image.map((imgItem, index) => (
            <img
              width="460"
              height="345"
              key={imgItem.id}
              alt={imgItem.download_url}
              src={imgItem.download_url}
              className={
                currentSlide == index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}


      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />


      <span className="circle-indicator">

        {image && image.length
          ? image.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide == index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrenSlide(index)}
              ></button>
            ))
          : null}

      </span>


    </div>
  );
};

export default ImageSlider;
