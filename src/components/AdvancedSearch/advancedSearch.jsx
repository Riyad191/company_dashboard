import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { data } from "./data.js";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import "./advancedSearch.css";
import Popper from "@mui/material/Popper";
import { createStyles } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import AdvancedSearchData from "./AdvancedSearchData.js";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiAutocomplete-listbox": {
        fontSize: 12,
        zindex: 1,
        "& li:nth-child(even)": { backgroundColor: "#CCC" },
        "& li:nth-child(odd)": { backgroundColor: "#FFF" },
      },
    },
    textfield: {
      "& .MuiInputBase-sizeSmall": {
        fontSize: 12,
        height: 29,
      },
      "& .MuiInputLabel-sizeSmall": {
        fontSize: 14,
        marginTop: -5,
      },
      "& .MuiSvgIcon-fontSizeSmall": {
        fontSize: 16,
      },
    },
  })
);

const CustomPopper = function (props) {
  const classes = useStyles();
  return <Popper {...props} className={classes.root} placement="bottom" />;
};
function App() {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [search1, setSearch1] = useState("");
  const [search2, setSearch2] = useState("");

  const u = [...new Set(data.map((a) => a.email))];

  return (
    <div className="home">
      <form className="advanced_search_form">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", height: 20 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            size="small"
            label="Outlined"
            variant="outlined"
            className={classes.textfield}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <Stack sx={{ width: 200 }}>
          <Autocomplete
            size="small"
            options={u}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Pillar"
                className={classes.textfield}
              />
            )}
            onChange={function (e, newValue) {
              return setSearch1(newValue === null ? "" : newValue);
            }}
            PopperComponent={CustomPopper}
          />
        </Stack>
        <Stack sx={{ width: 200, border: "none", outline: "none" }}>
          <Autocomplete
            options={data.map((a) => a.phone)}
            size="small"
            renderInput={(params) => (
              <TextField
                {...params}
                label="phone"
                className={classes.textfield}
              />
            )}
            onChange={(e, newValue) => {
              return setSearch2(newValue === null ? "" : newValue);
            }}
            PopperComponent={CustomPopper}
          />
        </Stack>
      </form>
      <AdvancedSearchData search={search} search1={search1} search2={search2} />
    </div>
  );
}

export default App;
