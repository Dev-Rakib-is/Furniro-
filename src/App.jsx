import "./App.css";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Images from "./components/Images";
import logo from "./assets/logo.png";
import logo2 from "./assets/logo2.png";
import Menu from "./components/Menu";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Dining from "./assets/Dining.png";
import living from "./assets/living.png";
import Bedroom from "./assets/Bedroom.png";
import Product1 from "./assets/Product1.png";
import Product2 from "./assets/Product2.png";
import Product3 from "./assets/Product3.png";
import Product4 from "./assets/Product4.png";
import Product5 from "./assets/Product5.png";
import Product6 from "./assets/Product6.png";
import Product7 from "./assets/Product7.png";
import Product8 from "./assets/Product8.png";
import { PiShareNetworkThin } from "react-icons/pi";
import { MdCompareArrows } from "react-icons/md";
import exploreImg from "./assets/exploreImg.png";
import exploreImg2 from "./assets/exploreImg2.png";

function App() {
  return (
    <>
      {/* Header part Start */}
      <div className="bg-white">
        <Container className={"max-w-[1280px] py-5"}>
          <Flex className={"justify-between items-center"}>
            <div className="">
              <Images src={logo} alt={logo} />
            </div>
            <div className="">
              <Flex
                className={
                  "items-center gap-[75px] font-medium text-4 font-pop text-black"
                }
              >
                <Menu mText={"Home"} />
                <Menu mText={"Shop"} />
                <Menu mText={"About"} />
                <Menu mText={"Contact"} />
              </Flex>
            </div>
            <div className="">
              <Flex className={"items-center gap-[47px] font-medium"}>
                <FaRegUser />
                <IoSearchOutline />
                <IoIosHeartEmpty />
                <GrCart />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header part End */}

      {/* Banner part Start */}
      <div className="bg-backgroundImage bg-no-repeat bg-cover bg-center ">
        <Container className={"max-w-[1285px]"}>
          <div className="  pt-[153px] pb-[115px] ">
            <div className=" w-[643px] rounded-[10px] bg-[#FFF3E3] pt-[62px] pb-[37px] px-[40px] ml-auto ">
              <Heading
                text={"New Arrival"}
                as={"p"}
                className={"font-semibold font-pop text-333333 text-4"}
              />
              <Heading
                text={"Discover Our New Collection"}
                as={"h1"}
                className={
                  "font-bold text-888 font-pop text-[52px] leading-[65px] pb-[15px] pr-[156px]"
                }
              />
              <Heading
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
                }
                as={"p"}
                className={
                  "text-333333 text-[18px] font-pop font-medium pb-[46px]"
                }
              />
              <Button
                btnText={"BUY Now"}
                className={
                  "bg-[#B88E2F] w-[222px] h-[74px] text-white text-4 font-pop font-bold"
                }
              />
            </div>
          </div>
        </Container>
      </div>
      {/* Banner part End */}

      {/* Range part Start */}
      <div className="pt-[56px] pb-[56px]">
        <Container className={"max-w-range"}>
          <Heading
            text={"Browse The Range"}
            as={"h2"}
            className={"text-333333 text-[32px] text-center font-bold font-pop"}
          />
          <Heading
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            as={"p"}
            className={
              "text-666666 text-[20px] text-center font-regular font-pop pb-[48px]"
            }
          />
          <Flex className={"justify-between"}>
            <div>
              <Images src={Dining} alt={Dining} />
              <Heading
                text={"Dining"}
                as={"p"}
                className={
                  "text-center pt-5 text-333333 font-semibold font-pop text-6"
                }
              />
            </div>
            <div>
              <Images src={living} alt={living} />
              <Heading
                text={"living"}
                as={"p"}
                className={
                  "text-center pt-5 text-333333 font-semibold font-pop text-6"
                }
              />
            </div>
            <div>
              <Images src={Bedroom} alt={Bedroom} />
              <Heading
                text={"Bedroom"}
                as={"p"}
                className={
                  "text-center pt-5 text-333333 font-semibold font-pop text-6"
                }
              />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Range part End */}
      {/* Product part Start */}

      <div id="product font-pop">
        <Container className={"max-w-productContainer"}>
          <Heading
            text={"Our Products"}
            as={"h3"}
            className={
              "text-center text-[40px] font-bold text-[#3A3A3A] pb-[32px]"
            }
          />
          <Flex className={"flex-wrap justify-between"}>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product1} alt={Product1} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Syltherine"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Stylish cafe chair"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 2.500.000
                      </span>
                      <del className="font-regular text-4 text-BBB">
                        Rp 3.500.000
                      </del>
                    </Flex>
                  </div>
                  <div className="relative">
                    {/* <span className="bg-badge rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                    <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      -50%
                    </p>
                  </span> */}
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product2} alt={Product2} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Leviosa"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Stylish cafe chair"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 2.500.000
                      </span>
                      {/* <del className="font-regular text-4 text-BBB">
                      Rp 3.500.000
                    </del> */}
                    </Flex>
                  </div>
                  <div className="relative">
                    <span className="bg-badge rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                      <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        -30%
                      </p>
                    </span>
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product3} alt={Product3} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Grifo"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Night lamp"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp Rp 1.500.000
                      </span>
                      {/* <del className="font-regular text-4 text-BBB">
                      Rp 3.500.000
                    </del> */}
                    </Flex>
                  </div>
                  <div className="relative">
                    <span className="bg-badge rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                      <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        -30%
                      </p>
                    </span>
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product4} alt={Product4} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Lolito"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Luxury big sofa"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 7.000.000
                      </span>
                      <del className="font-regular text-4 text-BBB">
                        Rp 14.000.000
                      </del>
                    </Flex>
                  </div>
                  <div className="relative">
                    <span className="bg-badge rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                      <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        -50%
                      </p>
                    </span>
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
          </Flex>
          <Flex className={"pt-[32px] gap-8"}>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product5} alt={Product5} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Muggo"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Small mug"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 150.000
                      </span>
                      {/* <del className="font-regular text-4 text-BBB">
                      Rp 3.500.000
                    </del> */}
                    </Flex>
                  </div>
                  <div className="relative">
                    <span className="bg-badge2 rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                      <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        New
                      </p>
                    </span>
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product6} alt={Product6} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Pingky"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Cute bed set"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 7.000.000
                      </span>
                      <del className="font-regular text-4 text-BBB">
                        Rp 14.000.000
                      </del>
                    </Flex>
                  </div>
                  <div className="relative">
                    {/* <span className="bg-badge rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                    <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      -50%
                    </p>
                  </span> */}
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product7} alt={Product7} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Potty"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Minimalist flower pot"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 2.500.000
                      </span>
                      <del className="font-regular text-4 text-BBB">
                        Rp 5.000.000
                      </del>
                    </Flex>
                  </div>
                  <div className="relative">
                    <span className="bg-badge2 rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                      <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        New
                      </p>
                    </span>
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
            <div className=" main relative ">
              <Flex className={"justify-between flex-wrap"}>
                <div className="w-[285px] group">
                  <div>
                    <Images src={Product8} alt={Product8} />
                  </div>
                  <div className="bg-CCC pt-4 pl-4">
                    <Heading
                      text={"Respira"}
                      as={"h4"}
                      className={"text-AAA font-semibold text-6"}
                    />
                    <Heading
                      text={"Outdoor bar table and stool"}
                      as={"p"}
                      className={" pt-2 pb-2 text-4 font-medium text-[#898989]"}
                    />
                    <Flex className={"gap-4"}>
                      <span className=" text-5 font-semibold text-AAA pb-[30px]">
                        Rp 500.000
                      </span>
                      {/* <del className="font-regular text-4 text-BBB">
                      Rp 500.000
                    </del> */}
                    </Flex>
                  </div>
                  <div className="relative">
                    <span className="bg-badge2 rounded-full h-[48px] -translate-x-1/2 -translate-y-1/2 right-[5px] bottom-[335px]  w-[48px] absolute">
                      <p className="text-white absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        New
                      </p>
                    </span>
                  </div>
                  <div className="overlay absolute font-pop  bg-AAA invisible opacity-[72%] w-full h-full top-0 left-0  group-hover:visible ">
                    <div className="absolute left-10 top-1/2 ">
                      <Button
                        btnText={"Add to cart"}
                        className={
                          " font-semibold text-base text-badge bg-white h-[48px] w-[202px]"
                        }
                      />
                      <Flex className={"justify-between"}>
                        <div className="text-white flex items-center">
                          <PiShareNetworkThin />
                          <Heading text={"Share"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <MdCompareArrows />
                          <Heading text={"Compare"} as={"p"} />
                        </div>
                        <div className="text-white flex items-center">
                          <FaRegHeart />
                          <Heading text={"Like"} as={"p"} />
                        </div>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Flex>
            </div>
          </Flex>
          <div className="text-center pt-[32px] pb-[70px]">
            <Button
              btnText={"Show More"}
              className={
                "bg-transparent border border-888888 w-[245px] h-[48px] text-888888 font-semibold text-4 "
              }
            />
          </div>
        </Container>
      </div>
      {/* Product part End */}

      {/* Explor part Start */}
      <div id="Explor">
        <Container className={'max-w-expContainer'}>
          <Flex className={'bg-fcBg font-pop '}>
            <div className=" pt-[223px] w-[40%] px-[30px] ">
              <Heading text={'50+ Beautiful rooms inspiration'} as={'h2'} className={'font-bold text-[40px] w-[422px] text-AAA'} />
              <Heading text={'Our designer already made a lot of beautiful prototipe of rooms that inspire you'} as={'p'} className={'font-medium text-4 text-fcp pt-2 pb-6 pr-[110px]'} />
              <Button btnText={'Explore More'} className={'w-[176px] h-[48px] bg-888888 text-white'}/>
            </div>
             <div className="flex gap-6 w-[60%] pb-[30px]">
             
             <div className="relative">
             <Images src={exploreImg} alt={exploreImg} className={''} />
             <div className="absolute bg-white bottom-5 text-center">
             <Heading text={'Room-01'} as={'p'} className={' flex  h-[130px] text-4 w-[217px] text-AAA justify-center items-center'} />
             </div>
             </div>

             <Images src={exploreImg2} alt={exploreImg2} className={'w-372px h-[486px]'}/>
             </div>
          </Flex>
        </Container>
      </div>
      {/* Range part End */}
      <div id="foter">
        <Container className={'max-w-ftContainer'}>
          <Flex className={'font-pop justify-between pt-[60px]'}>
            <div className="">
              <Images src={logo2} alt={logo2}/>
              <Heading text={'400 University Drive Suite 200 Coral Gables,FL 33134 USA'} as={'p'} className={'pt-[50px] font-regular font-pop text-[#9F9F9F] text-[16px] w-[285px]'}/>
            </div>
            <div className="">
              <Menu mText={'Links'} className={'font-medium text-4 text-foterTextCo1 pb-[55px]'}/>
              <Menu mText={'Home'} className={'font-medium text-4 text-black pb-[46px]'}/>
              <Menu mText={'Shop'} className={'font-medium text-4 text-black pb-[46px]'}/>
              <Menu mText={'About'} className={'font-medium text-4 text-black pb-[46px]'}/>
              <Menu mText={'Contact'} className={'font-medium text-4 text-black pb-[46px]'}/>
            </div>
            <div className="">
              <Menu mText={'Help'} className={'font-medium text-4 text-foterTextCo1 pb-[55px]'}/>
              <Menu mText={'Payment Options'} className={'font-medium text-4 text-black pb-[46px]'}/>
              <Menu mText={'Returns'} className={'font-medium text-4 text-black pb-[46px]'}/>
              <Menu mText={'Privacy Policies'} className={'font-medium text-4 text-black pb-[46px]'}/>
            </div>
            <div className="">
              <Menu mText={'Newsletter'} className={'font-medium text-4 text-foterTextCo1 pb-[55px]'}/>
             <Flex className={' gap-4'}>
             <input type="text" placeholder="Enter Your Email Address" className=" outline-none border-b border-black "/>
             <Button btnText={'SUBSCRIBE'} className={'border-b border-black'}/>
             </Flex>
            </div>
          </Flex>
          <div className="">
            <hr  className="pb-[35px]"/>
            <Heading text={'2023 furino. All rights reverved'} as={'p'} className={'text-black font-pop font-regular text-4 pb-[38px]'}/>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;











