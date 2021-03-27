import React from "react";

interface IProps {
  total: number;
}

export default function Footer({ total }: IProps) {
  return (
    <div>
      <hr />
      <div className="footer-container">
        <div className="pricing">
          <strong>Total: ${total} / mo</strong>
        </div>
        <button className="save-button">Save</button>
      </div>
    </div>
  );
}
