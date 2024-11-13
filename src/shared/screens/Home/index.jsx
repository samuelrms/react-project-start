import { Stack } from "../../components";
import ButtonLink from "../../components/ButtonLink";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <Stack elementType="section" className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Página Inicial</h1>
      <ButtonLink to="/about" className="custom-class">
        Link para About
      </ButtonLink>
    </Stack>
  );
};
