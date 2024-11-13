import PropTypes from "prop-types";
import { createElement, forwardRef } from "react";

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
