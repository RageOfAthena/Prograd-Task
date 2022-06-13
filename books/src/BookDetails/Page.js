import React from "react";
import pp from "../BooksSearchPage/no-img-icon.jpg";
import styles from "./Page.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
let languageNames = new Intl.DisplayNames(["en"], { type: "language" });
function Page() {
  const [fet, onfet] = useState(false);
  const [resultk, onresultk] = useState(null);
  const { id } = useParams();
  const query = useSelector((state) => {
    return state.counter.query;
  });

  useEffect(() => {
    if (query !== " ") {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyCDgRAXUYvnfJtU9bAOBlh0SU9Lu7MkhpE`
      )
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          onfet(e);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);
  // console.log(fet.items);
  useEffect(() => {
    fet.items?.forEach((e, i, arr) => {
      if (e.id === id) {
        onresultk(e);
      }
    });
  }, [fet.items]);

  return (
    <React.Fragment>
      <section className={styles.body}>
        <div className={styles.img}>
          <img
            src={
              resultk?.volumeInfo?.imageLinks?.thumbnail === undefined
                ? pp
                : resultk?.volumeInfo?.imageLinks?.thumbnail
            }
          />
        </div>
        <div className={styles.content}>
          <h1>{resultk?.volumeInfo?.title}</h1>
          <p className={styles.authors}>
            <span className={styles.bold}>Authors :</span>
            {resultk?.volumeInfo?.authors === undefined
              ? "No Information Available"
              : resultk?.volumeInfo?.authors?.join(",")}
          </p>
          <p className={styles.publishers}>
            <span className={styles.bold}>Publisher :</span>{" "}
            {resultk?.volumeInfo?.publisher === undefined
              ? "No Information Available"
              : resultk?.volumeInfo?.publisher}
          </p>
          <p className={styles.description}>
            <span className={styles.bold}>Description :</span>{" "}
            {resultk?.volumeInfo?.description === undefined
              ? "No Information Available"
              : resultk?.volumeInfo?.description}
          </p>
          <p className={styles.pubdate}>
            <span className={styles.bold}>Published date :</span>
            {resultk?.volumeInfo?.publishedDate !== undefined
              ? resultk?.volumeInfo?.publishedDate
              : "No Information Available"}
          </p>
          <p className={styles.page}>
            <span className={styles.bold}>Pages :</span>{" "}
            {resultk?.volumeInfo?.pageCount === undefined
              ? "No Information Available"
              : resultk?.volumeInfo?.pageCount}{" "}
          </p>
          <p className={styles.lang}>
            <span className={styles.bold}>Language :</span>{" "}
            {resultk?.volumeInfo?.language === undefined
              ? "No Information Available"
              : languageNames.of(resultk?.volumeInfo?.language)}
          </p>
        </div>
      </section>
    </React.Fragment>
  );
}
export default Page;
