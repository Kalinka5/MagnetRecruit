import { AiOutlineComment } from "react-icons/ai";

import whoweare from "./bg/whoweare.gif";

import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

function SearchJob() {
  return (
    <div className="clients">
      <div id="__next">
        <NavBar />
        <div className="w-full">
          <div className="md:w-full bg-no-repeat bg-cover bg-center bg-fixed bg-[#14213d96]">
            <div>
              <img
                src={whoweare}
                style={{
                  position: "absolute",
                  zIndex: "-1",
                  height: "100vh",
                  width: "100vw",
                }}
              />
              <svg
                id="wwrtopsvg"
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
            <div className="py-28">
              <h1 className="text-white text-5xl tracking-widest text-center font-extrabold">
                Поиск Работы
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
                <path
                  className="elementor-shape-fill"
                  d="M761.9,44.1L643.1,27.2L333.8,98L0,3.8V0l1000,0v3.9"
                ></path>
              </svg>
            </div>
          </div>
          <div className="w-full bg-[#e5e5e5]">
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
            <div className="py-16"></div>
            <div className="md:pt-24 md:px-16 md:py-5 md:my-[3rem] md:my-5 mx-auto px-4 md:mx-0 md:col-span-2 md:grid md:gap-1 md:grid-auto-rows-max overflow-y-auto">
              <div className="md:mx-48 m-4 border-[#14213d] border rounded-3xl md:p-12 p-6">
                <p className="text-xl text-justify">
                  В Magnet Recruit мы уделяем приоритетное внимание
                  персонализированным поездкам и стремимся понять ваши
                  уникальные навыки и стремления. Вместо традиционного подхода
                  «один размер подходит всем» мы предлагаем индивидуальный опыт,
                  выходящий за рамки обычных списков вакансий. Наша команда
                  преданных своему делу консультантов готовы помочь вам
                  составить оптимизированно резюме, подготовить к собеседованию
                  и многое другое. Возьмите и отправьте свои данные, позвольте
                  нам курировать возможностями, которые соответствуют вашим
                  целям
                </p>
                <div className="pt-16">
                  <div className="items-center flex justify-center">
                    <a
                      type="submit"
                      className="shadow- flex my-4 px-4 p-2 rounded-sm hover:bg-[#fca311] hover:text-white uppercase bg-slate-200 shadow-slate-400 shadow-lg"
                      href="https://t.me/magnetuk"
                    >
                      <AiOutlineComment
                        className="mx-2 my-auto"
                        style={{ fontSize: "25px" }}
                      />
                      Связаться С Нами
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default SearchJob;
