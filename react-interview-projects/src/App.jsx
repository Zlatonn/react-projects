/* eslint-disable no-unused-vars */
import "./App.css";
import Accordion from "./components/accordian";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndButtom from "./components/scroll-to-top-and-buttom";
import ScrollToSection from "./components/scroll-to-top-and-buttom/scroll-to-section";
import SearchAutoComplete from "./components/search-autocomplete";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

function App() {
  return (
    <>
      {/* Accordian component */}
      {/* <Accordion /> */}

      {/* Random color component */}
      {/* <RandomColor /> */}

      {/* Start rating component */}
      {/* <StarRating noOfStar={10} /> */}

      {/* Image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} /> */}

      {/* Load more data component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* QR code generator component*/}
      {/* <QRCodeGenerator /> */}

      {/* Light and Dark theme switch component */}
      {/* <LightDarkMode /> */}

      {/* Scroll indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Tab component */}
      {/* <TabTest /> */}

      {/* Custom modal component */}
      {/* <ModalTest /> */}

      {/* Hithub profile finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search auto conplete */}
      {/* <SearchAutoComplete /> */}

      {/* Tic tac toe component */}
      {/* <TicTacToe /> */}

      {/* Feature flag implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch - Custom Hook */}
      {/* <UseFetchHookTest />  */}

      {/* Use Onclick Outside Hook Test */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Window Resize Hook Test */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll To Top and Buttom */}
      {/* <ScrollToTopAndButtom /> */}

      {/* Scroll To a Particular Section*/}
      {/* <ScrollToSection /> */}
    </>
  );
}

export default App;
