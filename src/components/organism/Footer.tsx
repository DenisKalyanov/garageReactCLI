import Instagram from "../../assets/svg/instagram.svg";
import Viber from "../../assets/svg/viber.svg";
import Vk from "../../assets/svg/vk.svg";

import "../../styles/organisms/Footer.scss";

const Footer = (): JSX.Element => (
  <footer className="footer content">
    <div className="footer__social">
      <p className="footer__social__title">Мы в соц. сетях:</p>
      <div className="footer__buttons">
        <a href="https://www.instagram.com/garage_brest/">
          <img
            src={Instagram}
            alt=""
            className="footer__button"
            role="button"
          />
        </a>
        <a href="viber://add?number=375339178041">
          <img src={Viber} alt="" className="footer__button" role="button" />
        </a>
        <a href="https://vk.com/garage_brest">
          <img src={Vk} alt="" className="footer__button" role="button" />
        </a>
      </div>
    </div>
    <div className="footer__contacts">
      <a href="tel:+375(33)917-80-41" className="footer__phone">
        +375(33)917-80-41
      </a>
      {/* <a href="mailto:garage@mail.ru" className="footer__email">
        garage@mail.ru
      </a> */}
    </div>
  </footer>
);

export default Footer;
