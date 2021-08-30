import React from "react";

type Props = {
  time: string;
  hour: string;
  coast: string;
};

const TimeCoast: React.FC<Props> = ({
  time,
  hour,
  coast,
}: Props): JSX.Element => (
  <div className="price-right-template">
    <div className="price-right-template__top">
      <p className="price-right-template-time">{time}</p>
      <p className="price-right-template-hour">{hour}</p>
    </div>
    <p className="price-right-template__bottom">{coast}</p>
  </div>
);

export default TimeCoast;
