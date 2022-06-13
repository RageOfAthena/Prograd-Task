import React from "react";
import styles from "./Header.module.css";
import { signInWithGoogle } from "../firebase-config.js";
// import { Link, Redirect } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { authActions } from "../slice.js";
import { useDispatch } from "react-redux";
// import { Redirect } from "react-router-dom";
import SignMenu from "./SignMenu.js";
function Header(props) {
  // const [login, isLogedin] = useState();
  // console.log(login);
  // props.onAuth(login);
  // const login = useSelector((state) => state.counter.login);
  const dispatch = useDispatch();
  const [signout, onsignout] = useState(false);
  const dropEl = useRef();
  const signEl = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (
        dropEl.current?.contains(e.target) ||
        signEl.current?.contains(e.target)
      ) {
        return;
      }
      onsignout(false);
    };
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  });
  return (
    <header className={styles.header}>
      <a href="#" className={styles.header_link}>
        <svg viewBox="0 0 51 60" className={styles.header_link_svg}>
          <path
            d="M49.476 7.94061L14.0575 0.0508435C13.9149 0.0165395 13.7684 0.000126015 13.6215 0.00199252C13.2302 -0.0154867 12.8426 0.0823555 12.5086 0.282898L0.922517 7.26074C0.633446 7.4357 0.396204 7.68188 0.234446 7.97475C0.0726886 8.26762 -0.00793391 8.59694 0.000615671 8.92988C0.000615671 8.9543 0.000615671 8.97873 0.000615671 9.00723V49.9013C0.0015007 50.3352 0.152191 50.7561 0.428167 51.0954C0.704143 51.4347 1.08915 51.6724 1.52051 51.7699L38.1889 59.9528C38.4753 60.0162 38.7726 60.0157 39.0587 59.9514C39.3449 59.8871 39.6127 59.7606 39.8423 59.5812C40.072 59.4018 40.2575 59.1742 40.3854 58.9151C40.5132 58.6559 40.58 58.372 40.5809 58.0842V17.1901C40.5813 16.7552 40.4305 16.3332 40.1535 15.9935C39.8765 15.6538 39.4897 15.4168 39.0568 15.3215L13.0401 9.51611C12.5346 9.4029 12.0039 9.49112 11.5647 9.76136C11.1255 10.0316 10.8138 10.4618 10.698 10.9573C10.698 10.9939 10.698 11.0265 10.698 11.0591C10.6748 11.1455 10.6623 11.2343 10.6606 11.3237V39.9353C10.6606 40.9164 11.8234 41.7184 12.6041 41.2746L19.5017 37.3298C19.7537 37.213 20.0383 37.1824 20.3101 37.243C20.5818 37.3035 20.8251 37.4516 21.0008 37.6636L27.886 44.6781C28.6626 45.4719 29.8253 45.191 29.8253 44.2058V17.186L36.6939 18.7168V55.6863L3.92077 48.3583V9.96393L13.8997 3.94687L47.0882 11.344V50.7073C47.0882 51.2159 47.2942 51.7036 47.661 52.0632C48.0278 52.4228 48.5253 52.6248 49.0441 52.6248C49.5628 52.6248 50.0603 52.4228 50.4271 52.0632C50.7939 51.7036 51 51.2159 51 50.7073V9.80923C50.9996 9.37452 50.8486 8.95283 50.5717 8.61331C50.2948 8.27379 49.9084 8.03659 49.476 7.94061V7.94061Z"
            fill="#FF7B6F"
          ></path>
        </svg>
        <h1 className={styles.header_link_head}>wyzr</h1>
      </a>
      {localStorage.getItem("cred") && (
        <SignMenu sig={signout} dropEl={dropEl} signEl={signEl}></SignMenu>
      )}
      {!localStorage.getItem("cred") && (
        <button
          className={styles.header_btn}
          onClick={(e) => {
            signInWithGoogle()
              .then((result) => {
                dispatch(
                  authActions.update({
                    login: JSON.stringify(result),
                    query: "A",
                  })
                );
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            className={styles.svgs}
            // style=" fill:#undefined;"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <p>Signin With Google</p>
        </button>
      )}
    </header>
  );
}
export default Header;
