import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';


import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import mobileBackground from '../assets/mobileBackground.jpg';
import airplane from '../assets/send.svg';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles(theme => ({
    background: {
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60em',
        paddingBottom: '10em',
        [theme.breakpoints.down('md')]: {
          backgroundImage: `url(${mobileBackground})`,
          
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
     [theme.breakpoints.down('md')]: {
      marginRight: 0,
      marginLeft: 0,
     }
    },
    learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    }
    },
    message: {
      border: `2px solid ${theme.palette.common.blue}`,
      marginTop: '5em',
      borderRadius: 5
    },
    sendButton: {
      ...theme.typography.estimate,
      borderRadius: 50,
      height: 45,
      width: 245,
      fontSize: '1rem',
      backgroundColor: theme.palette.common.orange,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      },
      [theme.breakpoints.down('sm')]: {
        height: 40,
        width: 225,
      }
    }
}))


const Contact = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [name, setName] = useState('');
  

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);


  const onChange = e => {
    let valid;

    switch(e.target.id) {
      case 'email':
        setEmail(e.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)

        if(!valid) {
          setEmailHelper('Invalid Email')
        } else {
          setEmailHelper('')
        }
        break;

        case 'phone':
          setPhone(e.target.value)
          valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/.test(e.target.value)

          if(!valid) {
            setPhoneHelper('Invalid phone.')
          } else {
            setPhoneHelper('')
          }
          break;

        default:
        break;
    }
  }


  return (
    <Grid item container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "1em" : matchesMD ? "5em" : 0,
        }}
        lg={4}
        xl={3}
      >
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ lineHeight: 1 }}
              >
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container style={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue }}
                >
                  <a
                    href="tel:38970585031"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    (389) 70585031{" "}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="envelope"
                  style={{ marginRight: "0.5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="mailto:drilonsl305@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    {" "}
                    drilonsl305@gmail.com{" "}
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{maxWidth: '20em'}}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Email"
                    error={emailHelper.length !== 0}
                    id="email"
                    helperText={emailHelper}
                    fullWidth
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.5em" }}>
                  <TextField
                    label="Phone"
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    id="phone"
                    fullWidth
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Grid item style={{maxWidth: '20em'}}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  multiline
                  fullWidth
                  rows={10}
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>
              <Grid
                item
                container
                justify="center"
                style={{ marginTop: "2em" }}
              >
                <Button
                  // disabled={
                  //   name.length === 0 ||
                  //   message.length === 0 ||
                  //   phoneHelper.length !== 0 ||
                  //   emailHelper === 0
                  // }
                  variant="contained"
                  className={classes.sendButton}
                  onClick={() => setOpen(true)}
                >
                  Send Message
                  <img
                    src={airplane}
                    alt="paper airplane"
                    style={{ marginLeft: "1em" }}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "5em",
            paddingBottom: matchesXS ? "1em" : "5em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? "5em"
              : matchesMD
              ? "10em"
              : "20em",
          },
        }}
      >
        <DialogContent>
          <Grid  container direciton="column" style={{maxWidth: '19em'}}>
            <Grid item>
              <Typography align='center' variant="h4" gutterBottom>
                Confirm Message
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "0.5em" }}>
              <TextField
                label="Name"
                id="name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  id="email"
                  helperText={emailHelper}
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Phone"
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{maxWidth: matchesXS ? '100%' : '20em'}}>
              <TextField
                InputProps={{ disableUnderline: true }}
                value={message}
                className={classes.message}
                multiline
                fullWidth
                rows={10}
                id="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            alignItems="center"
          >
            <Grid item>
              <Button
                style={{ fontWeight: 300 }}
                color="primary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => setOpen(true)}
              >
                Send Message
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems="center"
        justify={matchesMD ? "center" : undefined}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography align={matchesMD ? "center" : undefined} variant="h2">
                Simple Software.
                <br /> Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: "1.5em" }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container item justify={matchesMD ? "center" : undefined}>
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
    </Grid>
  );
};

export default Contact
