import React from "react";
import Slider from "react-slick";
import loadable from "@loadable/component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/organisms/Main.scss";

const Catalog = loadable(() => import("../molecules/Catalog"));
const Price = loadable(() => import("../molecules/Price"));
const Bonus = loadable(() => import("../molecules/Bonus"));
const Map = loadable(() => import("../molecules/Map"));

const menuItems = [
  { title: "Галерея", link: "#header", section: "gallery" },
  { title: "Как проехать", link: "", section: "path" },
  { title: "Расчет стоимости", link: "", section: "price" },
  { title: "Расточка дисков", link: "", section: "sharpen" },
  { title: "Контакты", link: "", section: "contacts" },
  { title: "ПРивет я ОЛЕХ", link: "", section: "some" },
];

const Main = (): JSX.Element => {
  const settings = {
    dots: false,
    speed: 500,
    className: "slider variable-width",
    variableWidth: true,
    infinite: false,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <main className="main">
      <div className="main-nav__wrapper common-margin">
        <Slider {...settings}>
          {menuItems.map(
            (item): JSX.Element => (
              <p
                key={item.title}
                className="main-nav__item"
                aria-hidden="false"
              >
                {item.title}
              </p>
            )
          )}
        </Slider>
      </div>
      <section className="common-margin">
        <h2 className="common-title">
          <span className="orange-letter">О</span>&nbsp;нас
        </h2>
        <div className="about-me__wrapper">
          <h3 className="subtitle">Аренда</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            libero. Animi corrupti est, id porro ullam similique beatae
            doloribus ducimus unde autem inventore molestiae reprehenderit
            doloremque voluptatem a ex eligendi.
          </p>
        </div>
      </section>
      <Catalog />
      <Price />
      <Bonus />
      <Map />
    </main>
  );
};

export default Main;
