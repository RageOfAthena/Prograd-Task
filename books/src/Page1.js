import Header1 from "./BooksSearchPage/Header.js";
import Books from "./BooksSearchPage/Books.js";
import React from "react";
// import { useSelector } from "react-redux";
function Page1() {
  //   const logid = useSelector((state) => state.counter.login);
  //   if (!logid) {
  //     window.location.assign("/");
  //   }
  //   console.log(JSON.parse(localStorage.getItem("cred")).user.photoURL);
  return (
    <React.Fragment>
      <Header1
        url={JSON.parse(localStorage.getItem("cred")).user.photoURL}
      ></Header1>
      <Books></Books>
    </React.Fragment>
  );
}
export default Page1;
