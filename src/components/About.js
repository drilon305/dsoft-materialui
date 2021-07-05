import React from 'react'
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import useMediaQuery from "@material-ui/core/useMediaQuery";

import history from '../assets/history.svg';
import avatar from '../assets/avatar1.JPG';
import CallToAction from './ui/CallToAction';



const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em",
        }
      },
      missionStatement: {
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: '1.5rem',
          maxWidth: '50em',
          lineHeight: 1.4
      },
    avatar: {
      height: '18em',
      width: '18em',
      marginBottom: '3em'
    }
}))


const About = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <Grid item container direction="column">
      <Grid item className={classes.rowContainer} style={{ marginTop: "2em" }}>
        <Typography align={matchesMD ? "center" : undefined} variant="h2">About Us</Typography>
      </Grid>
      <Grid
        item
        container
        justify='center'
        className={classes.rowContainer}
        style={{marginTop: '3em'}}
      >
        <Typography
          variant="h4"
          align={matchesMD ? "center" : undefined}
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. DSoft will use that principle to
          provide fast, modern, inexpensive, and aesthetic software to the
          Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        style={{marginTop: '10em', marginBottom: '10em'}}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        justify="space-around"
      >
        <Grid item>
          <Grid
            item
            direction="column"
            lg
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                parapgraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2021, we're ready to get our hands on the world's
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren't all businesses
                using available technology? There are many different answers to
                taht question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineergin and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite world of possibility. Things that have always been done
                by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that's where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={history}
              alt="quill pen sitting on the book"
              style={{ maxHeight: matchesMD ? '15em' : '20em', marginBottom: '10em' }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        className={classes.rowContainer}
        style={{marginBottom: '5em'}}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Drilon Sulejmani, Founder
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={avatar} className={classes.avatar} />
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};

export default About
