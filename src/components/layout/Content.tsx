import React from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import Feature from "../controls/Feature";

export default function Content() {
  const { features, totalPrice } = useSelector(
    ({ subPref }: IAppState) => subPref
  );

  return (
    <div className="content">
      {features.map((feature, index) => {
        return (
          <Feature
            feature={feature}
            parentNames={""}
            position={`${index}`}
            key={`${index}`}
          />
        );
      })}
    </div>
  );
}
