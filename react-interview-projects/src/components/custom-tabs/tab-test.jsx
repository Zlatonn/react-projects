import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h1>Some random content</h1>;
}

function handleChange(currentTabIndex) {
  console.log(currentTabIndex);
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab3",
      content: <RandomComponent />,
    },
  ];
  return <Tabs tabContents={tabs} onChange={handleChange} />;
}
