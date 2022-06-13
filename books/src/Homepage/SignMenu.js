import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config.js";
import styles from "../BooksSearchPage/Header.module.css";
function SignMenu(props) {
  const [signout, onsignout] = useState(props.sig);

  //   const dropEl = useRef();
  //   const signEl = useRef();
  return (
    <React.Fragment>
      <div
        className={styles.pp}
        ref={props.signEl}
        onClick={(e) => {
          onsignout((state) => !state);
        }}
      >
        <img
          src={JSON.parse(localStorage.getItem("cred")).user.photoURL}
          alt="profile"
        ></img>
      </div>
      {signout && (
        <div className={styles.signout} ref={props.dropEl}>
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
    </React.Fragment>
  );
}
export default SignMenu;
