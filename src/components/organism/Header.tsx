import { useRef, Suspense, lazy, useState } from "react";
import "../../styles/organisms/Header.scss";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import Phone from "../../assets/svg/phone.svg";
import BurgerMenuButton from "../../assets/svg/burger-menu.svg";

const BurgerMenu = lazy(() => import("../molecules/BurgerMenu"));

const Header: React.FC = (): JSX.Element => {
  const [visible, changeVisibleBurgerMenu] = useState<boolean>(false);

  const ref: any = useRef();

  useOnClickOutside(ref, () => changeVisibleBurgerMenu(false));

  return (
    <header className="header-wrapper" id="header">
      <div className="content header">
        <h2 className="header-title">
          <span className="orange-letter">G</span>
          ARAGE
        </h2>
        <p className="header__time">
          <span>С 11:00</span>
          <span className="header__time__space"> &nbsp;</span>
          <span>ДО 23:00</span>
        </p>
        <a href="tel:+375(33)917-80-41" className="header__phone__link">
          <img
            src={Phone}
            alt="Телефон +375339178041"
            aria-label="Телефон +375339178041"
            className="header__phone"
          />
        </a>
        <a
          href="tel:+375(33)917-80-41"
          className="header__phone__link__desktop"
        >
          +375(33)917-80-41
        </a>
        {/* <img
          src={BurgerMenuButton}
          onClick={() => changeVisibleBurgerMenu(true)}
          className="header__burger-menu"
          alt="Открыть меню"
          role="button"
        /> */}
        {/* <Suspense fallback={null}>
          {visible && (
            <div className="burger-menu__background">
              <div ref={ref}>
                <BurgerMenu changeVisibleBurgerMenu={changeVisibleBurgerMenu}/>
              </div>
            </div>
          )}
        </Suspense> */}
      </div>
    </header>
  );
};

export default Header;
