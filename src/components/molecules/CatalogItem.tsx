import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

type Props = {
  currentList: any;
};

const CatalogItem: React.FC<Props> = (props): JSX.Element => {
  const slider = useRef(null);

  const [settings, setSettings] = useState({
    dots: false,
    speed: 500,
    className: "slider variable-width",
    variableWidth: true,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    initialSlide: 0,
    currentSlide: 0,
  });

  useEffect(() => {
    //@ts-ignore
    //@ts-ignore
  }, [props]);


  return (
    <Slider {...settings} >
      {props.currentList.map(
        // @ts-ignore
        (item) => (
          <div key={item.title} className="main-catalog__item__wrapper">
            <div className="main-catalog__item">
              <div className="main-catalog__item__header">
                <h3 className="main-catalog__item__title">{item.title}</h3>
                <span className="main-catalog__status" />
              </div>
              <div className="main-catalog__item__content">
                <img
                  src={item.image}
                  alt={item.title}
                  className="main-catalog__item__image"
                />
                <div className="main-catalog__item__description">
                  <p className="main-catalog__item__description__title">
                    {item.description.firstTitle}:
                  </p>
                  <p className="main-catalog__item__description__description">
                    {item.description.firstDescription}
                  </p>
                  <p className="main-catalog__item__description__title">
                    {item.description.secondTitle}:
                  </p>
                  <p className="main-catalog__item__description__description">
                    {item.description.secondDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </Slider>
  );
};
export default CatalogItem;
