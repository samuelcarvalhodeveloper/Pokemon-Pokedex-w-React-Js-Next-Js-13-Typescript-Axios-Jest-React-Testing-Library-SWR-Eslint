import { JSX } from "react";
import SmoothScroll from "../components/index/smooth_scroll/implementation/SmoothScroll";
import MainContent from "../components/index/main_content/main_content_component/implementation/MainContent";

function Index(): JSX.Element {
  return (
    <>
      <MainContent />
      <SmoothScroll />
    </>
  );
}

export default Index;
