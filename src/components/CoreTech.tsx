import type { ReactNode } from "react";
import styles from "./coreTech.module.css";

type CoreTechProps = {
  children: ReactNode;
  subtitle: string;
};

function CoreTech({ children, subtitle }: CoreTechProps) {
  return (
    <div className={styles.containerDiv}>
      <span className={styles.childrenSpan}>{children}</span>
      <p className={styles.subtitleP}>{subtitle}</p>
    </div>
  );
}

export default CoreTech;
