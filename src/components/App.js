import React, { useState} from 'react'
import Header from './ui/Header';
import theme from './ui/Theme';
import { ThemeProvider} from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './ui/Footer';
import LandingPage from './LandingPage';
import Websites from './Websites';

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0); 
  const [value, setValue] = useState(0);


  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <LandingPage
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/aboutus" component={() => <div>About Us</div>} />
          <Route
            exact
            path="/contact"
            component={() => <div>Contact Us</div>}
          />
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software Development</div>}
          />
          <Route
            exact
            path="/mobileapps"
            component={() => <div>Mobile Apps</div>}
          />
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          />
          <Route exact path="/websites"render={() =>
              <Websites
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            } />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </ThemeProvider>
    </Router>
  );
}

export default App;
