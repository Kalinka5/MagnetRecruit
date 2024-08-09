import { useEffect, useState } from "react";

function Testimonials() {
  const [slide, setSlide] = useState(0);
  const slides = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      <div className="w-full bg-[#14213d]">
        <div className="mx-auto">
          <div className="w-full">
            <div className="md:w-[1080px] mx-auto">
              <div
                className="slick-slider md:w-[900px] p-4 mx-auto slick-initialized"
                dir="ltr"
              >
                <div className="slick-list">
                  <div
                    className="slick-track"
                    style={{
                      width: "700%",
                      left: "-100%",
                      transform: `translateX(-${slide * 14.285714285714286}%)`,
                      transition: "transform 1s ease-in-out",
                    }}
                  >
                    <div
                      data-index="-1"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Сэм ранее уже занимался со мной, представление
                              подходящих временных возможностей на моем уровне.
                              У него хорошая сеть связей и поддержал меня
                              ресурсом проекта требования без проблем. Я был бы
                              рад снова нанять сотрудников через Сэма и
                              рекомендовать его другим организациям, которые
                              требуется ресурсная поддержка проекта.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Робин Мичин
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Руководитель капитала в McCormick
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="0"
                      className="slick-slide slick-active slick-current"
                      tabIndex="-1"
                      aria-hidden="false"
                      style={{
                        outline: "none",
                        width: "14.285714285714286%",
                      }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-3xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              В течение ряда лет я находился в связаться с
                              Сэмом, обсудить работу возможности во временном
                              инжиниринге рынок. Его знание рынка и связи внутри
                              бизнеса отличные. Он нашел время и приложил
                              усилия, чтобы понять мою идеальную должность и
                              подобрали меня к моему нынешнему работодателю. я
                              настоятельно рекомендую его внимание к потребности
                              как его кандидатов, так и бизнеса Клиенты. К этому
                              вниманию следует добавить детали и его полное
                              понимание своего Набор навыков кандидатов и каковы
                              они способен предложить потенциальным
                              работодателям свои дружелюбный и веселый характер
                              осуществил процесс переезда на новый
                              трудоустройство без стресса.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Джон Ф.Флей
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Руководитель программы в Gousto
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="1"
                      className="slick-slide"
                      tabIndex="-1"
                      aria-hidden="true"
                      style={{
                        outline: "none",
                        width: "14.285714285714286%",
                      }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Я очень доволен вашим обслуживанием предлагали за
                              последние 5 месяцев или около того. Ваше общение
                              превосходно, что сделало процесс найма простой и
                              простой. С начала моего контракт, ты всегда
                              находил время проверить меня по телефону, чтобы
                              убедиться все хорошо.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Дерек Селби
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Менеджер проектов в Густо
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="2"
                      className="slick-slide"
                      tabIndex="-1"
                      aria-hidden="true"
                      style={{
                        outline: "none",
                        width: "14.285714285714286%",
                      }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Сэм ранее уже занимался со мной, представление
                              подходящих временных возможностей на моем уровне.
                              У него хорошая сеть связей и поддержал меня
                              ресурсом проекта требования без проблем. Я был бы
                              рад снова нанять сотрудников через Сэма и
                              рекомендовать его другим организациям, которые
                              требуется ресурсная поддержка проекта.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Робин Мичин
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Руководитель капитала в McCormick
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="3"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-3xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              В течение ряда лет я находился в связаться с
                              Сэмом, обсудить работу возможности во временном
                              инжиниринге рынок. Его знание рынка и связи внутри
                              бизнеса отличные. Он нашел время и приложил
                              усилия, чтобы понять мою идеальную должность и
                              подобрали меня к моему нынешнему работодателю. я
                              настоятельно рекомендую его внимание к потребности
                              как его кандидатов, так и бизнеса Клиенты. К этому
                              вниманию следует добавить детали и его полное
                              понимание своего Набор навыков кандидатов и каковы
                              они способен предложить потенциальным
                              работодателям свои дружелюбный и веселый характер
                              осуществил процесс переезда на новый
                              трудоустройство без стресса.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Джон Ф.Флей
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Руководитель программы в Gousto
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="4"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Я очень доволен вашим обслуживанием предлагали за
                              последние 5 месяцев или около того. Ваше общение
                              превосходно, что сделало процесс найма простой и
                              простой. С начала моего контракт, ты всегда
                              находил время проверить меня по телефону, чтобы
                              убедиться все хорошо.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Дерек Селби
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Менеджер проектов в Густо
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-index="5"
                      tabIndex="-1"
                      className="slick-slide slick-cloned"
                      aria-hidden="true"
                      style={{ width: "14.285714285714286%" }}
                    >
                      <div>
                        <div
                          tabIndex="-1"
                          style={{
                            width: "100%",
                            display: "inline-block",
                          }}
                        >
                          <div className="bg-[#14212d] rounded-xl p-2 mx-auto">
                            <h1 className="text-white text-normal italic tracking-wider font-sans text-center">
                              Сэм ранее уже занимался со мной, представление
                              подходящих временных возможностей на моем уровне.
                              У него хорошая сеть связей и поддержал меня
                              ресурсом проекта требования без проблем. Я был бы
                              рад снова нанять сотрудников через Сэма и
                              рекомендовать его другим организациям, которые
                              требуется ресурсная поддержка проекта.
                            </h1>
                          </div>
                          <div className="">
                            <h1 className="mt-6 font-sans tracking-wider font-bold text-center text-[#fca311]">
                              Робин Мичин
                            </h1>
                            <h1 className="text-sm text-white text-center font-sans tracking-wider font-bold">
                              Руководитель капитала в McCormick
                            </h1>
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
      </div>
    </div>
  );
}

export default Testimonials;
