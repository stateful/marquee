import React, { useState, useContext, useCallback } from "react";
import { Badge } from "@material-ui/core";

import TrendContext from "../Context";
import { DebounceInput } from "react-debounce-input";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import Popover from "@material-ui/core/Popover";
import { IconButton, Grid, TextField } from "@material-ui/core";

let GithubFilterBox = () => {
  const { _updateFilter, trendFilter } = useContext(TrendContext);
  let filterInput: HTMLElement | null = null;

  return (
    <DebounceInput
      autoFocus
      inputProps={{ ref: (input: HTMLElement) => (filterInput = input) }}
      element={TextField}
      minLength={2}
      debounceTimeout={500}
      InputLabelProps={{
        shrink: true,
      }}
      label={"Filter"}
      variant="filled"
      placeholder="Type here..."
      onChange={(e) => {
        _updateFilter(e.target.value);
      }}
      size="small"
      name="github-filter"
      value={trendFilter}
      InputProps={{
        endAdornment: (
          <ClearIcon
            fontSize="small"
            style={{ cursor: "pointer" }}
            onClick={() => {
              _updateFilter("");
              filterInput?.focus();
            }}
          />
        ),
      }}
    />
  );
};

let Filter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { trendFilter } = useContext(TrendContext);

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "github-filter-popover" : undefined;
  const badgeContent = (trendFilter || '').length;

  return (
    <div>
      <IconButton aria-label="github-trends-filter" size="small" onClick={handleClick}>
        <Badge
          color="secondary"
          variant="dot"
          overlap="circular"
          badgeContent={badgeContent}
        >
          <SearchIcon fontSize="small" />
        </Badge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Grid container>
          <Grid item>
            <GithubFilterBox />
          </Grid>
        </Grid>
      </Popover>
    </div>
  );
};

export default React.memo(Filter);
