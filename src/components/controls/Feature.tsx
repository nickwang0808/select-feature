import React, { ChangeEvent, useEffect, useState } from "react";
import { IFeature } from "../../mockData/featuresTree";
import usePrevious from "../../utilities/usePrevious";

interface IProps {
  parentNames: string;
  feature: IFeature;
  setParentTotal: React.Dispatch<React.SetStateAction<number>>;
  parentTotal: number;
}

export default function Feature({
  feature,
  parentNames,
  setParentTotal,
  parentTotal,
}: IProps) {
  const [total, setTotal] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const prevTotal = usePrevious(total);

  const featureFullName = `${parentNames}${parentNames.length ? "-" : ""}${
    feature.name
  }`;

  const priceWithPossibleDiscount = feature.price
    ? parentTotal
      ? feature.price / 2
      : feature.price
    : null;

  const componentLevelPrice =
    total !== 0
      ? `$${String(total)}`
      : priceWithPossibleDiscount
      ? `$${priceWithPossibleDiscount}`
      : "-";

  const handleCheck = ({
    target: { checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(checked);
  };

  useEffect(() => {
    if (isChecked === false) {
      setTotal(0);
    } else {
      if (priceWithPossibleDiscount) {
        setTotal(priceWithPossibleDiscount);
      }
    }
  }, [isChecked]);

  useEffect(() => {
    if (total < prevTotal) {
      // remove children total from total
      const diff = prevTotal - total;
      setParentTotal((prev) => prev - diff);
    } else {
      setParentTotal((prev) => prev + total - prevTotal);
    }
  }, [total]);

  return (
    // remove the margin for the root level
    <div className={!parentNames.length ? "" : "margin-left"}>
      <label>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <span>
          {`${parentNames.length ? "Sub-feature " : "Feature "}`}
          {featureFullName}
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
              parentNames={featureFullName}
              key={featureFullName + index}
              setParentTotal={setTotal}
              parentTotal={total}
            />
          );
        })}
    </div>
  );
}
