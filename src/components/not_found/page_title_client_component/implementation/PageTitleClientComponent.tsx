"use client";

import { useEffect, JSX } from "react";
import INDEX_PAGES_TITLE from "../../../../constants/pages/index/window/page_title/indexPageTitleConstants";
import NOT_FOUND_PAGE_TITLE from "../../../../constants/pages/not_found/window/page_title/notFoundPageTitleConstants";
import placeTheCurrentPageTitle from "../../../../utils/next/pages/agnostic_page_components/place_the_current_page_title/placeTheCurrentPageTitle";

function PageTitleClientComponent(): JSX.Element {
  useEffect(() => {
    placeTheCurrentPageTitle(document, NOT_FOUND_PAGE_TITLE);

    return () => {
      placeTheCurrentPageTitle(document, INDEX_PAGES_TITLE);
    };
  }, []);

  return <></>;
}

export default PageTitleClientComponent;
