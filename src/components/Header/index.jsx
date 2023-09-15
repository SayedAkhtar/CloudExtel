import React from "react";

import { Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Text
          className="mb-[43px] md:ml-[0] ml-[99px] md:mt-0 mt-[46px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
          size="txtMontserratExtraBold24"
        >
          <span className="text-white-A700 font-montserrat text-left font-extrabold">
            Orange
          </span>
          <span className="text-white-A700_b2 font-montserrat text-left font-extrabold">
            Wave
          </span>
        </Text>
        <ul className="flex md:flex-col flex-row gap-10 sm:hidden items-start justify-start md:ml-[0] ml-[484px] mr-[100px] md:mt-0 my-12 w-auto common-row-list">
          <li>
            <Text
              className="text-lg text-white-A700"
              size="txtMontserratSemiBold18"
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="text-base hover:text-white-A700 text-white-A700_94"
              size="txtMontserratSemiBold16"
            >
              About
            </Text>
          </li>
          <li>
            <Text
              className="text-base hover:text-white-A700 text-white-A700_94"
              size="txtMontserratSemiBold16"
            >
              Services
            </Text>
          </li>
          <li>
            <Text
              className="text-base hover:text-white-A700 text-white-A700_94"
              size="txtMontserratSemiBold16"
            >
              Solutions
            </Text>
          </li>
          <li>
            <Text
              className="text-base hover:text-white-A700 text-white-A700_94"
              size="txtMontserratSemiBold16"
            >
              Why us
            </Text>
          </li>
        </ul>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
