import React from "react";
import "../../styles/molecules/Price.scss";
import TimeCoast from "../atoms/TimeCoast";

const Price = (): JSX.Element => {
  const priceList = [
    [
      { time: "2", hour: "часа", coast: "18 р.", percent: "10" },
      { time: "3", hour: "часа", coast: "27 р." },
      { time: "4", hour: "часа", coast: "36 р." },
    ],
    [
      { time: "5", hour: "часов", coast: "40 р.", percent: "20" },
      { time: "6", hour: "часов", coast: "48 р." },
    ],
    [
      { time: "7", hour: "часов", coast: "50 р.", percent: "30" },
      { time: "8", hour: "часов", coast: "55 р." },
    ],
  ];

  return (
    <section className="common-margin">
      <h2 className="common-title">
        <span className="orange-letter">Ц</span>ены
      </h2>
      <div className="price-wrapper">
        <div className="price-left">
          <div className="price-left__first">
            <h3 className="price-title">Стоимость аренды</h3>
            <p className="price-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non,
              deleniti excepturi reprehenderit odio ut veritatis.
            </p>
            <div className="price-template">
              <div className="price-template__top">
                <p className="price-template-time">1</p>
                <p className="price-template-hour">час</p>
              </div>
              <p className="price-template__bottom">10 р.</p>
            </div>
          </div>
          <div className="price-left__second">
            <p>Аренда на целый день 60 рублей</p>
            <span className="price-template__percent">50%</span>
          </div>
        </div>
        <div className="price-right">
          {priceList.map((items) => (
            <div className="price-right__wrapper" key={items[0].time}>
              {items.map((item) => (
                <TimeCoast
                  time={item.time}
                  hour={item.hour}
                  coast={item.coast}
                  key={item.time}
                />
              ))}
              <span className="price-right-template__percent">
                {items[0].percent}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
