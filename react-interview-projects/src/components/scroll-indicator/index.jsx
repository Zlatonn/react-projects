/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentahe] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setData(result.products);
        setLoading(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  }

  function handleScrollPercentage() {
    // console.log(
    //   document.body.scrollTop, //ระยะทางที่ผู้ใช้เลื่อนหน้าจอในแนวตั้ง (Vertical Scroll) ของ <body> เริ่มจากด้านบน
    //   document.documentElement.scrollTop, //ระยะทางที่ผู้ใช้เลื่อนหน้าจอในแนวตั้งของ <html> หรือ document.documentElement (ใน HTML5)
    //   document.documentElement.scrollHeight, //ความสูงทั้งหมดของเอกสารเว็บ (HTML Document) รวมเนื้อหาที่อาจอยู่นอกหน้าจอที่มองเห็นได้ (overflow)
    //   document.documentElement.clientHeight //ความสูงของพื้นที่ที่ผู้ใช้มองเห็นได้ (Visible Area) ในเบราว์เซอร์
    // );

    const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentahe((howMuchScroll / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <div className="data-container">{data && data.length ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>) : null}</div>
    </div>
  );
}
