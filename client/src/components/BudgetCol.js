import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "3500px",
  },
}));

const BudgetCol = ({ colName, idName }) => {
  const classes = useStyles();
  const labelStyle = { "margin-right": "0.5em" };
  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <label for={idName} style={labelStyle}>
            {colName}
          </label>

          <TextField id={idName} size="small" />
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
