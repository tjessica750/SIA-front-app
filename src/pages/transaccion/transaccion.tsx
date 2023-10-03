import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const steps = [
  "servicio",
  "Personas",
  "Buscar Vehiculo",
  "Datos legales del vehiculo",
  "Informacion sobre el metodo de pago",
];

export const Transaccion: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton onClick={handleStep(index)}>{label}</StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <FormControl sx={{ mt: 5 }}>
              <Box
                sx={{ display: "flex", justifyContent: "space-between" }}
                padding={2}
              >
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: "automovil" },
                    { label: "moto" },
                    { label: "lancha" },
                    { label: "bicicleta" },
                  ]}
                  sx={{ width: 300, m: 1 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Vehiculo" />
                  )}
                />

                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={[
                    { label: "diesel" },
                    { label: "corriente" },
                    { label: "extra" },
                    { label: "gas" },
                  ]}
                  sx={{ width: 300, m: 1 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Gasolina" />
                  )}
                />
              </Box>
              <Box sx={{ m: 3 }}>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  Tipo:
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Basico"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Intermedio"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Peritaje"
                  />
                  <FormControlLabel
                    value="disabled"
                    control={<Radio />}
                    label="Avaluo Total"
                  />
                </RadioGroup>

                <FormLabel id="demo-row-radio-buttons-group-label">
                  Adicionales:
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Suspension"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Compresion"
                  />
                </RadioGroup>
              </Box>
            </FormControl>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                variant="contained"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Anterior
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button variant="contained" onClick={handleNext} sx={{ mr: 1 }}>
                Siguiente
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  >
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} variant="contained">
                    {completedSteps() === totalSteps() - 1
                      ? "Finish"
                      : "Complete Step"}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
};
