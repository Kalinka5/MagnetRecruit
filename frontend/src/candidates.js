import React, { useEffect, useState } from "react";

// import { AiOutlineComment } from "react-icons/ai";

import candidates from "./bg/candidates.gif";
import chairs from "./_next/chairs.JPG";
import bag from "./_next/bag.png";
import location from "./_next/location.png";
import nots from "./_next/nots.png";
import search from "./_next/search.png";
import arrow from "./_next/arrow.png";

import NavBar from "./Component/NavBar";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";

import "./_next/static/css/Candidates.css";

function Candidates() {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const [successes, setSuccess] = useState(1);
  const [clients, setClient] = useState(1);
  const [percent, setPercent] = useState(1);
  const [customers, setCustomer] = useState(1);
  const [satisfaction, setSatisfaction] = useState(1);

  useEffect(() => {
    countSuccesses();
    countClients();
    countPercent();
    countCustomers();
    countSatisfaction();
  }, []);

  const countSuccesses = async () => {
    let currentsuccess = 1;
    const interval = (1.8 * 1000) / 29; // Total 1.8 seconds divided by 9 increments

    const timer = setInterval(() => {
      currentsuccess += 1;
      if (currentsuccess > 30) {
        clearInterval(timer);
      } else {
        setSuccess(currentsuccess);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countClients = async () => {
    let currentclient = 1;
    const interval = (1.8 * 1000) / 11; // Total 1.8 seconds divided by 11 increments

    const timer = setInterval(() => {
      currentclient += 1;
      if (currentclient > 12) {
        clearInterval(timer);
      } else {
        setClient(currentclient);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countPercent = async () => {
    let currentpercent = 1;
    const interval = (1.8 * 1000) / 99; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentpercent += 1;
      if (currentpercent > 100) {
        clearInterval(timer);
      } else {
        setPercent(currentpercent);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countCustomers = async () => {
    let currentcustomer = 1;
    const interval = (1.8 * 1000) / 23; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentcustomer += 1;
      if (currentcustomer > 24) {
        clearInterval(timer);
      } else {
        setCustomer(currentcustomer);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countSatisfaction = async () => {
    let currentpercent = 1;
    const interval = (1.8 * 1000) / 99; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentpercent += 1;
      if (currentpercent > 100) {
        clearInterval(timer);
      } else {
        setSatisfaction(currentpercent);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  const handleClick1 = () => {
    setIsVisible1(!isVisible1);
  };
  const handleClick2 = () => {
    setIsVisible2(!isVisible2);
  };
  const handleClick3 = () => {
    setIsVisible3(!isVisible3);
  };
  const handleClick4 = () => {
    setIsVisible4(!isVisible4);
  };

  return (
    <div className="candidates">
      <div id="__next">
        <NavBar />
        <div className="w-full">
          <div className="md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96]">
            <div>
              <img
                src={candidates}
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  height: "100vh",
                  width: "100vw",
                }}
                alt="Candidates"
              />
              <svg
                id="wwrtopsvg"
                className="fill-[#14213d]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
              </svg>
            </div>
            <div className="py-28">
              <h1 className="text-white text-5xl tracking-widest text-center font-extrabold">
                Кандидаты
              </h1>
            </div>
            <div>
              <svg
                id="candidatesvgbottom"
                className="fill-[#14213d]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"></path>
              </svg>
            </div>
          </div>
          <div className="w-full bg-white">
            <div className="fill-[#14213d]">
              <svg
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
                ></path>
              </svg>
            </div>
            <div className="grid md:grid-cols-2">
              <div className="md:w-[600px] mx-auto md:px-24 pb-16 py-6 pt-32">
                <h1 className="text-[#fca311] text-xl md:ml-3 md:text-left text-center">
                  ВАШЕ БУДУЩЕЕ НАЧИНАЕТСЯ ЗДЕСЬ
                </h1>
                <p className="text-sm leading-5 tracking-wider md:text-left text-center p-4">
                  Magnet Recruit стремится предоставить кандидатам возможность
                  раскрыть весь свой потенциал с помощью индивидуальных
                  возможностей. Ваш рост способствует нашей ежедневной миссии, и
                  наши консультанты стремяться продемонстрировать уникальную
                  ценность, которую вы привносите в нашу работу.
                </p>
              </div>
              <div className="bg-[url(&#x27;/image/building.png&#x27;)]"></div>
            </div>
          </div>
          <div className="w-full bg-[#14213D] md:px-0 px-8">
            <div className="grid md:grid-cols-2 md:w-[980px] m-auto">
              <div className="py-20 flex mx-auto">
                <img
                  alt="Chairs"
                  srcSet="_next/image?url=%252Fimage%252Fchairs.JPG&amp;w=640&amp;q=75amp;q_next/image?url=%252Fimage%252Fchairs.JPG&amp;w=828&amp;q=75p;w=828&amp;q=75 2x"
                  src={chairs}
                  width="400"
                  height="200"
                  decoding="async"
                  data-nimg="1"
                  className="max-w-full md:h-[55vh] h-[40vh] object-contain rounded-2xl"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="py-8 px-2">
                <h1 className="text-[#fca311] md:text-left text-center tracking-widest text-xs py-4">
                  НАШИ УСЛУГИ ПО РАЗМЕЩЕНИЮ
                </h1>
                <h1 className="text-[#fca311] md:text-left text-center py-3 tracking-wider text-xl leading-loose">
                  РАСШИРИТЕ СВОИ ВОЗМОЖНОСТИ С
                  <br />
                  MAGNET RECRUIT
                </h1>
                <div className="pt-2 pb-10">
                  <div className="accordion-item">
                    <div className="accordion">
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick1}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                1. Отраслевая экспертиза:
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible1 ? "rotate-90" : ""
                                  }`}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      d="M24 24H0V0h24v24z"
                                      opacity=".87"
                                    ></path>
                                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                                  </svg>
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible1
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible1}
                            >
                              Используя наши глубокие знания отрасли, клиентов и
                              кандидатов, мы отдаем предпочтение должностям,
                              которые соответствуют способностям людей и
                              карьерным целям. Наши консультанты стремятся
                              держать кандидатов на переднем крае, обеспечивая
                              индивидуальный подход к изучению возможностей.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick2}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                2. Помощь в составлении резюме
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible2 ? "rotate-90" : ""
                                  }`}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      d="M24 24H0V0h24v24z"
                                      opacity=".87"
                                    ></path>
                                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                                  </svg>
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible2
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible2}
                            >
                              Признавая важность первого впечатления, мы
                              сотрудничаем с вами, чтобы подчеркнуть ваш
                              потенциал и продемонстрировать потенциальным
                              работодателям ту ценность, которую вы приносите.
                              Ваше резюме создано так, чтобы оказывать
                              длительное положительное влияние.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick3}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                3. Готовность к собеседованию
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible3 ? "rotate-90" : ""
                                  }`}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      d="M24 24H0V0h24v24z"
                                      opacity=".87"
                                    ></path>
                                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                                  </svg>
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible3
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible3}
                            >
                              Мы гарантируем, что вы придете на собеседование
                              полностью подготовленным и уверенным в себе, что
                              позволит нашим клиентам увидеть лучшую версию
                              себя. Подробные брифинги о должности, организации,
                              ожиданиях и культуре предоставляются для повышения
                              вашей готовности.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#14213D] placeholder-gray-1000">
                        <div className="accordion">
                          <div
                            className="accordion-item border-b py-2"
                            onClick={handleClick4}
                          >
                            <div className="accordion-title flex justify-between">
                              <div className="text-white text-sm tracking-wider">
                                4. Постоянная поддержка
                              </div>
                              <div className="flex justify-between">
                                <div
                                  className={`order-last ease-in-out duration-150 text-white text-sm transform ${
                                    isVisible4 ? "rotate-90" : ""
                                  }`}
                                >
                                  <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth="0"
                                    viewBox="0 0 24 24"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill="none"
                                      d="M24 24H0V0h24v24z"
                                      opacity=".87"
                                    ></path>
                                    <path d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path>
                                  </svg>
                                </div>
                                <div className="order-last text-white text-sm"></div>
                              </div>
                            </div>
                            <div
                              className={`accordion-content py-6 text-sm ease-in duration-150 tracking-wider text-white text-justify ${
                                isVisible4
                                  ? "visible-content"
                                  : "hidden-content"
                              }`}
                              aria-hidden={!isVisible4}
                            >
                              Успешное размещение знаменует собой начало прочных
                              отношений. Помимо обеспечения работы, мы стремимся
                              сопровождать вас на пути к профессиональному
                              успеху. Регулярные последующие мероприятия
                              гарантируют, что мы остаемся на связи, проверяя
                              ваш прогресс и общий опыт работы в вашей новой
                              организации. Что касается подрядчиков, мы
                              поддерживаем постоянный контакт на протяжении
                              всего вашего контракта, информируя вас о новых
                              перспективах и возможностях.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#14213D] w-full">
            <div className="py-12 md:w-[900px] grid md:grid-cols-5 mx-auto">
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Bag"
                  srcSet="_next/image?url=%252Fimage%252Fbag.png&amp;w=256&amp;q=75amp;q_next/image?url=%252Fimage%252Fbag.png&amp;w=384&amp;q=75p;w=384&amp;q=75 2x"
                  src={bag}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <div>
                  <h1
                    className="text-[#fca311] text-center text-6xl font-bold"
                    id="counter"
                  >
                    <span>{successes}</span>
                  </h1>
                </div>
                <h1 className="m-auto text-center text-white font-bold">
                  Еженедельные успехи
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Location"
                  srcSet="_next/image?url=%252Fimage%252Flocation.png&amp;w=256&amp;q=75amp;q_next/image?url=%252Fimage%252Flocation.png&amp;w=384&amp;q=75p;w=384&amp;q=75 2x"
                  src={location}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{clients}</span>
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Глобальные клиенты
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Nots"
                  srcSet="_next/image?url=%252Fimage%252Fnots.png&amp;w=256&amp;q=75amp;q_next/image?url=%252Fimage%252Fnots.png&amp;w=384&amp;q=75p;w=384&amp;q=75 2x"
                  src={nots}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{percent}</span> %
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Успех (при сохранении)
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Search"
                  srcSet="_next/image?url=%252Fimage%252Fsearch.png&amp;w=256&amp;q=75amp;q_next/image?url=%252Fimage%252Fsearch.png&amp;w=384&amp;q=75p;w=384&amp;q=75 2x"
                  src={search}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{customers}</span>
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Обслуживание клиентов
                </h1>
              </div>
              <div className="justify-center w-44 mx-auto">
                <img
                  alt="Arrow"
                  srcSet="_next/image?url=%252Fimage%252Farrow.png&amp;w=256&amp;q=75amp;q_next/image?url=%252Fimage%252Farrow.png&amp;w=384&amp;q=75p;w=384&amp;q=75 2x"
                  src={arrow}
                  width="150"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="mx-auto"
                  loading="lazy"
                  style={{ color: "transparent" }}
                />
                <h1
                  className="text-[#fca311] text-center text-6xl font-bold"
                  id="counter"
                >
                  <span>{satisfaction}</span> %
                </h1>
                <h1 className="m-auto text-center text-white font-bold">
                  Удовлетворенность клиентов
                </h1>
              </div>
            </div>
          </div>
          <div className="grid">
            <div className="fill-[#14213d]">
              <svg
                id="servicesbottomsvg"
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1000 100"
                preserveAspectRatio="none"
              >
                <path
                  className="elementor-shape-fill"
                  d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
                ></path>
              </svg>
            </div>
            <div className="pt-14 w-full bg-white"></div>
          </div>
          <Carousel page="candidates" />
          <div className="bg-[#14213D] pt-4">
            <h1 className="text-center text-xl text-slate-300 font-bold">
              СВЯЗАТЬСЯ С НАМИ
            </h1>
            <div className="items-center flex justify-center">
              <a
                type="submit"
                className="flex my-10 px-4 p-2 rounded-sm hover:bg-[#fca311] hover:text-white bg-slate-200"
                href="https://t.me/magnetuk"
              >
                {/* <AiOutlineComment
                  className="mx-2 my-auto"
                  style={{ fontSize: "25px" }}
                /> */}
                Перейти в телеграм
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Candidates;
