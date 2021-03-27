import React, { ReactNode } from "react";

export default function Content({ children }: { children: ReactNode }) {
  return <div className="content">{children}</div>;
}
