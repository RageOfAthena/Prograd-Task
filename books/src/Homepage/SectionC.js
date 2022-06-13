import styles from "./SectionC.module.css";
import pp1 from "./PP/pp1.jpg";
import pp2 from "./PP/pp2.jpg";
import pp3 from "./PP/pp3.jpg";
import pp4 from "./PP/pp4.jpg";
function SectionC() {
  return (
    <main className={styles.main}>
      <h1 className={styles.head}>Join a growing community of readers</h1>
      <div className={styles.top}>
        <article className={`${styles.article} ${styles.article_1}`}>
          <div className={styles.article_header}>
            <img
              src={pp1}
              alt="profile picture"
              className={styles.article_header_pp}
            ></img>
            <h1 className={styles.article_header_title}>
              <a href="#">
                Mark Alexander
                <div className={styles.article_header_title1}>
                  @markalexander1
                </div>
              </a>
            </h1>
            <svg
              className={`r-1cvl2hr r-4qtqp9 r-yyyyoo r-6zzn7w r-19fsva8 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-q1j0wu ${styles.article_header_svg}`}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <p className={styles.article_para}>
            It’s finally here!{" "}
            <a href="#" className={styles.article_span}>
              @tanaypratap
            </a>{" "}
            1st book The Productive Professional😎 available{" "}
            <a href="#" className={styles.article_span}>
              @ http://wyzr.in
            </a>
          </p>
          <p className={styles.article_para}>
            Btw Tanay, when is your book on “How to name things” is coming
            out?😝
          </p>
          <img
            className={styles.article_img}
            src="https://pbs.twimg.com/media/FCIgqYpVgAE3y7T?format=jpg&name=small"
            alt="advertisement"
          ></img>
          <p className={`${styles.article_para} ${styles.article_parad}`}>
            3:07 PM · Oct 20, 2021
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={`r-illlq6 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${styles.article_svgd}`}
            >
              <g>
                <path d="M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z"></path>
                <circle cx="12" cy="8.042" r="1.25"></circle>
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
              </g>
            </svg>
          </p>
          <hr className={styles.hr}></hr>
          <div className={styles.symbols}>
            <div className={styles.symbols_1}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              <h6>82</h6>
            </div>
            <div className={`${styles.symbols_1} ${styles.symbols_2}`}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              <h6>Reply</h6>
            </div>
            <div className={`${styles.symbols_1} ${styles.symbols_3}`}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
              <h6>Share</h6>
            </div>
          </div>
          <button className={styles.btn}>Read 2 replies</button>
        </article>
        <article className={`${styles.article} ${styles.article_2}`}>
          <div
            className={`${styles.article_header} ${styles.article_header_two}`}
          >
            <img
              src={pp2}
              alt="profile picture"
              className={styles.article_header_pp}
            ></img>
            <h1
              className={`${styles.article_header_title} ${styles.article_2_head}`}
            >
              <a href="#">
                Andrew Simmons
                <div className={styles.article_header_title1}>@andewsimms</div>
              </a>
            </h1>
            <svg
              className={`r-1cvl2hr r-4qtqp9 r-yyyyoo r-6zzn7w r-19fsva8 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-q1j0wu ${styles.article_header_svg}`}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <p className={styles.article_para}>
            Ever wondered how @tanaypratap does all this while working full
            time? If Yes, then the book on "Productivity" is here written by the
            man himself with many productivity tips and myth busters. A
            must-read one for everyone who's struggling with Procrastination &
            Distractions. Link👇
          </p>
          <img
            className={styles.article_img}
            src="https://pbs.twimg.com/media/FCI1q_wUYBAItFB?format=jpg&name=360x360"
            alt="advertisement"
          ></img>
          <p
            className={`${styles.article_para} ${styles.article_parad} ${styles.article_parad_i}`}
          >
            4:47 PM · Oct 20, 2021
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={`r-illlq6 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${styles.article_svgd}`}
            >
              <g>
                <path d="M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z"></path>
                <circle cx="12" cy="8.042" r="1.25"></circle>
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
              </g>
            </svg>
          </p>
          <hr className={styles.hr}></hr>
          <div className={styles.symbols}>
            <div className={styles.symbols_1}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              <h6>155</h6>
            </div>
            <div className={`${styles.symbols_1} ${styles.symbols_2}`}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              <h6>Reply</h6>
            </div>
            <div className={`${styles.symbols_1} ${styles.symbols_3}`}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
              <h6>Share</h6>
            </div>
          </div>
          <button className={styles.btn}>Read 7 replies</button>
        </article>
        <article className={`${styles.article} ${styles.article_3}`}>
          <div className={styles.article_header}>
            <img
              src={pp3}
              alt="profile picture"
              className={styles.article_header_pp}
            ></img>
            <h1 className={styles.article_header_title}>
              <a>
                Anita Chopra
                <div className={styles.article_header_title1}>@anichopra</div>
              </a>
            </h1>
            <svg
              className={`r-1cvl2hr r-4qtqp9 r-yyyyoo r-6zzn7w r-19fsva8 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-q1j0wu ${styles.article_header_svg}`}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <g>
                <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
              </g>
            </svg>
          </div>
          <p className={styles.article_para}>
            Best 500 bucks you can spend for a year @ http://wyzr.in
          </p>
          <article
            className={`${styles.article} ${styles.article_1} ${styles.child}`}
          >
            <div className={styles.child1}>
              <div className={styles.article_header}>
                <img
                  src={pp1}
                  alt="profile picture"
                  className={styles.article_header_pp}
                ></img>
                <h1 className={styles.article_header_title}>
                  <a href="#">
                    Mark Alexander
                    <div className={styles.article_header_title1}>
                      @markalexander1
                    </div>
                  </a>
                </h1>
              </div>
              <p className={styles.article_para}>
                It’s finally here!{" "}
                <a href="#" className={styles.article_span}>
                  @tanaypratap
                </a>{" "}
                1st book The Productive Professional😎 available{" "}
                <a href="#" className={styles.article_span}>
                  @ http://wyzr.in
                </a>
              </p>
              <p className={styles.article_para}>
                Btw Tanay, when is your book on “How to name things” is coming
                out?😝
              </p>
            </div>
            <img
              className={`${styles.article_img} ${styles.child_img}`}
              src="https://pbs.twimg.com/media/FCIgqYpVgAE3y7T?format=jpg&name=small"
              alt="advertisement"
            ></img>
          </article>
          <p
            className={`${styles.article_para} ${styles.article_parad} ${styles.article_parad_i}`}
          >
            9:32 PM · Oct 20, 2021
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className={`r-illlq6 r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr ${styles.article_svgd}`}
            >
              <g>
                <path d="M12 18.042c-.553 0-1-.447-1-1v-5.5c0-.553.447-1 1-1s1 .447 1 1v5.5c0 .553-.447 1-1 1z"></path>
                <circle cx="12" cy="8.042" r="1.25"></circle>
                <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
              </g>
            </svg>
          </p>
          <hr className={styles.hr}></hr>
          <div className={styles.symbols}>
            <div className={styles.symbols_1}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                </g>
              </svg>
              <h6>6</h6>
            </div>
            <div className={`${styles.symbols_1} ${styles.symbols_2}`}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
                </g>
              </svg>
              <h6>Reply</h6>
            </div>
            <div className={`${styles.symbols_1} ${styles.symbols_3}`}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className={`r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi`}
              >
                <g>
                  <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                  <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                </g>
              </svg>
              <h6>Share</h6>
            </div>
          </div>
          <button className={styles.btn}>Read 1 reply</button>
        </article>
        {/* <article className={`${styles.article} ${styles.article_4}`}>
          <div className={styles.article_header}>
            <img
              src={pp4}
              alt="profile picture"
              className={styles.article_header_pp}
            ></img>
          </div>
        </article> */}
      </div>
    </main>
  );
}
export default SectionC;
