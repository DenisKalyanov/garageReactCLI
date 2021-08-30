import React, { useContext, useRef, Suspense } from "react";
import "../../styles/organisms/Header.scss";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { GlobalContext, InitialState } from "../../store/state";
import Phone from "../../assets/svg/phone.svg";
import BurgerMenuButton from "../../assets/svg/burger-menu.svg";

const BurgerMenu = React.lazy(() => import("../molecules/BurgerMenu"));

const Header: React.FC = (): JSX.Element => {
  const {
    state,
    changeVisibleBurgerMenu,
  }: {
    state: InitialState;
    changeVisibleBurgerMenu: (value: boolean) => void;
  } = useContext(GlobalContext);
  const { visible } = state;
  const ref: any = useRef();

  useOnClickOutside(ref, () => changeVisibleBurgerMenu(false));

  return (
    <header className="header">
      <h2 className="common-title">
        <span className="orange-letter">G</span>
        ARAGE
      </h2>
      <span className="header__time">
        С 09:00
        <br />
        ДО 21:00
      </span>
      <a href="tel:+375(33)699-86-04" className="header__phone__link">
        <img
          src={Phone}
          alt="Телефон +375336998604"
          aria-label="Телефон +375336998604"
          className="header__phone"
        />
      </a>
      <img
        src={BurgerMenuButton}
        onClick={() => changeVisibleBurgerMenu(true)}
        className="header__burger-menu"
        alt="Открыть меню"
        role="button"
      />
      <Suspense fallback={<p>Загрузка меню...</p>}>
        {visible && (
          <div className="burger-menu__background">
            <div ref={ref}>
              <BurgerMenu />
            </div>
          </div>
        )}
      </Suspense>
    </header>
  );
};

export default Header;
