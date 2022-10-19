import React from "react";

import AppBarComponent from "../../shared/app-bar/app-bar.component";
import FooterComponent from "../../shared/footer-component/footer.component";
import TopProduct from "./top/top.component";
import FloatingActionButton from "../../shared/action-button/action.button.component";

const MainPageComponent = () => {
  return (
    <React.Fragment>
      <AppBarComponent />
      <TopProduct />
      <TopProduct />
      <FloatingActionButton />
      <FooterComponent />
    </React.Fragment>
  )
};

export default MainPageComponent;