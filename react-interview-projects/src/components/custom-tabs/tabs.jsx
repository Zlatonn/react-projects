/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Tabs({ tabContents, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function hadleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabContents.map((tabItem, index) => (
          <div className={`tab-item ${currentTabIndex === index ? "active" : ""}`} onClick={() => hadleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="contenet" style={{ color: "red" }}>
        {tabContents[currentTabIndex] && tabContents[currentTabIndex].content}
      </div>
    </div>
  );
}
