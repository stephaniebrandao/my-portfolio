import styles from "./card.module.css";

type CardCharacteristics = {
  image: string;
  title: string;
  subtitle: string;
  gitLink: string;
  onlineLink: string;
};

function Card({
  image,
  title,
  subtitle,
  gitLink,
  onlineLink,
}: CardCharacteristics) {
  return (
    <div className={styles.container}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <div className={styles.btns}>
        <a href={gitLink} target="_blank">
          <button>View on GitHub</button>
        </a>
        <a href={onlineLink} target="_blank">
          <button>View website</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
