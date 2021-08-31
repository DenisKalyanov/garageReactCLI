import Instagram from "../../assets/svg/instagram.svg";
import Viber from "../../assets/svg/viber.svg";
import Vk from "../../assets/svg/vk.svg";

import "../../styles/organisms/Footer.scss";

const Footer = (): JSX.Element => (
  <footer className="footer">
    <div className="footer__social">
      <p className="footer__social__title">Мы в соц. сетях:</p>
      <div className="footer__buttons">
        <img src={Instagram} alt="" className="footer__button" role="button"/>
        <img src={Viber} alt="" className="footer__button" role="button"/>
        <img src={Vk} alt="" className="footer__button" role="button"/>
      </div>
    </div>
    <div className="footer__contacts">
      <a href="tel:+375(33)699-86-04" className="footer__phone">
        +375(33)999-88-00
      </a>
      <a href="mailto:garage@mail.ru" className="footer__email">
        garage@mail.ru
      </a>
    </div>
  </footer>
);

export default Footer;