import { useContext } from "react";
import Accordion from "../accordian";
import LightDarkMode from "../light-dark-mode";
import GenerateRandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";

export default function FeatureFlags() {
  const { enabledFlags, loading } = useContext(FeatureFlagsContext);
  const componentToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <GenerateRandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordion />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  function checkEnableFlags(getCurrentKty) {
    return enabledFlags[getCurrentKty];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentToRender.map((componentItem) => (checkEnableFlags(componentItem.key) ? componentItem.component : null))}
    </div>
  );
}
