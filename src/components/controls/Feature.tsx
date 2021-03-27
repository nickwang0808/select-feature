import React, { ChangeEvent, useEffect, useState } from "react";
import { IFeature } from "../../mockData/featuresTree";
import usePrevious from "../../utilities/usePrevious";

interface IProps {
  parentNames: string;
  feature: IFeature;
  setParentTotal: React.Dispatch<React.SetStateAction<number>>;
}

export default function Feature({
  feature,
  parentNames,
  setParentTotal,
}: IProps) {
  const [total, setTotal] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const prevTotal = usePrevious(total);

  const fullName = `${parentNames}${parentNames.length ? "-" : ""}${
    feature.name
  }`;

  const handleCheck = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(checked);
    if (checked === false) {
      setTotal(0);
    } else {
      if (feature.price) {
        setTotal(feature.price);
      }
    }
  };

  useEffect(() => {
    if (total < prevTotal) {
      // remove the price

      const diff = prevTotal - total;

      setParentTotal((prev) => prev - diff);
    } else {
      setParentTotal((prev) => prev + total - prevTotal);
    }
  }, [total]);

  const componentLevelPrice =
    total !== 0
      ? `$${String(total)}`
      : feature.price
      ? `$${feature.price}`
      : "-";

  return (
    // remove the margin for the root level
    <div className={!parentNames.length ? "" : "margin-left"}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <span>
          {`${parentNames.length ? "Sub-feature " : "Feature "}`}
          {fullName}
        </span>
        <span> ({componentLevelPrice})</span>
      </label>

      {/* render children recursively, need to use a type guard here, do not put the condition in a variable */}
      {!feature.price &&
        isChecked &&
        feature.children?.map((subFeature, index) => {
          return (
            <Feature
              feature={subFeature}
              parentNames={fullName}
              key={fullName + index}
              setParentTotal={setTotal}
            />
          );
        })}
    </div>
  );
}
