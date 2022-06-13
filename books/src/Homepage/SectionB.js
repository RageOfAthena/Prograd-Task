import styles from "./SectionB.module.css";
function SectionB() {
  return (
    <main className={styles.main}>
      <div className={styles.section_content_1}>
        <h1 className={styles.head}>Read all books at the price of one!</h1>
        <p className={`${styles.para} ${styles.para1}`}>
          Access all books at the price of one physical book bought from the
          store.
        </p>
      </div>
      <div className={styles.section_img_1}>
        <img
          src="https://www.wyzr.in/features-1.png"
          alt="state of art speaker"
        />
      </div>
      <div className={styles.section_img_2}>
        <img
          src="https://www.wyzr.in/features-2.png"
          alt="state of art speaker"
        />
      </div>
      <div className={styles.section_content_2}>
        <h1 className={styles.head}>
          Read smarter.
          <div>Learn Better.</div>
        </h1>
        <p className={`${styles.para} ${styles.para2}`}>
          Relevant topics, smooth reading interface, and useful learning
          features make for a great reading experience.
        </p>
      </div>
    </main>
  );
}
export default SectionB;
