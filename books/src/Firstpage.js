import Header from "./Homepage/Header.js";
import "./App.css";
import SectionA from "./Homepage/SectionA.js";
import SectionB from "./Homepage/SectionB.js";
import SectionC from "./Homepage/SectionC.js";
import Footer from "./Homepage/Footer.js";
import React from "react";
// import { useSelector } from "react-redux";
function Firstpage() {
  //   console.log(props.p);
  return (
    <React.Fragment>
      <Header></Header>
      <SectionA></SectionA>
      <SectionB></SectionB>
      <SectionC></SectionC>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default Firstpage;
