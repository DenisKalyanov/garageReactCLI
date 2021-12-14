import loadable from "@loadable/component";
import { HashLink as Link } from "react-router-hash-link";

import FastCar from "../../assets/images/fastCar.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/organisms/Main.scss";
import { menuItems } from "../../static/menuItems";
import { useEffect, useState } from "react";
import PriceDesctop from "../molecules/PriceDesctop";

const Catalog = loadable(() => import("../molecules/Catalog"));
const Price = loadable(() => import("../molecules/Price"));
const Bonus = loadable(() => import("../molecules/Bonus"));
const Map = loadable(() => import("../molecules/Map"));

const Main = (): JSX.Element => {
  const [isClick, setClick] = useState(false);
  const onClick = () => {
    setClick(true);
  };

  useEffect(() => {}, [isClick]);
  return (
    <main className="main">
      <div className="main-nav__wrapper">
        {menuItems.map(
          (item): JSX.Element => (
            <Link
              to={`/#${item.link}`}
              key={item.title}
              className="main-nav__item"
              aria-hidden="false"
            >
              {item.title}
            </Link>
          )
        )}
      </div>
      <section className="common-margin">
        <h2 className="common-title">
          <span className="orange-letter">О</span>&nbsp;нас
        </h2>
        <div className="about-me__wrapper">
          <h3 className="subtitle">Аренда</h3>
          <p className="description">
            GARAGE на час - это место, где ВЫ сами сможете самостоятельно
            обслужить свою машину и будете уверены что все работы выполнены
            качественно. <br/>Мы предоставляем Вам хороший инструмент в
            помещении, которое оборудовано двумя подъёмниками и смотровой ямой.
          </p>
          <img
            onClick={onClick}
            src={FastCar}
            alt=""
            className={`about-me__car ${
              isClick ? "about-me__car__click" : null
            }`}
          />
        </div>
      </section>
      <Catalog />
      {/* <Price /> */}
      <PriceDesctop />
      <Bonus />
      <Map />
    </main>
  );
};

export default Main;
