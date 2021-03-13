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
    gStyle: {
      backgroundColor: "pink",
    },
    root: {
      flexGrow: 1,
    },
  },
}));

const BudgetBody = () => {
  const classes = useStyles();
  return (
    <>
      {/* would need to do Grids within grids */}
      <div className={classes.root}>
        <Grid container spacing={3} justify="flex-start">
          <Grid
            container
            justify="center"
            item
            xs={12}
            className={classes.gStyle}
          >
            <form>
              {/* <input
                id="checkAmount"
                type="number"
                min="0.00"
                max="9999999"
                step="0.01"
                className="validate"
              /> */}
              <Grid xs={12} item>
                <label for="checkAmount">Check Amount</label>
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField id="checkAmount" variant="outlined" size="small" />
              </Grid>
            </form>
          </Grid>

          <Grid container item xs={12} justify="space-evenly">
            <Grid item container justify="center" xs={4}>
              <BudgetCol colName="Necessities" idName="needs" />
            </Grid>
            <Grid container justify="center" item xs={4}>
              <BudgetCol colName="Debt / Savings" idName="dns" />
            </Grid>
            <Grid container justify="center" item xs={4}>
              <BudgetCol colName="Wants" idName="wants" />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default BudgetBody;
