import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, className = "", variant = "default", ...props }) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors duration-300";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700 px-6 py-3",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "outline"]),
};
