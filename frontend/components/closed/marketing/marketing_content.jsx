import React from "react";

import AsanaStatement from "./asana_statement";
import LandingPicture from "./landing_picture";

const MarketingContent = (props) => {
  return (
    <div className="marketing-content">
      <AsanaStatement />
      <LandingPicture />
    </div>
  );
};

export default MarketingContent;
