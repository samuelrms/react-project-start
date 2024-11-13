import { Stack } from "../../components";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <Stack elementType="section" className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Sobre Nós</h1>
    </Stack>
  );
};
