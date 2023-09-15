import React from "react";

const sizeClasses = {
  txtMontserratMedium16Bluegray80094: "font-medium font-montserrat",
  txtMontserratMedium24: "font-medium font-montserrat",
  txtMontserratExtraBold52WhiteA700: "font-extrabold font-montserrat",
  txtMontserratMedium16: "font-medium font-montserrat",
  txtMontserratExtraBold52Bluegray800: "font-extrabold font-montserrat",
  txtMontserratMedium18: "font-medium font-montserrat",
  txtMontserratSemiBold18: "font-montserrat font-semibold",
  txtMontserratSemiBold16: "font-montserrat font-semibold",
  txtMontserratMedium16WhiteA700: "font-medium font-montserrat",
  txtMontserratMedium16Bluegray90094: "font-medium font-montserrat",
  txtMontserratSemiBold12: "font-montserrat font-semibold",
  txtMontserratExtraBold24: "font-extrabold font-montserrat",
  txtMontserratExtraBold20Bluegray900: "font-extrabold font-montserrat",
  txtMontserratExtraBold16: "font-extrabold font-montserrat",
  txtMontserratSemiBold18Bluegray900: "font-montserrat font-semibold",
  txtMontserratExtraBold52: "font-extrabold font-montserrat",
  txtMontserratExtraBold64: "font-extrabold font-montserrat",
  txtMontserratExtraBold24Bluegray900: "font-extrabold font-montserrat",
  txtMontserratExtraBold20: "font-extrabold font-montserrat",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
