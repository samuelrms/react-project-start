import { Stack } from "../../components";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <Stack elementType="section" className={styles.notFoundContainer}>
      <h1 className={styles.notFoundMessage}>Página não encontrada</h1>
    </Stack>
  );
};
