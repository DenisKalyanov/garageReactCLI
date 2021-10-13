import "../../styles/molecules/Price.scss";
import TimeCoast from "../atoms/TimeCoast";
import { priceList } from "../../static/price";

const Price = (): JSX.Element => (
  <section className="common-margin common__top-margin__wrapper content">
    <div id="price" className="common__top-margin" />
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
      {/* <div className="price-right__desktop">
        <div className="price-right__desktop__wrapper">
          <div className="price-right__desktop__wrapper__left">
            <div>first_1</div>
            <div>first_1</div>
            <div>first_1</div>
          </div>
          <div className="price-right__desktop__wrapper__right">first_2</div>
        </div>
        <div>
          <div>second_1</div>
          <div>second_2</div>
        </div>
        <div>
          <div>third_1</div>
          <div>third_2</div>
        </div>
      </div> */}
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

export default Price;
