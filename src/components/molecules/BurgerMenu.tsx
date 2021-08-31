import { useContext, useEffect } from "react";

import "../../styles/molecules/BurgerMenu.scss";
import Close from "../../assets/svg/close.svg";

import Instagram from "../../assets/svg/instagram.svg";
import Viber from "../../assets/svg/viber.svg";
import Vk from "../../assets/svg/vk.svg";

import BurgerMenuLink from "../atoms/BurgerMenuLink";
import { GlobalContext } from "../../store/state";

const BurgerMenu = (): JSX.Element => {
  const {
    changeVisibleBurgerMenu,
  }: {
    changeVisibleBurgerMenu: (value: boolean) => void;
  } = useContext(GlobalContext);

  const links: { title: string; link: string }[] = [
    { title: "Главная", link: "https://www.google.com/" },
    { title: "О нас", link: "https://www.google.com/" },
    { title: "Каталог", link: "https://www.google.com/" },
    { title: "Цены", link: "https://www.google.com/" },
    { title: "Бонусы", link: "https://www.google.com/" },
    { title: "Контакты", link: "https://www.google.com/" },
    { title: "Как проехать", link: "https://www.google.com/" },
  ];
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <section className="burger-menu">
      <div className="burger-menu__header">
        <div>
          <h2 className="common-title">
            <span className="orange-letter">G</span>
            ARAGE
          </h2>
          <span className="burger-menu__time">С 09:00 ДО 21:00</span>
        </div>
        <img
          src={Close}
          alt=""
          onClick={() => changeVisibleBurgerMenu(false)}
        />
      </div>
      <div className="burger-menu__main-wrapper">
        <nav>
          <ul className="burger-menu__links">
            {links.map((link) => (
              <BurgerMenuLink key={link.title} item={link} />
            ))}
          </ul>
        </nav>
        <div className="burger-menu_contacts">
          <a href="tel:+375(33)699-86-04" className="burger-menu__phone">
            +375(33)999-88-00
          </a>
          <a href="mailto:garage@mail.ru" className="burger-menu__email">
            garage@mail.ru
          </a>
          <div>
            <img src={Instagram} alt="" className="burger-menu__button" />
            <img src={Viber} alt="" className="burger-menu__button" />
            <img src={Vk} alt="" className="burger-menu__button" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BurgerMenu;