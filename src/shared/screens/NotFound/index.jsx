import { Stack } from "../../components";
import ButtonLink from "../../components/ButtonLink";
import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <Stack elementType="section" className={styles.notFoundContainer}>
      <h1 className={styles.notFoundMessage}>Página não encontrada</h1>
      <ButtonLink to="/" className="custom-class">
        Link para Home
      </ButtonLink>
      <ButtonLink to="/about" className="custom-class">
        Link para About
      </ButtonLink>
    </Stack>
  );
};
