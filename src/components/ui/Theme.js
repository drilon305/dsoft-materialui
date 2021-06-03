import { createMuiTheme } from '@material-ui/core/styles';


const dsBlue = '#4791db';
const dsOrange = '#ff9800';
const dsGrey = '#868686';

export default createMuiTheme({
    palette: {
        common: {
        blue: `${dsBlue}`,
        orange: `${dsOrange}`
        },
        primary: {
            main: `${dsBlue}`
        },
        secondary: {
            main: `${dsOrange}`
        }
    },

typography: {
   tab: {
    fontFamily: 'Raleway',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '1rem',
   },
   estimate: {
    fontFamily: 'Pacifico',
    fontSize: '1rem',
    textTransform: 'none',
    color: 'white'
   },
   h2: {
       fontFamily: 'Raleway',
       fontWeight: 700,
       fontSize: '2.5rem',
       color: dsBlue,
       lineHeight: 1.5
   },
   h3: {
    fontFamily: 'Pacifico',
    fontSize: '2.5rem',
    color: dsBlue
   },
   h4: {
       fontSize: '1.75rem',
       color: dsBlue,
       fontWeight: 700
   },
   subtitle1: {
       fontSize: '1.25rem',
    fontWeight: 300,
    color: dsGrey
   },
   learnButton: {
    borderColor: dsBlue,
    color: dsBlue,
    borderWidth: 2,
    textTransform: 'none',
    borderRadius: 50,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
   }
}
})