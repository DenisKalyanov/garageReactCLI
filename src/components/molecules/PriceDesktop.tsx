import "../../styles/molecules/Price.scss";

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
    <div id="price" className="common__top-margin" />
    <h2 className="common-title">
      <span className="orange-letter">Ц</span>ены
    </h2>
    <div className="price-content-wrapper__desktop">
      <div>1 час 10 рублей</div>
      <div className="price-content-wrapper-clocks__desktop">
        {prices.map((item) => (
          <div className="price-content-clocks-block">
            <div className="price-content-clocks-block__sale">
              Скидка {item.sale}
            </div>
            {item.timeCoast.map((item) => (
              <div className="price-content-clocks-block__coast">
                <p className="price-content-clocks-block__coast__time">
                  {item.time}
                </p>
                <p className="price-content-clocks-block__coast__money">
                  {item.coast}р.
                </p>
              </div>
            ))}
          </div>
        ))}
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

export default PriceDesktop;
