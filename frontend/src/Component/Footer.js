import logow640 from "../_next/logow640.png";
import logow828 from "../_next/logow828.png";

import MapComponent from "./Map";

import "../_next/static/css/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="w-full bg-[#14213d] font-sans">
        <div className="pt-10 md:w-[1240px] px-4 md:px-auto mx-auto">
          <img
            alt="Logo"
            srcSet={`${logow640} 1x, ${logow828} 2x`}
            src={logow828}
            width="400"
            height="80"
            decoding="async"
            data-nimg="1"
            loading="lazy"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="md:w-[1240px] md:grid md:grid-cols-3 mx-5 md:mx-auto">
          <div className="md:grid">
            <div className="mt-5 mx-auto w-full">
              <h1 className="font-sans text-white text-center md:text-left text-2xl md:text-xl font-bold">
                Связаться
              </h1>
              <div className="flex m-auto text-white px-2 md:px-0 py-2 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="cursor-pointer"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p className="text-white text-xs tracking-widest py-2 ml-4 cursor-pointer">
                  69-71 Lever Street, Manchester M1 1FL
                </p>
              </div>
              <div className="flex m-auto text-white px-2 md:px-0 py-2 items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  height="30"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <a
                  className="text-white text-sm tracking-widest py-2 ml-4"
                  href="tel:0161 832 4265"
                >
                  0161 718 6019
                </a>
              </div>
              <div className="flex m-auto text-white px-2 md:px-0 py-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  height="40"
                  width="40"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(4,4)">
                      <path d="M32,10c12.15,0 22,9.85 22,22c0,12.15 -9.85,22 -22,22c-12.15,0 -22,-9.85 -22,-22c0,-12.15 9.85,-22 22,-22zM39.589,40.968c0.404,-1.241 2.301,-13.615 2.534,-16.054c0.071,-0.738 -0.163,-1.229 -0.619,-1.449c-0.553,-0.265 -1.371,-0.133 -2.322,0.21c-1.303,0.47 -17.958,7.541 -18.92,7.951c-0.912,0.388 -1.775,0.81 -1.775,1.423c0,0.431 0.256,0.673 0.96,0.924c0.732,0.261 2.577,0.82 3.668,1.121c1.05,0.29 2.243,0.038 2.913,-0.378c0.709,-0.441 8.901,-5.921 9.488,-6.402c0.587,-0.48 1.056,0.135 0.576,0.616c-0.48,0.48 -6.102,5.937 -6.844,6.693c-0.901,0.917 -0.262,1.868 0.343,2.249c0.689,0.435 5.649,3.761 6.396,4.295c0.747,0.534 1.504,0.776 2.198,0.776c0.694,-0.001 1.059,-0.915 1.404,-1.975z"></path>
                    </g>
                  </g>
                </svg>
                <a
                  type="submit"
                  className="flex rounded-sm hover:bg-[#fca311] hover:text-white foot-pad"
                  href="https://t.me/magnetuk"
                >
                  Перейти в телеграм
                </a>
              </div>
            </div>
          </div>
          <div className="mt-5 px-4">
            <h1 className="font-sans text-white text-center md:text-left text-2xl md:text-xl font-bold">
              Быстрые ссылки
            </h1>
            <div className="grid">
              <ul className="text-white text-center md:text-justify">
                <a href="/">
                  <li className="py-2 text-[#fca311] md:text-sm hover:text-white">
                    Magnet Recruit
                  </li>
                </a>
                <a href="who-we-are">
                  <li className="py-2 md:text-sm hover:text-[#fca311]">
                    Кто мы
                  </li>
                </a>
                <a href="clients">
                  <li className="py-2 md:text-sm hover:text-[#fca311]">
                    Клиенты
                  </li>
                </a>
                <a href="candidates">
                  <li className="py-2 md:text-sm hover:text-[#fca311]">
                    Кандидаты
                  </li>
                </a>
                <a href="search-job">
                  <li className="py-2 md:text-sm hover:text-[#fca311]">
                    Поиск работы
                  </li>
                </a>
                <a href="contact-us">
                  <li className="py-2 md:text-sm hover:text-[#fca311]">
                    Связаться с нами
                  </li>
                </a>
              </ul>
            </div>
          </div>
          <MapComponent />
        </div>
        <div className="mt-12 flex justify-center text-white">
          <ul className="md:flex grid md:justify-between md:gap-14 text-center">
            <a href="Component/PravicyPolicy">
              <li className="md:py-2 hover:text-[#fca311] text-sm">
                Политика Конфиденциальности
              </li>
            </a>
            <a href="Component/CookiePolicy">
              <li className="md:py-2 hover:text-[#fca311] text-sm">
                Политика использования файлов cookie
              </li>
            </a>
            <a href="Component/RetentionPolicy">
              <li className="md:py-2 hover:text-[#fca311] text-sm">
                Политика удержания
              </li>
            </a>
          </ul>
        </div>
        <div className="text-center pb-4 text-xs text-white">
          <p>Copyright © 2024 Magnet Recruit Limited. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
