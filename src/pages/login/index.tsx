import {
  FormControl,
  Box,
  Card,
  CardContent,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";

import logo from "../../assets/LOGO-NEGRO-SIN-FONDO.png";

const Login: React.FC = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column",  paddingTop:"60px"  }}
    >
      <Card sx={{ width: "auto", textAlign: "center"}}>
        <CardContent sx={{ margin: 10, paddingLeft:10,paddingRight:10 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              src={logo}
              sx={{ width: "100px", height: "100px", m: 5 }}
            ></Avatar>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column", 
              margin:2
            }}
          >
            <Typography variant="h5">Iniciar Sesion</Typography>
            <Typography variant="subtitle2" sx={{padding:"3px"}}>
              Sistema de Identificación de automotores <br/> avaluo comercial
            </Typography>
          </Box>
          <Box >
          <FormControl sx={{width:"100%"}}>
            <TextField label="Correo" type="email" margin="normal"></TextField>
            <TextField
              label="Contraseña"
              type="password"
              margin="normal"
            ></TextField>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Iniciar Sesion
            </Button>
            <Button variant="text" sx={{ mt: 3 }}>Olvido su contraseña?</Button>
          </FormControl>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Login;
