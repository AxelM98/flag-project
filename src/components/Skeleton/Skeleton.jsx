import React from "react";
import "./skeleton.scss";

const Skeleton = () => {
  return (
    <div className="skeletonCard">
      <div className="skeleton skeletonImg"></div>
      <div className="skeleton skeletonTitle"></div>
      <div className="skeleton skeletonText"></div>
      <div className="skeleton skeletonText"></div>
    </div>
  );
};

export default Skeleton;
