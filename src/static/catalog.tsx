import MATRIX_13562 from "../assets/images/catalog/basic/MATRIX-13562.png";
import MATRIX_15426 from "../assets/images/catalog/basic/MATRIX-15426.png";
import YT_08513 from "../assets/images/catalog/basic/YT-08513.png";
import YT_38791 from "../assets/images/catalog/basic/YT-38791.png";

// brakes
import Forsage_65601 from "../assets/images/catalog/brakes/Forsage-65601.png";
import TA_B1009 from "../assets/images/catalog/brakes/TA-B1009.png";
import YT_2180 from "../assets/images/catalog/brakes/YT-2180.png";

//engine
import BAS_TECHNIC from "../assets/images/catalog/engine/Bas-technic-Germany.png";
import cepMasloFilter from "../assets/images/catalog/engine/cepMasloFilter.png";
import dinamometrika from "../assets/images/catalog/engine/dinamometrika.png";
import force_6474630 from "../assets/images/catalog/engine/force-6474630.png";
import HCB_A2207 from "../assets/images/catalog/engine/HCB-A2207.png";
import HCB_A4005 from "../assets/images/catalog/engine/HCB-A4005.png";
import HZ_271003L from "../assets/images/catalog/engine/HZ-27.1.003L.png";
import JTC_4090 from "../assets/images/catalog/engine/JTC-4090.png";
import JTC_4843 from "../assets/images/catalog/engine/JTC-4843.png";
import JTC_4845 from "../assets/images/catalog/engine/JTC-4845.png";
import Partner_PA_G324 from "../assets/images/catalog/engine/Partner-PA-G324.png";
import RF_917G17 from "../assets/images/catalog/engine/RF-917G17.png";
import siemnikMaslo from "../assets/images/catalog/engine/siemnikMaslo.png";
import toptul_GAAI0401 from "../assets/images/catalog/engine/toptul-GAAI0401.png";
import UZM_80 from "../assets/images/catalog/engine/UZM-80.png";

//keys
import Key39833 from "../assets/images/catalog/keys/Key39833.png";
import klychiNakidnie from "../assets/images/catalog/keys/klychiNakidnie.png";
import klychiRazreznie from "../assets/images/catalog/keys/klychiRazreznie.png";
import RF_1022_04 from "../assets/images/catalog/keys/RF-1022-04.png";
import sorvanieGrani from "../assets/images/catalog/keys/sorvanieGrani.png";
import TORX_FORCE from "../assets/images/catalog/keys/TORX-FORCE.png";
import torxGolovki from "../assets/images/catalog/keys/torxGolovki.png";

//locksmith
import bolgarka from "../assets/images/catalog/locksmith/bolgarka.png";
import drel from "../assets/images/catalog/locksmith/drel.png";
import zatochka from "../assets/images/catalog/locksmith/zatochka.png";
import gaikolom from "../assets/images/catalog/locksmith/gaikolom.png";
import M050_3_1 from "../assets/images/catalog/locksmith/M050-3-1.png";
import obratniMolotokk from "../assets/images/catalog/locksmith/obratniMolotokk.png";
import press from "../assets/images/catalog/locksmith/press.png";
import tiski from "../assets/images/catalog/locksmith/tiski.png";
import YT_2801 from "../assets/images/catalog/locksmith/YT-2801.png";

//other
import JTC_C_2120 from "../assets/images/catalog/other/JTC-C-2120.png";
import multimetr from "../assets/images/catalog/other/multimetr.png";
import toptul_JGAI1802 from "../assets/images/catalog/other/toptul-JGAI1802.png";
import YT_0844 from "../assets/images/catalog/other/YT-0844.png";
import YT_2313 from "../assets/images/catalog/other/YT-2313.png";

//pneumatics
import Eland_Wind_50_2CO from "../assets/images/catalog/pneumatics/Eland-Wind-50-2CO.png";
import pneumozybilo from "../assets/images/catalog/pneumatics/pneumozybilo.png";
import pnevmoGaikovert from "../assets/images/catalog/pneumatics/pnevmoGaikovert.png";

//PULLERS
import F_904U4 from "../assets/images/catalog/pullers/F-904U4.png";
import pryjini from "../assets/images/catalog/pullers/pryjini.png";
import RF_5049A from "../assets/images/catalog/pullers/RF-5049A.png";
import siemnik1 from "../assets/images/catalog/pullers/siemnik1.png";
import siemnik2 from "../assets/images/catalog/pullers/siemnik2.png";
import siemnik3 from "../assets/images/catalog/pullers/siemnik3.png";
import siemnik4 from "../assets/images/catalog/pullers/siemnik4.png";

export const catalogItems = [
  { id: 1, title: "Базовый", section: "" },
  { id: 2, title: "Тормоза", section: "brakes" },
  { id: 3, title: "Двигатель", section: "engine" },
  { id: 4, title: "Ключи/головки", section: "keys" },
  { id: 5, title: "Cлесарный", section: "locksmith" },
  { id: 6, title: "Разное", section: "other" },
  { id: 7, title: "Пневмоинструмент", section: "pneumatics" },
  { id: 8, title: "Съёмники", section: "pullers" },
];

const firstTitle = "Назнач.";
const secondTitle = "Предметов";

export const catalogList = {
  basic: [
    {
      title: "MATRIX 13562",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Слесарный",
        secondTitle: secondTitle,
        secondDescription: "12 шт.",
      },
      image: MATRIX_13562,
    },
    {
      title: "MATRIX 15426",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Ключи",
        secondTitle: secondTitle,
        secondDescription: "12 шт.",
      },
      image: MATRIX_15426,
    },
    {
      title: "YT 08513",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Фонарик",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: YT_08513,
    },
    {
      title: "YT 38791",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор",
        secondTitle: secondTitle,
        secondDescription: "108 шт.",
      },
      image: YT_38791,
    },
  ],

  brakes: [
    {
      title: "FORSAGE 65601",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Труборез",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: Forsage_65601,
    },
    {
      title: "TA B1009",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Для сведения тормозных цилиндров",
        secondTitle: secondTitle,
        secondDescription: "18 шт.",
      },
      image: TA_B1009,
    },
    {
      title: "YT 2180",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Для оппрессовки тормозной системы",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: YT_2180,
    },
  ],

  engine: [
    {
      title: "BAS TECHNIC",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемник масляных фильтров",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: BAS_TECHNIC,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Цепной съемник масляных фильтров",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: cepMasloFilter,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Ключ динаметр.",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: dinamometrika,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Ключ динаметр.",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: force_6474630,
    },
    {
      title: "HBC",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор стопоров для замены ГРМ",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: HCB_A2207,
    },
    {
      title: "HBC",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор стопоров для замены ГРМ",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: HCB_A4005,
    },
    {
      title: "HOREX",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Компрессометр дизельный",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: HZ_271003L,
    },
    {
      title: "JTC",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор для замены ГРМ",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: JTC_4090,
    },
    {
      title: "JTC",
      description: {
        firstTitle: firstTitle,
        firstDescription:
          "Набор фиксаторов дизельных двигателей для замены ГРМ",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: JTC_4843,
    },
    {
      title: "JTC",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор фиксаторов двигателей для замены ГРМ",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: JTC_4845,
    },
    {
      title: "HOREX",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Компрессометр безниновый",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: Partner_PA_G324,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription:
          "Для восстановления резьбы сливного отверстия поддона",
        secondTitle: secondTitle,
        secondDescription: "7 шт.",
      },
      image: RF_917G17,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемник маслянных фильтров",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: siemnikMaslo,
    },
    {
      title: "TOPTUL",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор шпиковертов",
        secondTitle: secondTitle,
        secondDescription: "4 шт.",
      },
      image: toptul_GAAI0401,
    },
    {
      title: "TROMMELBERG",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Для сбора масла",
        secondTitle: secondTitle,
        secondDescription: "1 шт.",
      },
      image: UZM_80,
    },
  ],

  keys: [
    {
      title: "AvtoDelo",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Торцевые головки 3/4",
        secondTitle: secondTitle,
        secondDescription: "20",
      },
      image: Key39833,
    },
    {
      title: "Pro statrul",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Накидные ключи",
        secondTitle: secondTitle,
        secondDescription: "12",
      },
      image: klychiNakidnie,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Ключи разрезные",
        secondTitle: secondTitle,
        secondDescription: "7",
      },
      image: klychiRazreznie,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Головки-вставки",
        secondTitle: secondTitle,
        secondDescription: "6",
      },
      image: RF_1022_04,
    },
    {
      title: "Yato",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор головок для сорванных граней",
        secondTitle: secondTitle,
        secondDescription: "9",
      },
      image: sorvanieGrani,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор torx",
        secondTitle: secondTitle,
        secondDescription: "Да",
      },
      image: TORX_FORCE,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Головки 3/4 и torx",
        secondTitle: secondTitle,
        secondDescription: "30",
      },
      image: torxGolovki,
    },
  ],

  locksmith: [
    {
      title: "Werker",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Болгарка",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: bolgarka,
    },
    {
      title: "DWT",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Дрель",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: drel,
    },
    {
      title: "Werker",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Заточной станок",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: zatochka,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Гайколом",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: gaikolom,
    },
    {
      title: "Forsage",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Метчики и плашки",
        secondTitle: secondTitle,
        secondDescription: "50",
      },
      image: M050_3_1,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Обратный молоток",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: obratniMolotokk,
    },
    {
      title: "BIG RED",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Пресс гидравлический",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: press,
    },
    {
      title: "СССР",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Тиски",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: tiski,
    },
    {
      title: "YATO",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Ударная отвёртка",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: YT_2801,
    },
  ],

  other: [
    {
      title: "JTC",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор для центровки дисков сцепления",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: JTC_C_2120,
    },
    {
      title: "Toptul",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Для опрессовки системы охлажденния",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: toptul_JGAI1802,
    },
    {
      title: "GVDA",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Мультиметр",
        secondTitle: secondTitle,
        secondDescription: "2",
      },
      image: multimetr,
    },
    {
      title: "Yato",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемники обивки",
        secondTitle: secondTitle,
        secondDescription: "11",
      },
      image: YT_0844,
    },
    {
      title: "Yato",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Клещи обжимные",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: YT_2313,
    },
  ],

  pneumatics: [
    {
      title: "Eland",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Компрессор",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: Eland_Wind_50_2CO,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Пневмозубило",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: pneumozybilo,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Пневмогайковёрт",
        secondTitle: secondTitle,
        secondDescription: "1",
      },
      image: pnevmoGaikovert,
    },
  ],

  pullers: [
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор для съёма сальников",
        secondTitle: secondTitle,
        secondDescription: "4",
      },
      image: F_904U4,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемники пружин",
        secondTitle: secondTitle,
        secondDescription: "8",
      },
      image: pryjini,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Набор съемников стопорных колец",
        secondTitle: secondTitle,
        secondDescription: "6",
      },
      image: RF_5049A,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемник",
        secondTitle: secondTitle,
        secondDescription: "2",
      },
      image: siemnik1,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемник",
        secondTitle: secondTitle,
        secondDescription: "2",
      },
      image: siemnik2,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемник",
        secondTitle: secondTitle,
        secondDescription: "2",
      },
      image: siemnik3,
    },
    {
      title: "FORCE",
      description: {
        firstTitle: firstTitle,
        firstDescription: "Съемник",
        secondTitle: secondTitle,
        secondDescription: "2",
      },
      image: siemnik4,
    },
  ],
};
