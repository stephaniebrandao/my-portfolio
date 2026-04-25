import type { ReactNode } from "react";
import styles from "./quickConnect.module.css"

type QuickCharacteristics = {
    children: ReactNode;
}

function QuickConnect ({children}: QuickCharacteristics) {
    return (
        <button className={styles.childrenContainer}>{children}</button>
    )
}

export default QuickConnect;