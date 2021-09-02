import { useContext, useRef, Suspense, lazy } from "react";
import "../../styles/organisms/Header.scss";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { GlobalContext, InitialState } from "../../store/state";
import Phone from "../../assets/svg/phone.svg";
import BurgerMenuButton from "../../assets/svg/burger-menu.svg";

const BurgerMenu = lazy(() => import("../molecules/BurgerMenu"));

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
    <header className="header-wrapper" id="header">
      <div className="content header">
        <h2 className="header-title">
          <span className="orange-letter">G</span>
          ARAGE
        </h2>
        <p className="header__time">
          <span>С 09:00</span>
          <span className="header__time__space"> &nbsp;</span>
          <span>ДО 21:00</span>
        </p>
        <a href="tel:+375(33)699-86-04" className="header__phone__link">
          <img
            src={Phone}
            alt="Телефон +375336998604"
            aria-label="Телефон +375336998604"
            className="header__phone"
          />
        </a>
        <a
          href="tel:+375(33)699-86-04"
          className="header__phone__link__desktop"
        >
          +375(33)699-86-04
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
      </div>
    </header>
  );
};

export default Header;
