import Lift1 from "../assets/images/lift1.png";
import Pneumo from "../assets/images/pneumo.png";
import Kit from "../assets/images/kit.png";

export const catalogItems = [
    { id: 1, title: "Подъемники", section: "" },
    { id: 2, title: "Пневмоинструмент", section: "pneumatics" },
    { id: 3, title: "Инструмент", section: "tools" },
  ];
  
export const catalogList = {
    lifts: [
      {
        title: "Force 1",
        description: {
          firstTitle: "Подъем",
          firstDescription: "4 тонны",
          secondTitle: "Высота подъема",
          secondDescription: "1780мм",
        },
        image: Lift1,
      },
      {
        title: "Force 2",
        description: {
          firstTitle: "Подъем",
          firstDescription: "3 тонны",
          secondTitle: "Высота подъема",
          secondDescription: "1880мм",
        },
        image: Lift1,
      },
      {
        title: "Force 3",
        description: {
          firstTitle: "Подъем",
          firstDescription: "5 тонн",
          secondTitle: "Высота подъема",
          secondDescription: "1400мм",
        },
        image: Lift1,
      },
    ],
    pneumatic: [
      {
        title: "Pneumatic 1",
        description: {
          firstTitle: "Мощность",
          firstDescription: "700Н",
          secondTitle: "Вес",
          secondDescription: "2кг",
        },
        image: Pneumo,
      },
      {
        title: "Pneumatic 2",
        description: {
          firstTitle: "Мощность",
          firstDescription: "700Н",
          secondTitle: "Вес",
          secondDescription: "2кг",
        },
        image: Pneumo,
      },
      {
        title: "Pneumatic 3",
        description: {
          firstTitle: "Мощность",
          firstDescription: "700Н",
          secondTitle: "Вес",
          secondDescription: "2кг",
        },
        image: Pneumo,
      },
    ],
    tools: [
      {
        title: "Tool 1",
        description: {
          firstTitle: "Комплект",
          firstDescription: "100 шт.",
          secondTitle: "Магнитный",
          secondDescription: "Да",
        },
        image: Kit,
      },
      {
        title: "Tool 2",
        description: {
          firstTitle: "Комплект",
          firstDescription: "70 шт.",
          secondTitle: "Магнитный",
          secondDescription: "Нет",
        },
        image: Kit,
      },
      {
        title: "Tool 3",
        description: {
          firstTitle: "Комплект",
          firstDescription: "20 шт.",
          secondTitle: "Магнитный",
          secondDescription: "Да",
        },
        image: Kit,
      },
    ],
  };