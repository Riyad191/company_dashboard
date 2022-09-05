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
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import AdvancedSearchData from "./AdvancedSearchData.js";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& .MuiAutocomplete-listbox": {
        fontSize: 12,
        height: 150,
        zindex: 1,
        "& li": { backgroundColor: "#FFF" },
      },
    },
    textfield: {
      "& .MuiInputBase-inputSizeSmall": {
        fontSize: 10,
      },
      "& .MuiInputBase-sizeSmall": {
        fontSize: 12,
        height: 22,
      },
      "& .MuiInputLabel-sizeSmall": {
        fontSize: 10,
        marginTop: -5,
      },
      "& .MuiSvgIcon-fontSizeSmall": {
        fontSize: 12,
        color: "blue",
      },
      "& .MuiAutocomplete-inputFocused": {
        marginTop: -4,
        fontSize: 10,
      },
      "& .MuiFormLabel-colorPrimary": {
        marginTop: 4,
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
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const u = [...new Set(data.map((a) => a.first_name))];

  return (
    <div className="home">
      <form className="advanced_search_form">
        <div className="input_title">
          <div>Keyword</div>
          <div className="input_title_icon1">
            {" "}
            {isOpen ? (
              <IoIosArrowDown onClick={() => setIsOpen(!isOpen)} />
            ) : (
              <IoIosArrowForward onClick={() => setIsOpen(!isOpen)} />
            )}
          </div>
        </div>
        {isOpen && (
          <div className="search">
            <Box
              sx={{
                "& > :not(style)": { width: 180, height: 20, fontSize: 10 },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                size="small"
                placeholder="Keyword"
                variant="outlined"
                className={classes.textfield}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Box>
          </div>
        )}
        <div className="input_title1">
          <div>Pillar</div>
          <div style={{ marginLeft: 14 }} className="input_title_icon1">
            {" "}
            {isOpen1 ? (
              <IoIosArrowDown onClick={() => setIsOpen1(!isOpen1)} />
            ) : (
              <IoIosArrowForward onClick={() => setIsOpen1(!isOpen1)} />
            )}
          </div>
        </div>
        {isOpen1 && (
          <div className="search1">
            <Stack sx={{ width: 180 }}>
              <Autocomplete
                size="small"
                options={u}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Pillar"
                    className={classes.textfield}
                  />
                )}
                onChange={function (e, newValue) {
                  return setSearch1(newValue === null ? "" : newValue);
                }}
                PopperComponent={CustomPopper}
              />
            </Stack>
          </div>
        )}
        <div className="input_title2">
          <div>Product</div>
          <div className="input_title_icon2">
            {" "}
            {isOpen2 ? (
              <IoIosArrowDown onClick={() => setIsOpen2(!isOpen2)} />
            ) : (
              <IoIosArrowForward onClick={() => setIsOpen2(!isOpen2)} />
            )}
          </div>
        </div>
        {isOpen2 && (
          <div className="search2">
            <Stack sx={{ width: 180 }}>
              <Autocomplete
                options={data.map((a) => a.last_name)}
                size="small"
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Product"
                    className={classes.textfield}
                  />
                )}
                onChange={(e, newValue) => {
                  return setSearch2(newValue === null ? "" : newValue);
                }}
                PopperComponent={CustomPopper}
              />
            </Stack>
          </div>
        )}
      </form>
      <AdvancedSearchData search={search} search1={search1} search2={search2} />
    </div>
  );
}

export default App;
