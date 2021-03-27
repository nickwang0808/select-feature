import React, { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IAppState } from "../../redux/store";
import { IFeature, toggleFeature } from "../../redux/subPrefSlice";

interface IProps {
  parentNames: string;
  position: string;
  feature: IFeature;
}

export default function Feature({ feature, parentNames, position }: IProps) {
  const { totalPrice, features } = useSelector(
    ({ subPref }: IAppState) => subPref
  );

  const fullName = `${parentNames}${parentNames.length ? "-" : ""}${
    feature.name
  }`;

  const hasPrice = typeof feature.value === "number";

  const dispatch = useDispatch();

  const handleCheck = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) =>
    dispatch(
      toggleFeature({
        isCheck: checked,
        path: position,
      })
    );

  return (
    // remove the margin for the root level
    <div className={!parentNames.length ? "" : "margin-left"}>
      <label>
        <input
          type="checkbox"
          checked={feature.isChecked}
          onChange={handleCheck}
        />
        <span>
          {`${parentNames.length ? "Sub-feature " : "Feature "}`}
          {fullName}
        </span>
        <span> ({`${hasPrice ? `$${feature.value}` : "-"}`})</span>
      </label>

      {/* render children recursively, need to use a type guard here, do not put the condition in a variable */}
      {typeof feature.value !== "number" &&
        feature.value.map((subFeature, index) => {
          const childPosition = `${position}.${index}`;
          return (
            <Feature
              feature={subFeature}
              parentNames={fullName}
              position={childPosition}
              key={childPosition}
            />
          );
        })}
    </div>
  );
}
