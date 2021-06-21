import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/logo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Button, SwipeableDrawer } from "@material-ui/core";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from "@material-ui/icons/Menu";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const Header = ({value, setValue, selectedIndex, setSelectedIndex}) => {
  const ElevationScroll = ({ children, window }) => {
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  };

  const useStyles = makeStyles((theme) => ({
    toolbarMargin: {
      ...theme.mixins.toolbar,
      marginBottom: "3rem",
      [theme.breakpoints.down("md")]: {
        marginBottom: "2em",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "1.25em",
      },
    },
    logo: {
      height: "7rem",
      [theme.breakpoints.down("md")]: {
        height: "6em",
      },
      [theme.breakpoints.down("xs")]: {
        height: "5.5em",
      },
    },
    logoContainer: {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    tabContainer: {
      marginLeft: "auto",
    },
    tab: {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    },
    button: {
      ...theme.typography.estimate,
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      height: "45px",
      '&:hover': {
        backgroundColor: theme.palette.secondary.light
      }
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      marginLeft: "700px",
      color: "white",
      borderRadius: "0px",
    },
    menuItem: {
      ...theme.typography.tab,
      opacity: 0.7,
      color: 'white',
      "&:hover": {
        opacity: 1,
      },
    },
    drawerIconContainer: {
      marginLeft: 'auto',
        '&:hover': {
          backgroundColor: 'transparent'
        }
    },
    drawer: {
      backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
      ...theme.typography.tab,
      color: 'white',
      opacity: 0.7
    },
    drawerItemEstimate: {
      backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
      '& .MuiListItemText-root': {
        opacity: 1
      }
      
    },
    appbar: {
      zIndex: theme.zIndex.modal + 1
    }
  }));

  const classes = useStyles();
  const theme = useTheme();
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [openMenu, setOpenMenu] = useState(false);
  

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpenMenu(false);
    setSelectedIndex(i);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenu(false);
  };

  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
    { name: "iOS/Android App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
    { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 }
  ];


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const routes = [
    {name: 'Home', link: '/', activeIndex: 0}, 
    {name: 'Services', link: '/services', activeIndex: 1, ariaOwns: anchorEl ? "simple-menu" : undefined,
     ariaPopup: anchorEl ? "true" : undefined, mouseOver: (e) => handleClick(e) },
     {name: 'The Revolution', link: '/revolution', activeIndex: 2},
     {name: 'About Us', link: '/aboutus', activeIndex: 3},
     {name: 'Contact Us', link: '/contact', activeIndex: 4}
  ];

  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (value !== route.activeIndex) {
            setValue(route.activeIndex);
            if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
              setSelectedIndex(route.selectedIndex);
            }
          }
          break;

          case '/estimate': 
            setValue(5);
          break;
        
        default:
          break;
      }
    })

  }, [value, menuOptions, selectedIndex, routes, setValue, setSelectedIndex]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            label={route.name}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        component={Link}
        to="estimate"
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => {setValue(5)}}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        style={{ zIndex: 1302 }}
        keepMounted
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(event) => {
              handleMenuItemClick(event, i);
              setValue(1);
              handleClose();
            }}
            selected={i === selectedIndex && value === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              divider
              button
              component={Link}
              to={route.link}
              selected={value === route.activeIndex}
              classes={{selected: classes.drawerItemSelected}}
              onClick={() => {
                setOpenDrawer(false);
                setValue(route.activeIndex);
              }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}{" "}
              </ListItemText>
            </ListItem>
          ))}

          <ListItem
            onClick={() => {
              setOpenDrawer(false);
              setValue(4);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
            selected={value === 4}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              className={classes.logoContainer}
            >
              <img src={logo} className={classes.logo} alt="logo" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
};

export default Header;
