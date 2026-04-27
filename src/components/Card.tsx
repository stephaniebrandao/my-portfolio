import styles from "./card.module.css";

type CardCharacteristics = {
  image: string;
  title: string;
  subtitle: string;
  link: string;
};

function Card({ image, title, subtitle, link }: CardCharacteristics) {
  return (
    <div className={styles.container}>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <a href={link} target="_blank">
        <button>View on GitHub</button>
      </a>
    </div>
  );
}

export default Card;
