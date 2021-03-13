
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import BerandaScreen from "./Screen/BerandaScreen";
import TabungScreen from "./Screen/TabungScreen";
import KerucutScreen from "./Screen/KerucutScreen";
import KubusScreen from "./Screen/KubusScreen";
import BalokScreen from "./Screen/BalokScreen";
import BolaScreen from "./Screen/BolaScreen";
import DesimalScreen from "./Screen/DesimalScreen";
import BinerScreen from "./Screen/BinerScreen";
import OktalScreen from "./Screen/OktalScreen";
import HexaScreen from "./Screen/HexaScreen";
import CelciusScreen from "./Screen/CelciusScreen";
import BMIScreen from "./Screen/BMIScreen";
import SiswaScreen from "./Screen/SiswaScreen";

const AppNavigator = createDrawerNavigator({
  Beranda : {
    screen: BerandaScreen
  },
  Tabung : {
    screen: TabungScreen
  },
  Kerucut : {
    screen: KerucutScreen
  },
  Kubus : {
    screen: KubusScreen
  },
  Balok : {
    screen: BalokScreen
  },
  Bola : {
    screen: BolaScreen
  },
  Desimal : {
    screen: DesimalScreen
  },
  Biner : {
    screen: BinerScreen
  },
  Oktal : {
    screen: OktalScreen
  },
  Hexa :{
    screen: HexaScreen
  },
  Celcius : {
    screen: CelciusScreen
  },
  BMI : {
    screen: BMIScreen
  },
  Siswa  : {
    screen: SiswaScreen
  }
});
export default createAppContainer(AppNavigator);