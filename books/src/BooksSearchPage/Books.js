import styles from "./Books.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pp from "./no-img-icon.jpg";
import React from "react";
function Books(props) {
  const [fet, onfet] = useState(false);
  const query = useSelector((state) => {
    return state.counter.query;
  });
  // console.log(query);
  useEffect(() => {
    if (query !== " ") {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCDgRAXUYvnfJtU9bAOBlh0SU9Lu7MkhpE`
      )
        .then((e) => {
          return e.json();
        })
        .then((e) => {
          onfet(e.items);
          // console.log(e);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [query]);

  return (
    <React.Fragment>
      {query === " " && (
        <div className={styles.nosearch}>No Search Results</div>
      )}
      {query !== " " && (
        <div className={styles.books}>
          {fet &&
            fet.map((e, i) => {
              return (
                <Link to={`/book/${e.id}`} className={styles.book1} key={i}>
                  {/* <div className={styles.books1} key={i}> */}
                  <img
                    src={
                      e.volumeInfo.imageLinks !== undefined
                        ? e.volumeInfo.imageLinks.thumbnail
                        : `${pp}`
                    }
                    alt={`${e.volumeInfo.title} book cover`}
                  ></img>
                  <article>
                    <h1>{e?.volumeInfo?.title}</h1>
                    <p>{e.volumeInfo?.authors?.join(" ")}</p>
                  </article>
                  {/* </div> */}
                </Link>
              );
            })}
        </div>
      )}
    </React.Fragment>
  );
}
export default Books;
