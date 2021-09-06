import classes from "./FilterMobile.module.scss";
import React, { useState } from "react";
import Filter from "../Filter/Filter";
import { Button } from "@material-ui/core";
import { Constants } from "../../values/Constants";
import { RiFilter2Fill } from "react-icons/all";

export default function FilterMobile() {
  const [filter, setFilter] = useState(false);

  return (
    <div className={classes.FilterMobile}>
      <div className={classes.BoxAdvancedSearch}>
        <Button
          onClick={() => setFilter(!filter)}
          className={classes.FilterButton}
          variant="contained"
          fullWidth
        >
          {Constants.advancedSearch}
          <RiFilter2Fill className={classes.FilterIcon} />
        </Button>
      </div>
      {filter && <Filter setFilter={setFilter} filter={filter} />}
    </div>
  );
}
