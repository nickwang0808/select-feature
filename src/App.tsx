import React, { useState } from "react";
import "./App.css";
import Feature from "./components/controls/Feature";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { mockFeatures } from "./mockData/featuresTree";

export default function App() {
  const [total, setTotal] = useState(0);

  return (
    <div className="container">
      <Header />
      <Content>
        {mockFeatures.map((feature, index) => {
          return (
            <Feature
              feature={feature}
              parentNames={""}
              key={`${index}`}
              setParentTotal={setTotal}
            />
          );
        })}
      </Content>
      <Footer total={total} />
    </div>
  );
}
