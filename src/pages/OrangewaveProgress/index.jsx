import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

const OrangewaveProgressPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="bg-orange-400 sm:h-[782px] md:h-[817px] h-[900px] md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
            <div className="flex flex-col md:gap-10 gap-[139px] items-center justify-start w-full">
              <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="flex flex-col gap-8 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
                  <Text
                    className="leading-[130.00%] max-w-[779px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
                    size="txtMontserratExtraBold64"
                  >
                    Unlock the Power of Seamless Connectivity with Orange Wave
                  </Text>
                  <Text
                    className="text-lg text-white-A700 w-auto"
                    size="txtMontserratMedium18"
                  >
                    Transform Your Network Infrastructure for Enhanced
                    Performance and Reliability
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-2.5 items-center justify-start sm:px-5 px-6 py-4 w-auto">
                  <a
                    href="javascript:"
                    className="text-blue_gray-900 text-lg w-auto"
                  >
                    <Text size="txtMontserratSemiBold18Bluegray900">
                      Learn More
                    </Text>
                  </a>
                  <Img
                    className="h-px w-5"
                    src="images/img_vector_1.svg"
                    alt="vectorOne"
                  />
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute bottom-[0] h-[782px] left-[0] object-cover"
            src="images/img_frame_white_a700.png"
            alt="frame"
          />
          <Img
            className="absolute bottom-[0] h-[346px] object-cover right-[0]"
            src="images/img_frame.png"
            alt="frame_One"
          />
        </div>
        <div className="bg-white-A700 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[100px] py-[150px] w-auto md:w-full">
          <div className="flex flex-col md:gap-10 gap-20 items-center justify-start max-w-[1240px] mx-auto w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-auto md:w-full">
              <Text
                className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 text-center w-auto"
                size="txtMontserratExtraBold52"
              >
                Our Network Solutions
              </Text>
              <Text
                className="leading-[130.00%] max-w-[732px] md:max-w-full text-base text-blue_gray-900_94 text-center"
                size="txtMontserratMedium16Bluegray90094"
              >
                <>
                  At Orange Wave, we offer a comprehensive suite of network
                  solutions designed to meet your organization&#39;s unique
                  connectivity needs. Our team of experts combines deep industry
                  knowledge with state-of-the-art technologies to deliver
                  tailored services that drive efficiency, security, and
                  scalability. Our services include
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-auto md:w-full">
              <List
                className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                orientation="horizontal"
              >
                <div className="border-l border-orange-400_99 border-solid flex flex-col items-start justify-start p-8 sm:px-5 rounded w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-14 items-center justify-center rounded-[50%] w-14"
                        shape="circle"
                      >
                        <Img
                          className="h-7"
                          src="images/img_cloud1.svg"
                          alt="cloudOne"
                        />
                      </Button>
                      <Text
                        className="leading-[130.00%] max-w-[256px] md:max-w-full text-blue_gray-900 text-xl"
                        size="txtMontserratExtraBold20Bluegray900"
                      >
                        Network Design and Implementation
                      </Text>
                    </div>
                    <div className="flex flex-col h-[84px] md:h-auto items-start justify-start w-auto">
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Comprehensive assessment and design of network
                        architectures tailored to your business requirements.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border-l border-orange-400_99 border-solid flex flex-col items-start justify-start p-8 sm:px-5 rounded w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-14 items-center justify-center rounded-[50%] w-14"
                        shape="circle"
                      >
                        <Img
                          className="h-7"
                          src="images/img_lock1.svg"
                          alt="lockOne"
                        />
                      </Button>
                      <Text
                        className="leading-[130.00%] max-w-[256px] md:max-w-full text-blue_gray-900 text-xl"
                        size="txtMontserratExtraBold20Bluegray900"
                      >
                        Network Security Solutions
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Identification and mitigation of security risks through
                        robust firewall solutions, intrusion detection systems,
                        and access controls.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="border-l border-orange-400_99 border-solid flex flex-col items-start justify-start p-8 sm:px-5 rounded w-auto sm:w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-auto">
                    <div className="flex flex-row gap-4 items-start justify-start w-auto">
                      <Button
                        className="flex h-14 items-center justify-center rounded-[50%] w-14"
                        shape="circle"
                        size="xs"
                      >
                        <Img
                          className="h-[30px]"
                          src="images/img_setting1.svg"
                          alt="settingOne"
                        />
                      </Button>
                      <Text
                        className="leading-[130.00%] max-w-[256px] md:max-w-full text-blue_gray-900 text-xl"
                        size="txtMontserratExtraBold20Bluegray900"
                      >
                        Network Optimization and Performance
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="leading-[130.00%] max-w-[336px] md:max-w-full text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        Evaluation and optimization of network performance,
                        including bandwidth utilization, latency reduction, and
                        Quality of Service (QoS) improvements.
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="bg-gray-100_01 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[99px] w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 w-auto"
                  size="txtMontserratExtraBold52"
                >
                  About Orange Wave
                </Text>
              </div>
              <Text
                className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900_94"
                size="txtMontserratMedium16Bluegray90094"
              >
                Orange Wave, a subsidiary of Cloudextel, is a trusted provider
                of advanced networking solutions. We specialize in delivering
                cutting-edge technologies and expert network services to
                businesses of all sizes. With Orange Wave, you can optimize your
                network infrastructure, improve connectivity, and ensure smooth
                operations in the digital era.
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[178px]"
              rightIcon={
                <div className="mt-[11px] mb-[9px] ml-2.5 bg-white-A700">
                  <Img
                    src="images/img_vector_1_white_a700.svg"
                    alt="Vector 1"
                  />
                </div>
              }
            >
              <div className="font-semibold text-left text-lg">Read More</div>
            </Button>
          </div>
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[684px] items-center justify-start md:px-5 w-[46%] md:w-full"
            style={{ backgroundImage: "url('images/img_frame642_4.png')" }}
          >
            <Img
              className="h-[684px] md:h-auto object-cover w-full"
              src="images/img_image6.png"
              alt="imageSix"
            />
          </div>
        </div>
        <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 gap-[92px] items-start justify-start p-[100px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 my-[50px] w-auto md:w-full">
            <div className="gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[220px] items-center justify-start w-full"
                  style={{
                    backgroundImage: "url('images/img_frame642_5.png')",
                  }}
                >
                  <Img
                    className="h-[220px] md:h-auto object-cover w-full"
                    src="images/img_image5_220x360.png"
                    alt="imageFive"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Expertise
                  </Text>
                  <Line className="bg-orange-400 h-px rotate-[-90deg] w-[16%]" />
                  <Text
                    className="leading-[130.00%] max-w-[360px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    Our team comprises highly skilled professionals with
                    extensive experience in cloud technology and infrastructure
                    management.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Img
                  className="h-[220px] sm:h-auto object-cover w-[360px] md:w-full"
                  src="images/img_frame642_250x400.png"
                  alt="frame642"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Tailored Solutions
                  </Text>
                  <Line className="bg-orange-400 h-px rotate-[-90deg] w-[16%]" />
                  <Text
                    className="leading-[130.00%] max-w-[360px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    <>
                      We understand that each business has its own requirements.
                      That&#39;s why we offer customized solutions that align
                      with your specific goals.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Img
                  className="h-[220px] sm:h-auto object-cover w-[360px] md:w-full"
                  src="images/img_frame642_220x360.png"
                  alt="frame642"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Scalability
                  </Text>
                  <Line className="bg-orange-400 h-px rotate-[-90deg] w-[16%]" />
                  <Text
                    className="leading-[130.00%] max-w-[360px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    As your business grows, our solutions scale with you,
                    providing the flexibility to adapt and expand effortlessly.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start justify-start w-full">
                <Img
                  className="h-[220px] sm:h-auto object-cover w-[360px] md:w-full"
                  src="images/img_frame642_3.png"
                  alt="frame642"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Customer Satisfaction
                  </Text>
                  <Line className="bg-orange-400 h-px rotate-[-90deg] w-[16%]" />
                  <Text
                    className="leading-[130.00%] max-w-[360px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    We are committed to delivering exceptional customer service,
                    working closely with you to ensure your complete
                    satisfaction.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-10 w-[408px] sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[130.00%] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
                  size="txtMontserratExtraBold52"
                >
                  <>
                    Why choose
                    <br />
                    Orange Wave?
                  </>
                </Text>
              </div>
              <Text
                className="leading-[130.00%] max-w-[408px] md:max-w-full text-base text-blue_gray-900_94"
                size="txtMontserratMedium16Bluegray90094"
              >
                Orange Wave, a subsidiary of Cloudextel, is a trusted provider
                of advanced networking solutions. We specialize in delivering
                cutting-edge technologies and expert network services to
                businesses of all sizes. With Orange Wave, you can optimize your
                network infrastructure, improve connectivity, and ensure smooth
                operations in the digital era.
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[178px]"
              rightIcon={
                <div className="ml-2.5 bg-white-A700">
                  <Img
                    src="images/img_vector_1_white_a700.svg"
                    alt="Vector 1"
                  />
                </div>
              }
            >
              <div className="font-semibold text-left text-lg">Read More</div>
            </Button>
          </div>
        </div>
        <div className="bg-gray-100_02 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="flex md:flex-1 flex-col md:gap-10 gap-16 items-start justify-start w-auto md:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-800 w-auto"
                  size="txtMontserratExtraBold52Bluegray800"
                >
                  Industries we serve
                </Text>
              </div>
              <Text
                className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-800_94"
                size="txtMontserratMedium16Bluegray80094"
              >
                Netfra Solutions caters to a wide range of industries, providing
                tailored solutions to meet the unique infrastructure needs of
                each sector. We have extensive experience working with diverse
                organizations, including but not limited to
              </Text>
            </div>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[178px]"
              rightIcon={
                <div className="mt-[11px] mb-[9px] ml-2.5 bg-white-A700">
                  <Img
                    src="images/img_vector_1_white_a700.svg"
                    alt="Vector 1"
                  />
                </div>
              }
            >
              <div className="font-semibold text-left text-lg">Read More</div>
            </Button>
          </div>
          <div className="bg-orange-400 flex md:flex-1 flex-col items-center justify-start p-[83px] md:px-5 w-[46%] md:w-full">
            <div className="flex flex-col gap-8 items-start justify-start mb-[72px] mt-[37px] w-auto sm:w-full">
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                IT and Technology
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                Healthcare and Life Sciences
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                Finance and Banking
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                E-commerce and Retail
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                Manufacturing and Supply Chain
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                Education and Academia
              </Text>
              <Text
                className="text-2xl md:text-[22px] text-white-A700 sm:text-xl w-auto"
                size="txtMontserratExtraBold24"
              >
                Government and Public Sector
              </Text>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[100px] pt-[100px] w-full">
          <div className="flex flex-col gap-[34px] justify-start mt-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[100px] w-[93%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="leading-[130.00%] sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900"
                  size="txtMontserratExtraBold52"
                >
                  <span className="text-blue_gray-900 font-montserrat text-left font-extrabold">
                    <>
                      We’re subsidiary of
                      <br />
                    </>
                  </span>
                  <span className="text-orange-400 font-montserrat text-left font-extrabold">
                    Cloudextel
                  </span>
                </Text>
                <Text
                  className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900_94"
                  size="txtMontserratMedium16Bluegray90094"
                >
                  Our robust infrastructure ensures reliable connectivity,
                  minimal downtime, and consistent performance, giving you peace
                  of mind.
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
                >
                  <div className="font-semibold text-left text-lg">
                    Learn More
                  </div>
                </Button>
              </div>
              <Img
                className="h-[94px] md:mt-0 mt-[93px]"
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
        </div>
        <footer className="bg-blue_gray-900 flex items-center justify-center mt-[98px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-[97px] mt-[100px] mx-auto w-[87%]">
            <div className="flex flex-col items-center justify-start w-1/5 md:w-full">
              <div className="flex flex-col gap-[13px] items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtMontserratExtraBold20"
                >
                  Orange wave Pvt. Ltd.
                </Text>
                <Input
                  name="description_Five"
                  placeholder="The Ruby, 11th Floor, AWFIS, Dadar (West), 
Mumbai, Maharashtra - 400028 "
                  className="font-medium leading-[140.00%] p-0 placeholder:text-white-A700_a3 text-[9px] text-left text-white-A700_a3 w-full"
                  wrapClassName="flex w-[92%]"
                  prefix={
                    <Img
                      className="h-4 mr-1 my-[5px]"
                      src="images/img_map_1_orange_400.svg"
                      alt="map 1"
                    />
                  }
                ></Input>
              </div>
            </div>
            <ul className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[148px] w-auto md:w-full common-column-list">
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
              className="md:ml-[0] ml-[85px] text-right text-white-A700_7e text-xs"
              size="txtMontserratSemiBold12"
            >
              © 2023 Bombay Gas Ventures Pvt. Ltd. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default OrangewaveProgressPage;
