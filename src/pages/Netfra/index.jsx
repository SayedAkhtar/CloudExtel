import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";

const NetfraPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="bg-cyan-400 flex flex-col md:gap-10 gap-[105px] items-end justify-start w-full">
          <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="md:h-[430px] h-[675px] md:px-5 relative w-[94%] md:w-full">
            <div className="absolute flex flex-col gap-8 items-start justify-start left-[0] top-[0] w-auto">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <Text
                  className="leading-[130.00%] max-w-[803px] md:max-w-full md:text-5xl text-[64px] text-white-A700"
                  size="txtMontserratExtraBold64"
                >
                  Small Cells, Vast Connections
                </Text>
                <Text
                  className="leading-[130.00%] max-w-[803px] md:max-w-full text-lg text-white-A700"
                  size="txtMontserratMedium18"
                >
                  <>
                    At Netfra Solutions, we&#39;ve been at the forefront of
                    telecom innovation. Our mission is to provide top-tier Small
                    Cells Hosting solutions and exceptional network
                    infrastructure support to telecom companies through our deep
                    experience and reliable services. We understand the
                    importance of a robust and strengthened network that allows
                    telecom companies to enhance their user experience. Our
                    solutions combine the latest technological advancements to
                    revolutionize the way telecom users connect with the world.
                  </>
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
              className="absolute bottom-[0] h-[360px] object-cover right-[0]"
              src="images/img_group641.png"
              alt="group641"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-auto md:w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pr-10 sm:pr-5 pr-[100px] w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[684px] items-center justify-start md:px-5 w-[46%] md:w-full"
              style={{ backgroundImage: "url('images/img_frame642_4.png')" }}
            >
              <Img
                className="h-[684px] md:h-auto object-cover w-full"
                src="images/img_image4.png"
                alt="imageFour"
              />
            </div>
            <div className="flex md:flex-1 flex-col gap-4 items-start justify-start w-auto md:w-full">
              <div className="flex flex-col items-start justify-start w-auto md:w-full">
                <Text
                  className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 w-auto"
                  size="txtMontserratExtraBold52"
                >
                  About us
                </Text>
              </div>
              <Text
                className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900_94"
                size="txtMontserratMedium16Bluegray90094"
              >
                Netfra Solutions is a subsidiary of CloudExtel that provides
                cutting-edge solutions in the Small Cells Hosting space. We
                provide a comprehensive range of miniaturized base station sites
                and backhaul to meet telecom operators’ network infrastructure
                needs.
              </Text>
              <Text
                className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900_94"
                size="txtMontserratMedium16Bluegray90094"
              >
                Densification of 4G networks and shift to 5G requires increased
                small cell deployment. Our services enhance network performance
                providing lightning-fast data speeds to a broader user base.
              </Text>
            </div>
          </div>
          <div className="bg-cyan-400 flex md:flex-col flex-row md:gap-10 items-center justify-between md:pl-10 sm:pl-5 pl-[100px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-auto md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-auto md:w-full">
                <div className="flex flex-col items-start justify-start w-auto md:w-full">
                  <Text
                    className="sm:text-[38px] md:text-[44px] text-[52px] text-white-A700 w-auto"
                    size="txtMontserratExtraBold52WhiteA700"
                  >
                    Small cell Hosting
                  </Text>
                </div>
                <Text
                  className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-white-A700"
                  size="txtMontserratMedium16WhiteA700"
                >
                  Small Cells Hosting is a service that assists telecom
                  operators in augmenting their 4G networks for data capacity
                  offload, network quality improvement, and enhanced customer
                  experience in high-traffic density locations in urban
                  center’s, or those towns where 4G signal density requires
                  enhancement.
                </Text>
                <Text
                  className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-white-A700"
                  size="txtMontserratMedium16WhiteA700"
                >
                  Small Cells, which are miniaturized base stations, can be
                  installed and operated closer to where end consumers need
                  improved 4G or 5G signals by being installed on the sites
                  which we build, own, and operate. With the rapid expansion of
                  5G technology, the demand for small-cell deployment is set to
                  soar.
                </Text>
              </div>
            </div>
            <Img
              className="h-[684px] md:h-auto object-cover"
              src="images/img_frame642_684x605.png"
              alt="frame642"
            />
          </div>
          <div className="bg-gray-50 flex flex-col md:gap-10 gap-20 items-center justify-center p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-4 items-center justify-start mt-[50px] w-auto md:w-full">
              <Text
                className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 text-center w-auto"
                size="txtMontserratExtraBold52"
              >
                Our Services
              </Text>
              <Text
                className="leading-[130.00%] max-w-[606px] md:max-w-full text-base text-blue_gray-900_94 text-center"
                size="txtMontserratMedium16Bluegray90094"
              >
                <>
                  Our wide variety of small cell hosting solutions at Netfra
                  Solutions ensure that telecom service providers&#39; coverage
                  is improved in terms of both quality and strength
                </>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start max-w-[1240px] mb-[50px] mx-auto w-full">
              <div className="flex md:flex-col flex-row gap-5 items-start justify-between w-full">
                <div className="md:flex-1 gap-5 grid md:grid-cols-1 grid-cols-2 min-h-[auto] w-[67%] md:w-full">
                  <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start p-8 sm:px-5 rounded w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="cyan_400"
                    >
                      <Img
                        className="h-7"
                        src="images/img_cloud1.svg"
                        alt="cloudOne"
                      />
                    </Button>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        Small Cell Deployment
                      </Text>
                      <Text
                        className="leading-[130.00%] text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        <>
                          Expert consultation and site assessment for optimal
                          small cell placement.
                          <br />
                          Customized deployment plans based on specific coverage
                          and capacity requirements.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start p-8 sm:px-5 rounded w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="cyan_400"
                    >
                      <Img
                        className="h-7"
                        src="images/img_signal1.svg"
                        alt="signalOne"
                      />
                    </Button>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        5G Integration
                      </Text>
                      <Text
                        className="leading-[130.00%] text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        <>
                          Utilization of small cells to enable high-speed and
                          low latency 5G capabilities.
                          <br />
                          Future-proofing the network to support evolving
                          technology demands.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start p-8 sm:px-5 rounded w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="cyan_400"
                    >
                      <Img
                        className="h-7"
                        src="images/img_reload1.svg"
                        alt="reloadOne"
                      />
                    </Button>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        Improvement of Coverage
                      </Text>
                      <Text
                        className="leading-[130.00%] text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        <>
                          Specific remedies to reduce coverage gaps in both
                          indoor and outdoor settings.
                          <br />
                          Offloading data traffic from macro cells to small
                          cells for improved capacity.
                          <br />
                          Deploying tiny cells to provide network coverage in
                          hard or inaccessible places.
                          <br />
                          Ensuring users have constant connectivity in areas
                          that weren&#39;t previously serviced.
                        </>
                      </Text>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col gap-6 items-start justify-start p-8 sm:px-5 rounded w-full">
                    <Button
                      className="flex h-16 items-center justify-center w-16"
                      shape="circle"
                      color="cyan_400"
                    >
                      <Img
                        className="h-7"
                        src="images/img_frame663.svg"
                        alt="frame663"
                      />
                    </Button>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                        size="txtMontserratExtraBold24Bluegray900"
                      >
                        Technical Support
                      </Text>
                      <Text
                        className="leading-[130.00%] text-base text-blue_gray-900_94"
                        size="txtMontserratMedium16Bluegray90094"
                      >
                        <>
                          Round-the-clock support for network maintenance,
                          troubleshooting, and upgrades.
                          <br />
                          Prompt response to issues and inquiries to ensure
                          uninterrupted network operation.
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex sm:flex-1 flex-col gap-6 items-start justify-start mb-[398px] p-8 sm:px-5 rounded w-auto sm:w-full">
                  <Button
                    className="flex h-16 items-center justify-center w-16"
                    shape="circle"
                    color="cyan_400"
                  >
                    <Img
                      className="h-7"
                      src="images/img_lock1.svg"
                      alt="lockOne"
                    />
                  </Button>
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Text
                      className="leading-[130.00%] max-w-[336px] md:max-w-full text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                      size="txtMontserratExtraBold24Bluegray900"
                    >
                      Capacity & Coverage Enhancement
                    </Text>
                    <Text
                      className="leading-[130.00%] text-base text-blue_gray-900_94"
                      size="txtMontserratMedium16Bluegray90094"
                    >
                      <>
                        Targeted solutions to address capacity gaps in outdoor
                        environments.
                        <br />
                        Extending network coverage to remote or challenging
                        areas through small cell deployment.
                        <br />
                        Ensuring consistent connectivity for users in previously
                        underserved locations.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-start justify-start p-[100px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col items-start justify-start max-w-[875px] mt-[50px] w-full">
              <Text
                className="sm:text-[38px] md:text-[44px] text-[52px] text-blue_gray-900 w-auto"
                size="txtMontserratExtraBold52"
              >
                Why Choose Netfra?
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1240px] mt-24 mx-auto w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-10 sm:h-auto items-start justify-start w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[250px] items-center justify-start w-full"
                  style={{
                    backgroundImage: "url('images/img_frame642_5.png')",
                  }}
                >
                  <Img
                    className="h-[250px] md:h-auto object-cover w-full"
                    src="images/img_image5.png"
                    alt="imageFive"
                  />
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Expertise
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[400px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    Our team consists of industry experts with dynamic
                    experience in network densification and infrastructure
                    management
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-1 flex-col gap-10 items-start justify-start w-auto sm:w-full">
                <Img
                  className="h-[250px] sm:h-auto object-cover w-[400px] md:w-full"
                  src="images/img_frame642_250x400.png"
                  alt="frame642"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Scalability
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[400px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    Take your business to the next level with seamless
                    connectivity and network performance. As your business
                    grows, we will ensure our solutions let you adapt and expand
                    effortlessly.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-10 sm:h-auto items-start justify-start w-full">
                <Img
                  className="h-[250px] sm:h-auto object-cover w-[400px] md:w-full"
                  src="images/img_frame642_1.png"
                  alt="frame642"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Reliability
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[400px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    We foster trust and reliability with our services that
                    enable you to secure and accessible network coverage at all
                    times.
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-col items-start justify-start my-[18px] w-auto sm:w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-auto">
                <Img
                  className="h-[250px] sm:h-auto object-cover w-[400px] md:w-full"
                  src="images/img_frame642_2.png"
                  alt="frame642_One"
                />
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl w-auto"
                    size="txtMontserratExtraBold24Bluegray900"
                  >
                    Customer Satisfaction
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[400px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    We are committed to delivering best-in-class services
                    ensuring a 3600 customer satisfaction.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white-A700 flex flex-col items-end justify-end md:pl-10 sm:pl-5 pl-[100px] pt-[100px] w-full">
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
                    <span className="text-cyan-400 font-montserrat text-left font-extrabold">
                      CloudExtel
                    </span>
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[610px] md:max-w-full text-base text-blue_gray-900_94"
                    size="txtMontserratMedium16Bluegray90094"
                  >
                    Our robust infrastructure ensures reliable connectivity,
                    minimal downtime, and consistent performance, giving you
                    peace of mind.
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
                    color="cyan_400"
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
        </div>
        <footer className="bg-blue_gray-900 flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mx-auto my-[97px] w-[87%]">
            <div className="flex flex-col items-center justify-start">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-white-A700 text-xl"
                  size="txtMontserratExtraBold20"
                >
                  Neftra Solutions Pvt. Ltd.
                </Text>
                <Input
                  name="description_Eight"
                  placeholder="The Ruby, 11th Floor, AWFIS, Dadar (West), 
Mumbai, Maharashtra - 400028 "
                  className="font-medium leading-[140.00%] p-0 placeholder:text-white-A700_a3 text-[9px] text-left text-white-A700_a3 w-full"
                  wrapClassName="flex w-[81%]"
                  prefix={
                    <Img
                      className="h-4 mr-1 my-[5px]"
                      src="images/img_map_1_cyan_400.svg"
                      alt="map 1"
                    />
                  }
                ></Input>
              </div>
            </div>
            <ul className="flex flex-row gap-6 items-start justify-start w-auto md:w-full common-column-list">
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
              className="text-right text-white-A700_7e text-xs"
              size="txtMontserratSemiBold12"
            >
              © 2023 Netfra Solutions Pvt. Ltd. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NetfraPage;
