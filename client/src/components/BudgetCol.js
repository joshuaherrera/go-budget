import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formStyle: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    labelStyle: {
      margin: "auto",
    },
    root: {
      flexGrow: 1,
    },
  },
}));

const BudgetCol = ({ colName, idName }) => {
  const classes = useStyles();

  return (
    <>
      <div class="row">
        <div class="input-field col s12">
          <label for={idName} className={classes.labelStyle}>
            {colName}
          </label>

          <TextField id={idName} size="small" />
        </div>
      </div>
    </>
  );
};

export default BudgetCol;
