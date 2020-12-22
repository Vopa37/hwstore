import React from "react";
import { DescriptionText } from "./styled";

const DescriptionLine = (props) => {
  return (
    <div className="d-flex row justify-content-between">
      <div className="col-5">
        <DescriptionText className="text-right">{props.title}</DescriptionText>
      </div>
      <div className="col-7">
        <DescriptionText className="text-left">{props.text}</DescriptionText>
      </div>
    </div>
  );
};

export default DescriptionLine;
