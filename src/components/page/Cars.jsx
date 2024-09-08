import React, { useEffect } from "react";
import RenaultClio from "../../assets/Renault_Clio 1.png";
import JumboHiace from "../../assets/Jumbo_Hiace 1.png";
import FotonToano from "../../assets/Foton_Toano2022 1.png";
import MahindraScorpio from "../../assets/Mahindra_Scorpio_S11_MT_7S 1.png";
import NissanHiace from "../../assets/Nissan_Hiace 1.png";
import ToyotaHiace from "../../assets/Toyota_Hiace 1.png";
import SuzukiSwift from "../../assets/Suzuki_Swift 1.png";
import Ford from "../../assets/Ford 1.png";
import KiaSportage from "../../assets/Kia_Sportage 1.png";
import carbanner from'../../assets/bannercar.jpg'

import { IoIosSearch } from "react-icons/io";


import Card from "../UI/Card";
function Cars() {
  useEffect(() => {
    window.scrollTo(0,0)
   }, [])
   
  const data = [
    {
      title: "Renault Clio",
      image: RenaultClio,
      seats: 5,
      type: "hybrid",
      car_structure: "automatic",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Jumbo Hiace",
      image: JumboHiace,
      seats: 15,
      type: "Petrol",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Foton Toano 2022",
      image: FotonToano,
      seats: 15,
      type: "Diesel",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Nissan Hiace",
      image: NissanHiace,
      seats: 7,
      type: "Diesel",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Nissan Hiace",
      image: MahindraScorpio,
      seats: 9,
      type: "Petrol",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Toyota Hiace",
      image: ToyotaHiace,
      seats: 25,
      type: "Petrol",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Ford",
      image: Ford,
      seats: 5,
      type: "Petrol",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Kia Sportage",
      image: KiaSportage,
      seats: 5,
      type: "Hybrid",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
    {
      title: "Suzuki Swift",
      image: SuzukiSwift,
      seats: 5,
      type: "Hybrid",
      car_structure: "Manual",
      description: `Culpa est exercitation amet commodo ipsum dolor. Minim ad cillum veniam eu est labore duis Lorem in occaecat exercitation incididunt. Laboris cupidatat dolor nisi eiusmod ipsum. Occaecat esse cillum et laboris culpa amet.

Culpa cupidatat dolor exercitation dolor do. Ea officia in eu nostrud anim. Anim adipisicing non fugiat dolor pariatur adipisicing deserunt non dolor eu. Anim adipisicing reprehenderit tempor est amet magna qui minim tempor ut elit amet. Commodo et id ad veniam occaecat non reprehenderit.

Nisi veniam magna aute magna ea. Labore culpa laboris labore fugiat consequat enim irure nostrud. Et enim officia aliquip magna cupidatat est qui anim. Sunt nulla ullamco sit pariatur fugiat incididunt sint dolor ullamco in proident laborum cillum culpa. Eiusmod exercitation cupidatat nisi reprehenderit fugiat elit id velit. Reprehenderit irure enim commodo ex proident qui laborum sunt culpa incididunt veniam in ullamco consequat. Tempor consequat laborum duis adipisicing sint excepteur ut nulla velit enim.

Culpa ex aliquip consequat pariatur quis magna. Dolore et mollit tempor nostrud duis ex cupidatat cillum do velit Lorem quis aute nostrud. Cillum nisi culpa fugiat ex sint proident veniam. Nulla deserunt nostrud velit minim dolor magna proident Lorem eu. Minim cupidatat exercitation Lorem et Lorem magna non fugiat eu. Est cillum officia exercitation consectetur sit non occaecat exercitation ad consequat do. Lorem do dolor est dolore aute ad duis ex id deserunt id Lorem.

Laborum occaecat non amet commodo quis minim do proident est excepteur. Elit veniam fugiat sit cupidatat consequat esse nostrud sint eiusmod laborum tempor id laboris. Non tempor amet laborum qui pariatur nulla magna consectetur tempor enim minim et. Aute quis eu Lorem officia. Lorem eiusmod consequat velit ex et exercitation proident nisi culpa est ullamco ex. Ea minim non laborum non ex nisi reprehenderit elit aute dolore sint duis consequat. Pariatur anim officia occaecat anim enim do elit reprehenderit dolor magna do.

Aliqua fugiat labore excepteur cillum ut duis cillum qui laboris veniam officia. Officia ex non cillum Lorem in labore pariatur consectetur eu consectetur. Ullamco ea ex sit aute velit nulla ea sint ex. Cupidatat velit ullamco et veniam adipisicing mollit excepteur in qui. Consectetur anim reprehenderit magna id reprehenderit occaecat ut deserunt exercitation cillum voluptate irure fugiat occaecat. In officia eu quis non.

Et eiusmod sunt ex dolore incididunt cupidatat culpa commodo aute aliqua dolor aute cupidatat tempor. Exercitation amet id nostrud reprehenderit in enim aute Lorem consequat anim culpa ut. Et cillum minim in id. Eiusmod in eu sit mollit duis pariatur labore. Ad ad esse laboris sint veniam labore esse fugiat voluptate. Minim nulla adipisicing amet in exercitation magna proident elit officia eu ea pariatur consequat sint. Labore eiusmod fugiat pariatur culpa pariatur voluptate tempor reprehenderit adipisicing ad ipsum adipisicing.

Excepteur excepteur non Lorem ut. Lorem occaecat id in esse. Cillum nisi sunt aliqua est ipsum aliquip magna. Tempor eu fugiat nulla anim qui irure sint amet et duis eu.

Labore labore magna qui laboris dolor exercitation ullamco laborum. Deserunt minim magna ea consectetur do excepteur minim laborum. Laborum est voluptate dolor Lorem eu.

Ea sit aliqua non nisi quis est aliqua mollit velit adipisicing consequat aliqua eu. Dolore non ea sunt eiusmod elit enim labore. Ipsum consectetur cillum ea dolor excepteur et.`,
    },
  ];

  const carfilter=[
    {
      title:"Vehicle Type",
      subData:[
        {
          title:'Car'
        },
        {
          title:'Scorpio'
        },
        {
          title:'Hiace'
        },
        {
          title:'Tata Sumo'
        },
      ]
    },
    {
      title:"Fuel Type",
      subData:[
        {
          title:'Petrol'
        },
        {
          title:'Diesel'
        },
        {
          title:'Electric'
        },
        {
          title:'Hybrid'
        },
      ]
    },
    {
      title:"Car Brand",
      subData:[
        {
          title:'Suzuki'
        },
        {
          title:'Honda'
        },
        {
          title:'Hyundai'
        },
        {
          title:'Toyota'
        },
        {
          title:'Nissan'
        },
        {
          title:'Mahindra'
        },
      ]
    },
    
    
  ]
  return (
    <div className="grid h-fit gap-20">
      <div className="border-b-2 h-96 capitalize flex flex-col gap-2 relative text-white  border-gray-300 justify-center">
        <div className="h-full relative  w-full  top-0 left-0 -z-10">
          <img src={carbanner} className="h-full w-full object-cover" />
          <div className="bg-primarycolor bg-opacity-20 h-full w-full absolute top-0 z-10">

          </div>
        </div>
        <div className="w-11/12 absolute top-0 left-0 right-0 flex h-full justify-center flex-col gap-2 mx-auto">
          <div>home listing</div>
          <div className="font-semibold text-3xl">
            Explore All Cars{" "}
            <span className="font-normal text-base">(15 cars found)</span>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto relative  grid grid-cols-7  gap-10">
        <div className="col-span-2 relative   ">
       <div className="overflow-clip  border  flex flex-col gap-14 pb-10  rounded-3xl">
       <div className="bg-primarycolor h-24 flex items-center px-4">
            <div className="bg-white rounded-full overflow-clip px-2 flex items-center ">
              <input className="w-full h-14 px-3 outline-none text-sm placeholder:font-light placeholder:text-gray-300 " placeholder="search car by name" />
              <div className="h-9 w-10 flex items-center justify-center text-gray-100 text-xl bg-gray-500 rounded-full">
              <IoIosSearch />
              </div>
            </div>
          </div>
              {/* car filters */}
              <div className="flex flex-col px-10 gap-7 ">
                {
                  carfilter.map((val,i)=>{
                    return(
                      <div key={i} className={`flex flex-col ${i==carfilter.length-1?"border-0":"border-b"} pb-10 border-gray-400 gap-3`}>
                      <h1 className="font-medium text-lg">{val.title}</h1>
                   <div className="flex flex-col gap-4">
                    {
                      val.subData.map((item,ind)=>{
                        return(
                          <div className="flex items-center gap-3">
                          <div className="h-5 w-5 border-primarycolor border-2"></div>
                          <div>{item.title}</div>
                        </div>
                        )
                      })
                    }
                   </div>
                      </div>
                    )
                  })
                }
       
            </div>
       </div>
        </div>
        <div className="col-span-5 grid grid-cols-3 gap-3">
          {data.map((val, i) => {
            return (
              <Card
                key={i}
                title={val.title}
                image={val.image}
                seats={val.seats}
                car_structure={val.car_structure}
                type={val.type}
                alldata={val}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cars;
