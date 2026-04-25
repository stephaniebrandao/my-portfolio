import styles from "./card.module.css"

type CardCharacteristics = {
    image: string,
    title: string,
    subtitle: string
}

function Card ({image, title, subtitle}: CardCharacteristics) {
    return (
        <div className={styles.container}>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <button>View on GitHub</button>
        </div>
    )
}

export default Card;