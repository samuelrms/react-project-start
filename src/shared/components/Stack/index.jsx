import PropTypes from "prop-types";
import { createElement, forwardRef } from "react";

/**
 * Um componente de layout que envolve elementos filhos. Pode ser usado para criar layouts de pilha.
 *
 * @param {string} elementType - O tipo de elemento HTML a ser renderizado.
 * @param {React.Node} children - Elementos filhos a serem renderizados.
 * @param {string} className - Classes CSS extras para personalização.
 * @param {object} props - Outras propriedades adicionais para o elemento.
 * @param {React.Ref} ref - Referência para o elemento
 */
export const Stack = forwardRef(
  ({ elementType = "div", children, className = "", ...props }, ref) => {
    const Element = elementType || "div";

    return createElement(
      Element,
      {
        ref,
        className,
        ...props,
      },
      children
    );
  }
);

Stack.displayName = "Stack";

Stack.propTypes = {
  elementType: PropTypes.oneOf([
    "div",
    "section",
    "article",
    "nav",
    "aside",
    "header",
    "footer",
    "main",
    "ul",
    "ol",
    "span",
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
};
