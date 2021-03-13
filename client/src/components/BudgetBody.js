import React from "react";
import BudgetCol from "../components/BudgetCol";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  formStyle: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    gridStyle: {
      flexGrow: 1,
    },
  },
}));

const BudgetBody = () => {
  const classes = useStyles();
  return (
    <>
      {/* would need to do Grids within grids */}
      <div className="row">
        <Grid container spacing={1} justify="center">
          <form className={classes.formStyle}>
            <div className={classes.formStyle}>
              <Grid item xs={12}>
                {/* <input
                id="checkAmount"
                type="number"
                min="0.00"
                max="9999999"
                step="0.01"
                className="validate"
              /> */}
                <label for="checkAmount">Check Amount</label>
                <TextField id="checkAmount" />
              </Grid>
            </div>
          </form>
        </Grid>
      </div>
      <div className="row">
        <div className="col s4">
          <BudgetCol colName="Necessities" idName="needs" />
        </div>
        <div className="col s4">
          <BudgetCol colName="Debt / Savings" idName="dns" />
        </div>
        <div className="col s4">
          <BudgetCol colName="Wants" idName="wants" />
        </div>
      </div>
    </>
  );
};

export default BudgetBody;
