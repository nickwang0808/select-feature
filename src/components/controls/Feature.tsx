import React, { useEffect, useState } from "react";
import { IFeature } from "../../mockData/featuresTree";
import usePrevious from "../../utilities/usePrevious";

interface IProps {
  parentNames: string;
  feature: IFeature;
  setParentTotal: React.Dispatch<React.SetStateAction<number>>;
  parentTotal: number;
  checkedChildren: string[];
  setCheckedChildren: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Feature({
  feature: { children, name, price },
  parentNames,
  setParentTotal,
  parentTotal,
  checkedChildren,
  setCheckedChildren,
}: IProps) {
  const [total, setTotal] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  /* need to dynamically apply discount, so use a state to store it */
  const [_price, _setPrice] = useState<number | null>(price);
  /* this is used strictly for children to keep track of which one is checked */
  const [_checkedChildren, _setCheckedChildren] = useState<string[]>([]);

  const prevTotal = usePrevious(total);

  /* We use checkedChildren in parent to keep track of who checked, we apply discount when there are more than 1 checked,
however, we DO NOT apply discount to self if self is the only one checked, or it's the first one being checked */
  useEffect(() => {
    if (price) {
      const { length } = checkedChildren;
      if (length > 0) {
        if (length === 1 && isChecked) {
          return _setPrice(price);
          // if self is the first one being checked, no discount is applied to self at all
        } else if (checkedChildren.indexOf(name) === 0) {
          return _setPrice(price);
        } else {
          _setPrice(price / 2);
        }
      } else {
        /* this this to undo discount */
        _setPrice(price);
      }
    }
  }, [checkedChildren, isChecked, name, price]);

  /* when we check self, let parent know we checked and update self price (if applicable) to self total first */
  useEffect(() => {
    if (isChecked === false) {
      setTotal(0);
      setCheckedChildren((prev) => prev.filter((e) => e !== name));
    } else {
      if (_price) {
        setTotal(_price);
      }
      setCheckedChildren((prev) => [...prev, name]);
    }
  }, [isChecked, _price, name, setCheckedChildren]);

  /* When total changes we update the parent's total */
  useEffect(() => {
    if (total < prevTotal) {
      /* because the price is cascaded up, we need to only update the difference to parent */
      const diff = prevTotal - total;
      setParentTotal((prev) => prev - diff);
    } else {
      const diff = total - prevTotal;
      setParentTotal((prev) => prev + diff);
    }
  }, [total, prevTotal, setParentTotal]);

  const featureFullName = `${parentNames}${
    parentNames.length ? "-" : ""
  }${name}`;

  const priceDisplay =
    total !== 0 ? `$${String(total)}` : _price ? `$${_price}` : "-";

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

      {/* render children recursively, assuming feature with children does not have price */}
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
              checkedChildren={_checkedChildren}
              setCheckedChildren={_setCheckedChildren}
            />
          );
        })}
    </div>
  );
}
