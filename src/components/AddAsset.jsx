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
import MenuItem from "@mui/material/MenuItem";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";

function AddAsset() {
  const [value, setValue] = React.useState("");

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const branches = [
    {
      value: "BZE",
      label: "Belize City",
    },
    {
      value: "LVIL",
      label: "Ladyville",
    },
    {
      value: "Bmp",
      label: "Belmopan",
    },
    {
      value: "SEL",
      label: "Santa Elena",
    },
    {
      value: "SIG",
      label: "San Ignacio",
    },
    {
      value: "OW",
      label: "Orange Walk",
    },
    {
      value: "CZL",
      label: "Corozal",
    },
    {
      value: "DNG",
      label: "Dangriga",
    },
    {
      value: "PG",
      label: "Punta Gorda",
    },
  ];

  const handleChanges = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [val, setVal] = React.useState(new Date("2022-03-10T00:00:00"));

  const handleFix = (newVal) => {
    setVal(newVal);
  };

  const [time, setTime] = React.useState(new Date("2022-09-10T06:30:00"));

  const handleTime = (newTime) => {
    setTime(newTime);
  };

  const [branch, setBranch] = React.useState("EUR");

  const handleBranch = (event) => {
    setBranch(event.target.value);
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
          <DesktopDatePicker
            label="Expiration Date"
            inputFormat="MM/dd/yyyy"
            value={time}
            onChange={handleTime}
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
          id="outlined-select-currency"
          select
          label="Select"
          value={branch}
          onChange={handleBranch}
          helperText="Please select your Branch"
        >
          {branches.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-multiline-static"
          label="Asset Description"
          multiline
          rows={6}
          defaultValue=""
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Seller's Name"
          multiline
          maxRows={4}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className="save_button">
        <Button variant="outlined">Save</Button>
      </div>
    </Box>
  );
}

export default AddAsset;
