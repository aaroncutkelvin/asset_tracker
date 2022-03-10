import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TimePicker from "@mui/lab/TimePicker";
import DateTimePicker from "@mui/lab/DateTimePicker";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import MobileDatePicker from "@mui/lab/MobileDatePicker";

function AddAsset() {
  const [value, setValue] = React.useState("Controlled");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChanges = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [val, setVal] = React.useState(new Date("2022-03-10T21:11:54"));

  const handleFix = (newVal) => {
    setVal(newVal);
  };

  return (
    <Box
      component="form"
      justifyContent={"center"}
      sx={{
        "& .MuiTextField-root": { m: 4, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Asset Number"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Asset Name"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DesktopDatePicker
            label="Aquisition Date"
            inputFormat="MM/dd/yyyy"
            value={val}
            onChange={handleFix}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Aquisition Time"
            value={val}
            onChange={handleFix}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControl sx={{ m: 4 }}>
          <InputLabel htmlFor="outlined-adornment-amount">
            Asset Cost
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={values.amount}
            onChange={handleChanges("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <TextField
          id="outlined-multiline-static"
          label="Asset Description"
          multiline
          rows={4}
          defaultValue=""
        />
      </div>
    </Box>
  );
}

export default AddAsset;
