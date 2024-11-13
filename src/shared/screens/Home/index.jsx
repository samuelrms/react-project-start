import { Stack } from "../../components";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <Stack elementType="section" className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Página Inicial</h1>
    </Stack>
  );
};
