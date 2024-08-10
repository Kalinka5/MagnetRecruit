import logow384 from "../_next/logow384.png";
import logow750 from "../_next/logow750.png";

function NavBar() {
  return (
    <div className="navbar">
      <div
        className=""
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          height: "3px",
          background: "transparent",
          zIndex: "99999999999",
          width: "100%",
        }}
      >
        <div
          className=""
          style={{
            height: "100%",
            background: "#fff",
            transition: "all 500ms ease",
            width: "0%",
          }}
        >
          <div
            style={{
              boxShadow: "0 0 10px #fff, 0 0 10px #fff",
              width: "5%",
              opacity: "1",
              position: "absolute",
              height: "100%",
              transition: "all 500ms ease",
              transform: "rotate(3deg) translate(0px, -4px)",
              left: "-10rem",
            }}
          ></div>
        </div>
      </div>
      <div className="w-full absolute pt-2 z-[1] overflow-x-hidden">
        <div className="flex justify-between items-center px-2 md:px-10 w-full">
          <a href="/">
            <img
              alt="Logo"
              srcSet={`${logow384} 1x, ${logow750} 2x`}
              src={logow750}
              width="350"
              height="50"
              decoding="async"
              data-nimg="1"
              className="cursor-pointer"
              loading="lazy"
              style={{ color: "transparent" }}
            />
          </a>
          <div>
            <ul className="hidden md:flex gap-6 text-lg">
              <a href="who-we-are">
                <li className="cursor-pointer font-bold text-white hover:text-[#F9A826] hover:scale-110 transition-all duration-500 ease-in-out">
                  Кто мы
                </li>
              </a>
              <a href="clients">
                <li className="cursor-pointer font-bold text-white hover:text-[#F9A826] hover:scale-110 transition-all duration-500 ease-in-out">
                  Клиенты
                </li>
              </a>
              <a href="candidates">
                <li className="cursor-pointer font-bold text-white hover:text-[#F9A826] hover:scale-110 transition-all duration-500 ease-in-out">
                  Кандидаты
                </li>
              </a>
              <a href="search-job">
                <li className="cursor-pointer font-bold text-white hover:text-[#F9A826] hover:scale-110 transition-all duration-500 ease-in-out">
                  Поиск работы
                </li>
              </a>
              <a href="contact-us">
                <li className="cursor-pointer font-bold text-white hover:text-[#F9A826] hover:scale-110 transition-all duration-500 ease-in-out">
                  Связаться с нами
                </li>
              </a>
            </ul>
          </div>
          <div className="md:hidden">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="fill-white"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </div>
        </div>
        <div className="fixed top-[-100%] w-[100%] ease-in-out duration-500">
          <div className="flex py-4 flex-col">
            <ul className="uppercase text-white font-semibold">
              <a href="who-we-are">
                <li className="p-2">Кто мы</li>
              </a>
              <a href="client">
                <li className="p-2">Клиенты</li>
              </a>
              <a href="candidates">
                <li className="p-2">Кандидаты</li>
              </a>
              <a href="search-job">
                <li className="p-2">Поиск работы</li>
              </a>
              <a href="contact-us">
                <li className="p-2">Связаться с нами</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
