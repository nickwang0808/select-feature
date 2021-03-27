import React, { ChangeEvent, useState } from "react";
import { IFeature } from "../../redux/subPrefSlice";

interface IProps {
  parents: string;
  feature: IFeature;
}

export default function Feature({ feature, parents }: IProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);

  let comp: JSX.Element;
  if (typeof feature.value === "number") {
    comp = (
      <label>
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <span>{`${parents}${parents.length !== 0 ? "-" : ""}${
          feature.name
        }`}</span>
        <span> (${feature.value})</span>
      </label>
    );
  } else {
    comp = (
      <>
        <label>
          <input type="checkbox" checked={checked} onChange={handleCheck} />
          <span>{`${parents}${parents.length !== 0 ? "-" : ""}${
            feature.name
          }`}</span>
          <span> (-)</span>
        </label>
        {feature.value.map((subFeature) => {
          return (
            <Feature
              feature={subFeature}
              parents={`${parents}${parents.length !== 0 ? "-" : ""}${
                feature.name
              }`}
            />
          );
        })}
      </>
    );
  }

  return (
    <div className={parents.length === 0 ? "" : "margin-left"}>{comp}</div>
  );
}
