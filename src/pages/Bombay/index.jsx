import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const BombayPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="bg-blue-600 md:h-[559px] h-[900px] pb-[170px] md:px-5 relative w-full">
          <div className="absolute md:h-[559px] h-[729px] right-[0] top-[0] w-[72%] md:w-full">
            <div className="absolute bottom-[0] flex flex-col gap-8 items-start justify-start left-[0] w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                  size="txtMontserratMedium24"
                >
                  Bombay Gas Company Proprietary Private Limited
                </Text>
                <Text
                  className="leading-[130.00%] max-w-[765px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
                  size="txtMontserratExtraBold64"
                >
                  Maintaining Sophisticated Connections
                </Text>
                <Text
                  className="leading-[130.00%] max-w-[715px] md:max-w-full text-lg text-white-A700"
                  size="txtMontserratMedium18"
                >
                  We at Bombay Gas Company Proprietary are establishing
                  next-generation connectivity thanks to our specially created
                  unique Virtualized Network technology. With the help of this
                  technology, telecom providers may now communicate with
                  customers much more effectively. By empowering telecom service
                  providers to enhance their network in terms of performance,
                  quality of service, and resource optimization, we are leading
                  the way in a revolutionary approach to wireless
                  telecommunications in India.
                </Text>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[183px]"
                rightIcon={
                  <div className="ml-2.5 bg-blue_gray-900 my-2.5">
                    <Img src="images/img_vector_1.svg" alt="Vector 1" />
                  </div>
                }
                color="white_A700"
              >
                <div className="font-semibold text-left text-lg">
                  Learn More
                </div>
              </Button>
            </div>
            <Img
              className="absolute h-[408px] object-cover right-[0] top-[0]"
              src="images/img_frame.png"
              alt="frame"
            />
          </div>
          <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto p-11 md:px-10 sm:px-5 top-[0] w-full">
            <Text
              className="md:ml-[0] ml-[54px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtMontserratExtraBold24"
            >
              BGCPPL
            </Text>
          </div>
          <div className="absolute flex flex-col gap-10 items-start justify-start left-[7%] top-1/4 w-auto">
            <Text
              className="text-lg text-white-A700 w-auto"
              size="txtMontserratSemiBold18"
            >
              Home
            </Text>
            <Text
              className="text-base text-white-A700_94 w-auto"
              size="txtMontserratSemiBold16"
            >
              About
            </Text>
            <Text
              className="text-base text-white-A700_94 w-auto"
              size="txtMontserratSemiBold16"
            >
              Services
            </Text>
            <Text
              className="text-base text-white-A700_94 w-auto"
              size="txtMontserratSemiBold16"
            >
              Solutions
            </Text>
            <Text
              className="text-base text-white-A700_94 w-auto"
              size="txtMontserratSemiBold16"
            >
              Why us
            </Text>
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[70px] items-center justify-end md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Line className="bg-blue-600 h-px rotate-[-90deg] w-[23%]" />
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 w-auto"
                  size="txtMontserratExtraBold52"
                >
                  What We Do
                </Text>
              </div>
              <Text
                className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900"
                size="txtMontserratMedium16"
              >
                Through our distinctive shared RAN (Radio Access Network)
                paradigm, BGCPPL, a CloudExtel subsidiary, offers virtualized
                network solutions. Through interoperable and neutral solutions,
                this paradigm enables telecom carriers to provide for their user
                base in heavily populated, network-stressed locations. As a
                result, network deployment and upkeep expenses are decreased,
                and the ecosystem is encouraged to deliver better quality.
              </Text>
              <Text
                className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900"
                size="txtMontserratMedium16"
              >
                <>
                  We&#39;ve coupled the advantages of virtual technology with
                  the adaptability that each telecom operator requires by
                  serving as a neutral host. This implies that we can offer a
                  simple, effective solution while still allowing operators to
                  personalize how they interact with clients. They can adjust
                  parameters to their tastes, providing excellent service and
                  lower prices. Every operator will be able to excel and stand
                  out thanks to our strategy.
                </>
              </Text>
            </div>
          </div>
          <Img
            className="h-[820px]"
            src="images/img_frame642.svg"
            alt="frame642"
          />
        </div>
        <div className="bg-gray-100 flex flex-col items-center justify-start p-[100px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1240px] mx-auto my-[50px] w-full">
            <div className="flex flex-col items-center justify-start w-auto md:w-full">
              <Text
                className="leading-[130.00%] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 text-center"
                size="txtMontserratExtraBold52"
              >
                <>
                  Why collaborate
                  <br />
                  with us
                </>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
              <div className="md:flex-1 gap-5 grid md:grid-cols-1 grid-cols-2 min-h-[auto] w-[67%] md:w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-8 py-10 rounded w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-14 rounded-lg w-14"
                      src="images/img_network.svg"
                      alt="network"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        Deploying a virtual network
                      </Text>
                      <Line className="bg-blue-600 h-px rotate-[-90deg] w-[17%]" />
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Integrate core networks seamlessly allowing for rapid
                        capacity enhancement and optimization.
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Innovative infrastructure-sharing benefits boost
                        coverage and capacity.
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        More adaptability in terms of less complicated equipment
                        management and setup.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-8 py-10 rounded w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-14 w-14"
                      src="images/img_partnership1.svg"
                      alt="partnershipOne"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        Multiplication of Throughput
                      </Text>
                      <Line className="bg-blue-600 h-px rotate-[-90deg] w-[17%]" />
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Our approach provides significantly increased throughput
                        to end users to take advantage of faster online
                        browsing, video streaming, and faster download rates.
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Superior network performance allows customers to consume
                        more data and experience superior quality of service.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-8 py-10 rounded w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-14 rounded-lg w-14"
                      src="images/img_cuttingedgetech.svg"
                      alt="cuttingedgetech"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="leading-[130.00%] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        <>
                          Total Capex and Opex
                          <br />
                          Reduction
                        </>
                      </Text>
                      <Line className="bg-blue-600 h-px rotate-[-90deg] w-[17%]" />
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Significantly lower total cost of ownership for telecom
                        operators for equipment installation, tower deployment,
                        and site upkeep.
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Share the cost of RAN infrastructure, like towers, base
                        stations, and antennas, to lower Capex.
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Reduce Opex by splitting the expense of operations and
                        maintenance, such as site security, energy use, and
                        clutter from several pieces of equipment.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-8 py-10 rounded w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <Img
                      className="h-14 rounded-lg w-14"
                      src="images/img_megaphone.svg"
                      alt="megaphone"
                    />
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        Technical Support
                      </Text>
                      <Line className="bg-blue-600 h-px rotate-[-90deg] w-[17%]" />
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Routine network performance analyses to spot and avoid
                        unforeseen outages or disturbances.
                      </Text>
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Constant observation of KPIs and network performance
                        data to proactively spot abnormalities and potential
                        problems.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex sm:flex-1 flex-col items-start justify-start mb-[474px] sm:px-5 px-8 py-10 rounded w-auto sm:w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-auto">
                  <Img
                    className="h-14 rounded-lg w-14"
                    src="images/img_scalability.svg"
                    alt="scalability"
                  />
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[130.00%] max-w-[336px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtMontserratExtraBold24Bluegray900"
                    >
                      Simplified management and operations
                    </Text>
                    <Line className="bg-blue-600 h-px rotate-[-90deg] w-[17%]" />
                    <Text
                      className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                      size="txtMontserratMedium16Bluegray90094"
                    >
                      We offer our own NMS, core router, and firewalls with our
                      shared RAN active infrastructure.
                    </Text>
                    <Text
                      className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                      size="txtMontserratMedium16Bluegray90094"
                    >
                      Our transmission units and shared antenna solutions free
                      telecom operators from having to supply any extra
                      hardware.
                    </Text>
                    <Text
                      className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                      size="txtMontserratMedium16Bluegray90094"
                    >
                      This approach reduces network downtime, congestion, and
                      interference by effectively allocating resources while
                      adhering to regulations.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[100px] py-20 w-auto md:w-full">
          <div className="bg-blue-600 flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1240px] mx-auto pl-[106px] md:px-5 rounded w-full">
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Text
                className="leading-[130.00%] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                size="txtMontserratExtraBold24"
              >
                <>
                  Discover how we can transform
                  <br />
                  your network
                </>
              </Text>
              <Text
                className="leading-[130.00%] max-w-[603px] md:max-w-full text-base text-white-A700"
                size="txtMontserratMedium16WhiteA700"
              >
                <>
                  The pioneers of tomorrow are those who act today. Don&#39;t
                  miss this chance to revolutionize your network. Reach out to
                  our experts and embrace the virtualization revolution that
                  will shape the future.
                </>
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[179px]"
                rightIcon={
                  <div className="ml-2.5 bg-blue_gray-900 my-2.5">
                    <Img src="images/img_vector_1.svg" alt="Vector 1" />
                  </div>
                }
                color="white_A700"
              >
                <div className="font-semibold text-left text-lg">
                  Contact us
                </div>
              </Button>
            </div>
            <Img
              className="h-[311px] md:h-auto object-cover"
              src="images/img_frame.png"
              alt="frame_One"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col gap-[18px] justify-end md:pl-10 sm:pl-5 pl-[100px] pt-[100px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[82px] items-center justify-start max-w-[1240px] mt-[27px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
              <Line className="bg-blue-600 h-px rotate-[-90deg] w-1/5" />
              <Text
                className="leading-[130.00%] max-w-[699px] md:max-w-full sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
                size="txtMontserratExtraBold52"
              >
                <span className="text-blue_gray-900 font-montserrat text-left font-extrabold">
                  Our company is a subsidiary of{" "}
                </span>
                <span className="text-blue-600 font-montserrat text-left font-extrabold">
                  CloudExtel
                </span>
              </Text>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[183px]"
                rightIcon={
                  <div className="ml-2.5 bg-white-A700 my-2.5">
                    <Img
                      src="images/img_vector_1_white_a700.svg"
                      alt="Vector 1"
                    />
                  </div>
                }
                color="blue_600"
              >
                <div className="font-semibold text-left text-lg">
                  Learn More
                </div>
              </Button>
            </div>
            <Img
              className="h-[94px] w-[459px]"
              src="images/img_group36.svg"
              alt="groupThirtySix"
            />
          </div>
          <Img
            className="h-[132px] md:h-auto md:ml-[0] ml-[947px] object-cover"
            src="images/img_vector.png"
            alt="vector"
          />
        </div>
        <footer className="bg-blue_gray-900 flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-20 mt-[94px] mx-auto w-[87%]">
            <div className="flex flex-col gap-5 items-start justify-start w-[19%] md:w-full">
              <Text
                className="leading-[130.00%] text-base text-white-A700 w-full"
                size="txtMontserratExtraBold16"
              >
                Bombay Gas Company Proprietary Private Limited
              </Text>
              <Input
                name="frame639"
                placeholder="Regd. Office : 909, Raheja Centre, Nariman Point, Mumbai - 400021"
                className="font-medium leading-[140.00%] p-0 placeholder:text-white-A700_a3 text-[9px] text-left text-white-A700_a3 w-full"
                wrapClassName="flex w-[92%]"
                prefix={
                  <Img
                    className="h-4 mr-[3px] my-[5px]"
                    src="images/img_map_1.svg"
                    alt="map 1"
                  />
                }
              ></Input>
            </div>
            <ul className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[100px] w-auto md:w-full common-column-list">
              <li>
                <a href="javascript:" className="text-base text-white-A700_94">
                  <Text size="txtMontserratSemiBold16">About</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-base text-white-A700_94">
                  <Text size="txtMontserratSemiBold16">Solutions</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-base text-white-A700_94">
                  <Text size="txtMontserratSemiBold16">Services</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-base text-white-A700_94">
                  <Text size="txtMontserratSemiBold16">Careers</Text>
                </a>
              </li>
            </ul>
            <Text
              className="md:ml-[0] ml-[57px] text-right text-white-A700_7e text-xs"
              size="txtMontserratSemiBold12"
            >
              © 2023 Bombay Gas Company Proprietary Pvt. Ltd. All rights
              reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BombayPage;
