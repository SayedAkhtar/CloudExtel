import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", square: "rounded-none" };
const variants = {
  fill: {
    blue_600: "bg-blue-600 text-white-A700",
    white_A700: "bg-white-A700 text-blue_gray-900",
    cyan_400: "bg-cyan-400 text-white-A700",
    orange_400: "bg-orange-400 text-white-A700",
  },
};
const sizes = { xs: "p-[13px]", sm: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "sm",
  variant = "fill",
  color = "orange_400",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["blue_600", "white_A700", "cyan_400", "orange_400"]),
};

export { Button };
