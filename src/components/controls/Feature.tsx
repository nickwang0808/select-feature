import React, { ChangeEvent, useState } from "react";

export default function Feature() {
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleCheck} />
      <span>Feature A</span>
    </label>
  );
}
