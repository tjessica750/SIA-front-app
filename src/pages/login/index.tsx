import { FormControl,  Box, Card, CardContent, Avatar, TextField, Button } from "@mui/material";

import logo from "../../assets/LOGO-NEGRO-SIN-FONDO.png"

const Login: React.FC = () => {
    return (
      
            <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column"}}>
                <Card sx={{ width:"auto", textAlign: "center"}}>
                    <CardContent sx={{ margin: 10 }}>
                        <FormControl>
                        <Avatar src={logo} sx={{ width: "100px", height: "100px", m:5}}></Avatar> 
                            <TextField label="Correo" type="email" margin="normal"></TextField>
                            <TextField label="Contraseña" type="password" margin="normal"></TextField>
                            <Button variant="contained" size="large" sx={{ mt: 2 }} >
                                Iniciar Sesion
                            </Button>
                        </FormControl>
                    </CardContent>
                </Card>
            </Box>
  
    )
}
export default Login;