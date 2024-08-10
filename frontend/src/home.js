import Typewriter from "typewriter-effect";

import { useEffect, useState } from "react";

import video from "./image/bgvid.mp4";
import locationw256 from "./_next/locationw256.png";
import locationw640 from "./_next/locationw640.png";
import bagw96 from "./_next/bagw96.png";
import bagw256 from "./_next/bagw256.png";
import searchw96 from "./_next/searchw96.png";
import searchw256 from "./_next/searchw256.png";
import arroww96 from "./_next/arroww96.png";
import arroww256 from "./_next/arroww256.png";
import notsw96 from "./_next/notsw96.png";
import notsw256 from "./_next/notsw256.png";

import NavBar from "./Component/NavBar";
import Testimonials from "./Component/Testimonials";
import Carousel from "./Component/Carousel";
import Footer from "./Component/Footer";

import "./_next/static/css/Home.css";

function Home() {
  const [days, setDay] = useState(1);
  const [offers, setOffer] = useState(1);
  const [percent, setPercent] = useState(1);

  useEffect(() => {
    countDays();
    countOffers();
    countPercent();
  }, []);

  const countDays = async () => {
    let currentday = 1;
    const interval = (1.8 * 1000) / 3; // Total 1.8 seconds divided by 6 increments

    const timer = setInterval(() => {
      currentday += 1;
      if (currentday > 4) {
        clearInterval(timer);
      } else {
        setDay(currentday);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countOffers = async () => {
    let currentoffer = 1;
    const interval = (1.8 * 1000) / 37; // Total 1.8 seconds divided by 37 increments

    const timer = setInterval(() => {
      currentoffer += 1;
      if (currentoffer > 37) {
        clearInterval(timer);
      } else {
        setOffer(currentoffer);
      }
    }, interval);

    return () => clearInterval(timer);
  };
  const countPercent = async () => {
    let currentpercent = 1;
    const interval = (1.8 * 1000) / 97; // Total 1.8 seconds divided by 97 increments

    const timer = setInterval(() => {
      currentpercent += 1;
      if (currentpercent > 98) {
        clearInterval(timer);
      } else {
        setPercent(currentpercent);
      }
    }, interval);

    return () => clearInterval(timer);
  };

  return (
    <div className="home">
      <div id="__next">
        <NavBar />
        <div>
          <div>
            <div className="w-full h-screen">
              <div className="bg-slate-900/80 h-screen w-full mx-auto text-center items-center flex flex-col justify-center">
                <video
                  id="vid"
                  className=" "
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: "-1",
                  }}
                >
                  <source src={video} type="video/mp4" />
                </video>
                <div className="text-4xl grid md:w-[1240px] font-bold text-white justify-center">
                  <div className="grid md:flex font-sans text-3xl tracking-wider">
                    <span>Мы</span>
                    <span>
                      <div className="Typewriter" style={{ color: "orange" }}>
                        <Typewriter
                          options={{
                            strings: [
                              "Опытные",
                              "Надежные",
                              "Профессиональные",
                              "Компетентные",
                            ],
                            autoStart: true,
                            loop: true,
                            wrapperClassName: "Typewriter__wrapper mg-l-4",
                            cursorClassName: "Typewriter__cursor white",
                          }}
                        />
                      </div>
                    </span>
                    <span className="grid md:flex">
                      Специалисты по подбору персонала
                    </span>
                  </div>
                  <a
                    className="text-sm tracking-widest text-white bg-transparent border-[4px] py-4 border-white mx-auto mt-6 w-[280px] h-[60px] hover:border-[#fca311] ease-in-out duration-150 transition hover:-translate-y-1 hover:scale-x-110 hover:bg-gray-500/70"
                    href="search-job"
                  >
                    Я ИЩУ РАБОТУ
                  </a>
                  <a
                    className="text-sm tracking-widest text-white bg-transparent border-[4px] py-4 border-white mx-auto mt-6 w-[280px] h-[60px] hover:border-[#fca311] ease-in-out duration-150 transition hover:-translate-y-1 hover:scale-x-110 hover:bg-gray-500/70"
                    href="clients"
                  >
                    Я НАНИМАЮ
                  </a>
                </div>
                <div></div>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full bg-[#14213d]">
                <div>
                  <svg
                    id="companyintrotopsvg"
                    className="fill-[#1b2b4d]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                  >
                    <path
                      className="elementor-shape-fill"
                      d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                    ></path>
                  </svg>
                </div>
                <h1 className="text-4xl font-bold text-center font-sans text-white">
                  Magnet Recruit — ваш лучший партнер по подбору персонала
                </h1>
                <div className="md:grid md:grid-cols-2 md:w-[1000px] mx-auto">
                  <div className="md:mt-2 p-5">
                    <p className="text-white text-justify font-sans py-1">
                      Мы располагаем штаб-квартирой в оживленном городе
                      Манчестере. специализируемся на подборе специалистов
                      начальных, средних, и старших уровней для предприятий
                      пищевой промышленности и товаров повседневного спроса. Наш
                      проверенный опыт охватывает широкий спектр функций, в том
                      числе Операции, цепочка поставок, технические вопросы,
                      NPD, инжиниринг и Здоровье и безопасность. В Magnet
                      Recruit мы берем на себя все сложности подбора персонала в
                      этих отраслях, обеспечение тщательного внимания к вашему
                      бизнесу.
                    </p>
                  </div>
                  <div className="w-full justify-center items-center">
                    <img
                      alt="Location"
                      srcSet={`${locationw256} 1x, ${locationw640} 2x`}
                      src={locationw640}
                      width="250"
                      height="250"
                      decoding="async"
                      data-nimg="1"
                      className="mx-auto"
                      loading="lazy"
                      style={{ color: "transparent" }}
                    />
                    <div className="md:p-2 sm:p-10 font-sans">
                      <p className="text-white text-justify px-4">
                        Магнит Рекрут гордится своим профессионализмом,
                        прозрачностью и энтузиазмом, которые определяют нашу
                        корпоративную культуру. Как преданные своему делу
                        профессионалы, мы понимаем нюансы проблем подбора
                        персонала, и мы стремимся их преодолеть.
                      </p>
                      <p className="text-white text-justify p-2 px-4">
                        Мы твердо верим, что фундамент сильного бизнеса
                        заключается в людях. В компании Magnet Recruit мы
                        непоколебимо стремимся помочь вам в создании
                        высококвалифицированного коллектива. Наш тщательный
                        отбор кандидатов гарантирует не только идеальное
                        соответствие вашей спецификации работы, но и
                        соответствует вашей организационной культуре и основным
                        ценностям.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#E5E5E5] pb-10 font-sans">
                <div className="w-full mt-[-1]">
                  <svg
                    id="companyintrosvg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    className="fill-[#13213d]"
                  >
                    <path
                      transform="scale(1,-1) translate(0, -100)"
                      className="elementor-shape-fill"
                      d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                    ></path>
                  </svg>
                </div>
                <div className="md:w-[1080px] md:grid md:grid-cols-2 mx-auto">
                  <div className="md:grid md:grid-cols-2 pl-4 pb-10">
                    <div>
                      <div className="items-center justify-center py-4 mb-8 mx-auto">
                        <div className="flex justify-center">
                          <img
                            alt="Bag"
                            srcSet={`${bagw96} 1x, ${bagw256} 2x`}
                            src={bagw256}
                            width="80"
                            height="80"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h1 className="text-3xl text-center text-[#fca311] font-semibold pt-3">
                          <span>{days}</span>
                          <span className="font-sans ml-2">дня</span>
                        </h1>
                        <p className="text-center text-sm">
                          Среднее время рассмотрения предложения о работе
                        </p>
                      </div>
                      <div className="items-center">
                        <div className="flex justify-center">
                          <img
                            alt="Search"
                            srcSet={`${searchw96} 1x, ${searchw256} 2x`}
                            src={searchw256}
                            width="80"
                            height="80"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h1 className="text-3xl text-center text-[#fca311] font-bold pt-3">
                          <span>{offers}</span>
                        </h1>
                        <p className="text-center text-sm">
                          Средние постоянные предложения
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="items-center py-4 mx-auto mb-8">
                        <div className="flex justify-center">
                          <img
                            alt="Arrow"
                            srcSet={`${arroww96} 1x, ${arroww256} 2x`}
                            src={arroww256}
                            width="80"
                            height="80"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h1 className="text-3xl text-center text-[#fca311] font-semibold pt-3">
                          <span>1</span>
                          <span className="font-sans ml-2">день</span>
                        </h1>
                        <p className="text-center text-sm">
                          Время обработки платежей
                        </p>
                      </div>
                      <div className="items-center">
                        <div className="flex justify-center">
                          <img
                            alt="Nots"
                            srcSet={`${notsw96} 1x, ${notsw256} 2x`}
                            src={notsw256}
                            width="80"
                            height="80"
                            decoding="async"
                            data-nimg="1"
                            loading="lazy"
                            style={{ color: "transparent" }}
                          />
                        </div>
                        <h1 className="text-3xl text-center text-[#fca311] font-bold pt-3">
                          <span>{percent}</span>%
                        </h1>
                        <p className="text-center text-sm">Степень успеха</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-28 font-sans">
                    <h1 className="text-3xl text-[#fca311] tracking-wide font-bold px-4">
                      Расширение возможностей вашего роста за пределами
                      ограничений
                    </h1>
                    <p className="text-justify text-sm pt-3 tracking-wider px-4">
                      Наша основная цель вращается вокруг развития прочного,
                      надежные и подлинные отношения как с нашими Клиенты и
                      кандидаты.
                    </p>
                    <p className="text-justify text-sm pt-1 tracking-wider px-4">
                      Мы признаем, что истинная ценность выходит из глубокого
                      понимание ваших уникальных требований. Предоставляя
                      беспрецедентный сервис, наши специалисты адаптируют свои
                      подход к удовлетворению ваших конкретных потребностей,
                      обеспечивая бесперебойную работу и интеграцию наших
                      решений по подбору персонала с вашими целями.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-[#E5E5E5]">
                <svg
                  id="testmonialsvgtop"
                  className="fill-[#14213d]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1000 100"
                  preserveAspectRatio="none"
                >
                  <path
                    className="elementor-shape-fill"
                    d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                  ></path>
                </svg>
              </div>
              <div className="justify-center bg-[#14213d]">
                <h1 className="text-4xl text-center font-sans font-bold text-white">
                  Отзывы
                </h1>
              </div>
              <Testimonials />
              <Carousel page="home" />
            </div>
            <div className="w-full bg-[#14213d]">
              <div className="md:w-full md:grid md:grid-cols-2 m-auto">
                <div className="items-center p-8">
                  <h1 className="text-3xl text-[#fca311] font-bold py-4 text-center">
                    Кандидаты
                  </h1>
                  <p className="text-center text-sm py-2 text-white">
                    Расскажите нам о себе и о том, что вас мотивирует, чтобы мы
                    могли информировать вас о наших вакансиях или поиске работы
                    от вашего имени.
                  </p>
                  <div className="flex items-center mx-auto justify-center py-8">
                    <a href="candidates">
                      <button className="uppercase py-2 px-5 text-sm bg-[#fca311] hover:bg-slate-500 hover:text-white rounded-sm">
                        Читать далее
                      </button>
                    </a>
                  </div>
                </div>
                <div className="items-center bg-slate-200 py-8">
                  <h1 className="text-3xl text-[#14213d] font-bold py-4 text-center">
                    Клиенты
                  </h1>
                  <p className="text-center text-sm text-[#14213d] p-2">
                    Расскажите нам о себе и о том, что вас мотивирует, чтобы мы
                    могли информировать вас о наших вакансиях или поиске работы
                    от вашего имени.
                  </p>
                  <div className="flex items-center mx-auto justify-center py-6">
                    <a href="clients">
                      <button className="uppercase py-2 text-white px-5 text-sm bg-[#14213d] hover:bg-[#fca213] hover:text-[#14213d] rounded-sm">
                        Читать далее
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
