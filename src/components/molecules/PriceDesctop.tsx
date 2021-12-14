import "../../styles/molecules/Price.scss";
import TimeCoast from "../atoms/TimeCoast";
import { priceList } from "../../static/price";

const PriceDesctop = (): JSX.Element => (
  <section className="common-margin common__top-margin__wrapper content">
    <div id="price" className="common__top-margin" />
    <h2 className="common-title">
      <span className="orange-letter">Ц</span>ены
    </h2>
    <div className="price-content-wrapper__desktop">
      <div>1 час 10 рублей</div>
      <div className="price-content-wrapper-clocks__desktop">
        <div className="price-content-clocks-block">
          <div className="price-content-clocks-block__sale">Скидка 10% </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
        </div>
        <div className="price-content-clocks-block">
          <div className="price-content-clocks-block__sale">Скидка 10% </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
        </div>
        <div className="price-content-clocks-block">
          <div className="price-content-clocks-block__sale">Скидка 10% </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
          <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
        </div>
      </div>
      <div>
      <div className="price-content-clocks-block__coast">
            <p className="price-content-clocks-block__coast__time">2 часа</p>
            <p className="price-content-clocks-block__coast__money">18р</p>
          </div>
      </div>
    </div>
  </section>
);

export default PriceDesctop;
