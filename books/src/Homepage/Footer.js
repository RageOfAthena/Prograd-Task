import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.footer}>
      <address className={styles.address}>
        <h1 className={styles.head}>Wyzr</h1>
        <h2 className={styles.head2}>Company</h2>
        <p className={styles.para1}>Contact Us</p>
        <p className={styles.para2}>About Us</p>
        <p className={styles.para3}>Careers</p>
        <p className={styles.para4}>I Am An Author</p>
        <p className={styles.para5}>FAQ</p>
        <h2 className={styles.head3}>Other Link</h2>
        <p className={styles.parag1}>Terms of Use</p>
        <p className={styles.parag2}>Privacy Policy</p>
        <p className={styles.parag3}>Community Guidline</p>
        <p className={styles.parag4}>Refund Policy</p>
      </address>
    </footer>
  );
}
export default Footer;
