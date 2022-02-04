import "../../styles/molecules/Price.scss";
import Car from "../../assets/images/car.png";

const prices = [
  {
    sale: "10%",
    timeCoast: [
      {
        time: "2 часа",
        coast: 18,
      },
      {
        time: "3 часа",
        coast: 27,
      },
      {
        time: "4 часа",
        coast: 36,
      },
    ],
  },
  {
    sale: "20%",
    timeCoast: [
      {
        time: "5 часов",
        coast: 40,
      },
      {
        time: "6 часов",
        coast: 48,
      },
    ],
  },
  {
    sale: "30%",
    timeCoast: [
      {
        time: "7 часов",
        coast: 50,
      },
      {
        time: "8 часов",
        coast: 55,
      },
    ],
  },
];

const PriceDesktop = (): JSX.Element => (
  <section className="common-margin common__top-margin__wrapper content priceVisibleDesktop">
    <div id="priceDesktop" className="common__top-margin" />
    <h2 className="common-title">
      <span className="orange-letter">Ц</span>ены
    </h2>
    <div className="price-content-wrapper__desktop">
      <div className="price-content-wrapper__desktop__top">
        <div className="price-content-wrapper__desktop__top-coast">
          <p className="price-content-wrapper__desktop__top-price__time">1 час</p>
          <p className="price-content-wrapper__desktop__top-price__value">10р.</p>
        </div>
        <div>
          <h3 className="price-header__top">Стоимость аренды</h3>
          <p className="description">В зависимости от колличества арендуемого времени вы получаете скидку за каждый последующий час аренды.</p>
        </div>
        <img className="price-image__top"src={Car} alt="" />
      </div>
      <div className="price-content-wrapper-clocks__desktop">
        {prices.map((item) => (
          <div className="price-content-clocks-block">
            <div className="price-content-clocks-block__sale">Скидка {item.sale}</div>
            {item.timeCoast.map((item) => (
              <div className="price-content-clocks-block__coast">
                <p className="price-content-clocks-block__coast__time">{item.time}</p>
                <p className="price-content-clocks-block__coast__money">{item.coast}р.</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* <div>
        <div className="price-content-clocks-block__coast">
          <p className="price-content-clocks-block__coast__time">2 часа</p>
          <p className="price-content-clocks-block__coast__money">18р</p>
        </div>
      </div> */}
    </div>
  </section>
);

export default PriceDesktop;
