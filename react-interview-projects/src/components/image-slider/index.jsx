import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

export default function ImageSlider({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  if (loading) {
    return <div>Loading data ! Pleases wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured !</div>;
  }

  function handlePreviuos() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={handlePreviuos} />
      {images && images.length
        ? images.map((image, index) => (
            <img
              key={image.id}
              alt={image.download_url}
              src={image.download_url}
              className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          ))
        : null}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={handleNext} />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={currentSlide === index ? "current-indicator" : "current-indicator inactive-indicator"}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
