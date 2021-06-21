import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: 'fixed',
    backgroundRepeat: "no-repeat",
    height: "60em",
    width: "100%",
    [theme.breakpoints.down('md')]: {
        backgroundImage: `url(${mobileBackground})`,
        backgroundAttachment: 'inherit',
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 70,
    width: 180,
    backgroundColor: theme.palette.common.orange,
    fontSize: '1.2rem',
    marginRight: '5em',
   marginLeft: '2em',
   '&:hover': {
    backgroundColor: theme.palette.secondary.light
  },
   [theme.breakpoints.down('sm')]: {
    marginRight: 0,
    marginLeft: 0,
   }
  }
}));


const CallToAction = ({setValue, setSelectedIndex}) => {

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
      <Grid
        container
        style={{ height: "60em" }}
        justify={matchesSM ? "center" : "space-between"}
        alignItems="center"
        className={classes.background}
        direction={matchesSM ? "column" : "row"}
      >
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : "5em",
            textAlign: matchesSM ? "center" : "inherit"
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography variant="subtitle2" style={{ fontSize: "1.5em" }}>
                Take advantage of the 21st Century.
              </Typography>
              <Grid container item justify={matchesSM ? "center" : undefined}>
                <Button
                  component={Link}
                  to="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}> Learn more </span>
                  <ArrowForwardIcon fontSize="small" />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            to="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    );
}

export default CallToAction;
