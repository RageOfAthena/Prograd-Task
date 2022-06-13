import styles from "./Header.module.css";
import sprite from "./sprite.svg";
import { useState, useRef, useEffect } from "react";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../slice.js";
import { auth } from "../firebase-config.js";
// import {Redirect} from "react-router-dom";
function Header(props) {
  const [text, ontext] = useState(" ");
  const [signout, onsignout] = useState(false);
  const login = useSelector((state) => state.counter.login);
  const dispatch = useDispatch();
  const inputEl = useRef();
  const dropEl = useRef();
  const signEl = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (
        dropEl.current.contains(e.target) ||
        signEl.current.contains(e.target)
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
      <a
        href="#"
        className={styles.header_link}
        onClick={(e) => {
          console.log("here");
          e.preventDefault();
          dispatch(authActions.update({ login, query: "A" }));
        }}
      >
        <svg viewBox="0 0 51 60" className={styles.header_link_svg}>
          <path
            d="M49.476 7.94061L14.0575 0.0508435C13.9149 0.0165395 13.7684 0.000126015 13.6215 0.00199252C13.2302 -0.0154867 12.8426 0.0823555 12.5086 0.282898L0.922517 7.26074C0.633446 7.4357 0.396204 7.68188 0.234446 7.97475C0.0726886 8.26762 -0.00793391 8.59694 0.000615671 8.92988C0.000615671 8.9543 0.000615671 8.97873 0.000615671 9.00723V49.9013C0.0015007 50.3352 0.152191 50.7561 0.428167 51.0954C0.704143 51.4347 1.08915 51.6724 1.52051 51.7699L38.1889 59.9528C38.4753 60.0162 38.7726 60.0157 39.0587 59.9514C39.3449 59.8871 39.6127 59.7606 39.8423 59.5812C40.072 59.4018 40.2575 59.1742 40.3854 58.9151C40.5132 58.6559 40.58 58.372 40.5809 58.0842V17.1901C40.5813 16.7552 40.4305 16.3332 40.1535 15.9935C39.8765 15.6538 39.4897 15.4168 39.0568 15.3215L13.0401 9.51611C12.5346 9.4029 12.0039 9.49112 11.5647 9.76136C11.1255 10.0316 10.8138 10.4618 10.698 10.9573C10.698 10.9939 10.698 11.0265 10.698 11.0591C10.6748 11.1455 10.6623 11.2343 10.6606 11.3237V39.9353C10.6606 40.9164 11.8234 41.7184 12.6041 41.2746L19.5017 37.3298C19.7537 37.213 20.0383 37.1824 20.3101 37.243C20.5818 37.3035 20.8251 37.4516 21.0008 37.6636L27.886 44.6781C28.6626 45.4719 29.8253 45.191 29.8253 44.2058V17.186L36.6939 18.7168V55.6863L3.92077 48.3583V9.96393L13.8997 3.94687L47.0882 11.344V50.7073C47.0882 51.2159 47.2942 51.7036 47.661 52.0632C48.0278 52.4228 48.5253 52.6248 49.0441 52.6248C49.5628 52.6248 50.0603 52.4228 50.4271 52.0632C50.7939 51.7036 51 51.2159 51 50.7073V9.80923C50.9996 9.37452 50.8486 8.95283 50.5717 8.61331C50.2948 8.27379 49.9084 8.03659 49.476 7.94061V7.94061Z"
            fill="#FF7B6F"
          ></path>
        </svg>
        <h1 className={styles.header_link_head}>wyzr</h1>
      </a>
      <input
        type="search"
        placeholder="Search Our Library"
        className={styles.header_search}
        ref={inputEl}
        onChange={(e) => {
          ontext(e.target.value);
        }}
      ></input>
      <button
        className={styles.header_search_btn}
        onClick={(e) => {
          e.preventDefault();
          const sendEmail = text;
          const sendQueryText = JSON.parse(localStorage.getItem("cred")).user
            .email;

          fetch("http://localhost:3001/save", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: sendEmail,
              query: sendQueryText,
            }),
          })
            .then((res) => res.json())
            .then((res) => console.log(res));

          inputEl.current.value = " ";
          dispatch(authActions.update({ login, query: text }));
        }}
      >
        <svg>
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
      </button>
      <div
        className={styles.pp}
        ref={signEl}
        onClick={(e) => {
          onsignout((state) => !state);
        }}
      >
        <img src={props.url} alt="profile"></img>
      </div>
      {signout && (
        <div className={styles.signout} ref={dropEl}>
          <div className={styles.signout_child}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>user</title>
              <path d="M21 21v-2c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464h-8c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h8c0.829 0 1.577 0.335 2.121 0.879s0.879 1.292 0.879 2.121v2c0 0.552 0.448 1 1 1s1-0.448 1-1zM17 7c0-1.38-0.561-2.632-1.464-3.536s-2.156-1.464-3.536-1.464-2.632 0.561-3.536 1.464-1.464 2.156-1.464 3.536 0.561 2.632 1.464 3.536 2.156 1.464 3.536 1.464 2.632-0.561 3.536-1.464 1.464-2.156 1.464-3.536zM15 7c0 0.829-0.335 1.577-0.879 2.121s-1.292 0.879-2.121 0.879-1.577-0.335-2.121-0.879-0.879-1.292-0.879-2.121 0.335-1.577 0.879-2.121 1.292-0.879 2.121-0.879 1.577 0.335 2.121 0.879 0.879 1.292 0.879 2.121z"></path>
            </svg>
            <p className={styles.signout_child_p1}>My Profile</p>
          </div>
          <div className={styles.signout_child}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="32"
              viewBox="0 0 36 32"
            >
              <title>books</title>
              <path d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"></path>
              <path d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"></path>
              <path d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999 17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852 0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"></path>
            </svg>
            <p className={styles.signout_child_p2}>My Library</p>
          </div>
          <div className={styles.signout_child}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>edit-pencil</title>
              <path d="M12.3 3.7l4 4-12.3 12.3h-4v-4l12.3-12.3zM13.7 2.3l2.3-2.3 4 4-2.3 2.3-4-4z"></path>
            </svg>
            <p className={styles.signout_child_p3}>Edit Profile</p>
          </div>
          <div
            className={styles.signout_child}
            onClick={(e) => {
              signOut(auth)
                .then(() => {
                  localStorage.clear();
                  window.location.reload();
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>log-out</title>
              <path d="M19 10l-6-5v3h-7v4h7v3l6-5zM3 3h8v-2h-8c-1.1 0-2 0.9-2 2v14c0 1.1 0.9 2 2 2h8v-2h-8v-14z"></path>
            </svg>
            <p className={styles.signout_child_p4}>Sign Out</p>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;
