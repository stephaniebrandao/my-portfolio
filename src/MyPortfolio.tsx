import { FaAt, FaGithub, FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import stephanie from "./images/stephanie.png";
import playground from "./images/css-playground.png";
import gameboy from "./images/gameboy.png";
import flore from "./images/flore-odonto.png"
import styles from "./myPortfolio.module.css";
import QuickConnect from "./components/QuickConnect";
import Card from "./components/Card";

function MyPortfolio() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <head>
      <link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />
      <title>Hello, World! I'm Stephanie!</title>
    </head>
      <nav>
        <div>
          <img
            className={styles.imgStephanie}
            src={stephanie}
            alt="Dev Stephanie Brandao"
          />
        </div>
        <div className={styles.firstContainer}>
          <div>
            <h1>Stephanie Brandao</h1>
            <h2>Front-End Developer</h2>
            <p>
              Building performant, accessible, and user-centric web applications
              with modern tech.
            </p>
          </div>
          <div className={styles.quickContainer}>
            <h3>Quick Connect</h3>
            <div className={styles.insideQuickContainer}>
              <a
                href={"https://www.linkedin.com/in/stephanie-brandao"}
                target="_blank"
              >
                <QuickConnect>
                  <FaLinkedinIn />
                </QuickConnect>
              </a>
              <a href={"https://github.com/stephaniebrandao"} target="_blank">
                <QuickConnect>
                  <FaGithub />
                </QuickConnect>
              </a>
              <a href={"mailto: salbuquerque.md@gmail.com"}>
                <QuickConnect>
                  <FaAt />
                </QuickConnect>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section className={styles.secondContainer}>
        <h2>About Me</h2>
        <p>
          I am a frontend developer with a keen eye for design and a passion for
          performance. I thrive on turning ideas into functional code. With a
          strong foundation in React and a focus on clean, reusable components,
          I craft web experiences that are as enjoyable to build as they are to
          use. Let's create something great together!
        </p>
      </section>

      <div className={styles.cards}>
        <Card
          image={playground}
          title={"CSS Playground"}
          subtitle={
            "Interactive web tool that lets you customize card styles in real-time."
          }
          link={"https://github.com/stephaniebrandao/css-playground.git"}
        />
        <Card
          image={gameboy}
          title={"Game Boy Color"}
          subtitle={"A GameBoy Color project to show the first 151 Pokémons."}
          link={"https://github.com/stephaniebrandao/PokemonGameBoyColor.git"}
        />
        <Card
          image={flore}
          title={"Flore Odontológica"}
          subtitle={
            "A professional website, elevating the clinic's digital presence."
          }
          link={"https://github.com/stephaniebrandao/project-flore-odontologica.git"}
        />
        <Card
          image={playground}
          title={"CSS Playground"}
          subtitle={
            "Interactive web tool that lets you customize card styles in real-time."
          }
          link={""}
        />
        <Card
          image={playground}
          title={"CSS Playground"}
          subtitle={
            "Interactive web tool that lets you customize card styles in real-time."
          }
          link={""}
        />
      </div>

      <footer>
        <FaRegCopyright />
        <p>
          {currentYear} Stephanie Brandao. All rights reserved. |{" "}
          <a
            className={styles.linkCV}
            href="/public/CV-frontend-stephanie-brandao.pdf"
            download
          >
            Get CV (PDF)
          </a>
        </p>
      </footer>
    </>
  );
}

export default MyPortfolio;
