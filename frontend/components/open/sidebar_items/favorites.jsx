import React from "react";
import SvgUtil from "../../../util/svg_util";

const Favorites = () => {
  return (
    <div className="favorites">
      <div className="favorites-content">
        <p className="empty-text">
          { "Favorite projects by clicking the " }
          { SvgUtil.renderStar() }
        </p>
      </div>
    </div>
  );
};

export default Favorites;
