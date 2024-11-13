import { Stack } from "../../components";
import ButtonLink from "../../components/ButtonLink";
import styles from "./About.module.scss";

export const About = () => {
  return (
    <Stack elementType="section" className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>Sobre Nós</h1>
      <ButtonLink to="/" className="custom-class">
        Link para Home
      </ButtonLink>
    </Stack>
  );
};
