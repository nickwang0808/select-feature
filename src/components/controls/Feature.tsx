import React, { useEffect, useState } from "react";
import { IFeature } from "../../mockData/featuresTree";
import usePrevious from "../../utilities/usePrevious";

interface IProps {
  parentNames: string;
  feature: IFeature;
  setParentTotal: React.Dispatch<React.SetStateAction<number>>;
  parentTotal: number;
}

export default function Feature({
  feature: { children, name, price },
  parentNames,
  setParentTotal,
  parentTotal,
}: IProps) {
  const [total, setTotal] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const prevTotal = usePrevious(total);

  const featureFullName = `${parentNames}${
    parentNames.length ? "-" : ""
  }${name}`;

  const priceWithPossibleDiscount = price
    ? parentTotal
      ? price / 2
      : price
    : null;

  const priceDisplay =
    total !== 0
      ? `$${String(total)}`
      : priceWithPossibleDiscount
      ? `$${priceWithPossibleDiscount}`
      : "-";

  useEffect(() => {
    if (isChecked === false) {
      setTotal(0);
    } else {
      if (priceWithPossibleDiscount) {
        setTotal(priceWithPossibleDiscount);
      }
    }
    // we don't want to re-render because self triggered parent to have a total and
    // then apply discount to self to cause another re-render
    // eslint-disable-next-line
  }, [isChecked]);

  useEffect(() => {
    if (total < prevTotal) {
      // remove children total from total
      const diff = prevTotal - total;
      setParentTotal((prev) => prev - diff);
    } else {
      const diff = total - prevTotal;
      setParentTotal((prev) => prev + diff);
    }
  }, [total, prevTotal, setParentTotal]);

  return (
    // remove the margin for the root level
    <div className={!parentNames.length ? "" : "margin-left"}>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={({ target }) => setIsChecked(target.checked)}
        />
        <span>
          {`${parentNames.length ? "Sub-feature " : "Feature "}`}
          {featureFullName}
        </span>
        <span> ({priceDisplay})</span>
      </label>

      {/* render children recursively, need to use a type guard here, do not put the condition in a variable */}
      {!price &&
        isChecked &&
        children?.map((subFeature, index) => {
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
