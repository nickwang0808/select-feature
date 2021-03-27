import React from "react";
import "./App.css";
import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
