import SideBar from "../../container/sidebar/sidebar";
import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ListIcon from "@mui/icons-material/List";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Route, Routes } from "react-router-dom";
import { Transaccion } from "../transaccion/transaccion";

const optionsList = [
  {
    title: "Inicio",
    Icon: HomeIcon,
    path: "/Inicio",
  },
  {
    title: "Transaccion",
    Icon: PostAddIcon,
    path: "/transaccion",
  },
  {
    title: "Orden",
    Icon: ListIcon,
    path: "/orden",
  },
  {
    title: "Pendientes",
    Icon: PlaylistRemoveIcon,
    path: "/Pendientes",
  },
  {
    title: "Historial",
    Icon: HistoryIcon,
    path: "/Historial",
  },
  {
    title: "Configuracion",
    Icon: SettingsIcon,
    path: "/Configuracion",
  },
  {
    title: "Cerrar Sesion",
    Icon: ExitToAppIcon,
    path: "/Cerrar-sesion",
  },
];

const Home = () => {
  return (
    <>
      <SideBar optionsList={optionsList}>
        <Routes>
          <Route path="inicio/transaccion" element={<Transaccion />} />
        </Routes>
      </SideBar>
    </>
  );
};

export default Home;
