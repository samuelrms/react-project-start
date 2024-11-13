import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./ButtonLink.module.scss";

/**
 * Um botão personalizável que pode ser renderizado como botão ou link.
 *
 * @param {string} to - O destino do link (opcional se for tipo botão).
 * @param {string} type - Define o tipo do elemento (padrão é "button").
 * @param {string} className - Classes CSS extras para personalização.
 * @param {React.Node} children - Conteúdo do botão/link.
 * @param {object} props - Outras propriedades adicionais para o botão/link.
 */
const ButtonLink = ({
  to,
  type = "button",
  className = "",
  children,
  ...props
}) => {
  const combinedClassName = `${styles.buttonLink} ${className}`;

  return to ? (
    <Link to={to} className={combinedClassName} {...props}>
      {children}
    </Link>
  ) : (
    <button type={type} className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

ButtonLink.propTypes = {
  to: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default ButtonLink;
