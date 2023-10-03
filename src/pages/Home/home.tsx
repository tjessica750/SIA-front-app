import HomeIcon from "@mui/icons-material/Home";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ListIcon from "@mui/icons-material/List";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import { Route, Routes } from "react-router-dom";
import { Transaccion } from "../transaccion/transaccion";
import { HomeLayout } from "../../container/sidebar/homelayout";

const optionsList = [
  {
    title: "Inicio",
    Icon: HomeIcon,
    path: "/home/Inicio",
  },
  {
    title: "Transaccion",
    Icon: AssessmentIcon,
    path: "/home/transactions",
    subs: [
      {
        title: "Nueva",
        Icon: PostAddIcon,
        path: "/home/transaction/new",
      },
      {
        title: "Ordenes De Trabajo",
        Icon: ListIcon,
        path: "/home/orden",
      },
      {
        title: "Pendientes",
        Icon: PlaylistRemoveIcon,
        path: "/home/Pendientes",
      },
      {
        title: "Diagnostico",
        Icon: AssignmentIcon,
        path: "/home/Historial",
      },
      {
        title: "Historial",
        Icon: HistoryIcon,
        path: "/home/Historial",
      },
    ],
  },
  {
    title: "Configuracion",
    Icon: SettingsIcon,
    path: "/home/Configuracion",
  },
];

const Home = () => {
  return (
    <HomeLayout listOptions={optionsList}>
      <Routes>
        <Route path="/transaction/new" element={<Transaccion />} />
      </Routes>
    </HomeLayout>
  );
};

export default Home;
