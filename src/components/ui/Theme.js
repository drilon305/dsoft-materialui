import { createMuiTheme } from '@material-ui/core/styles';


const dsBlue = '#4791db';
const dsOrange = '#FFBA60';
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
   h6: {
    fontWeight: 500,
    fontFamily: 'Raleway',
    color: dsBlue,
    lineHeight: 1
   },
   subtitle1: {
       fontSize: '1.25rem',
    fontWeight: 300,
    color: dsGrey
   },
   subtitle2: {
       color: 'white',
       fontSize: '1.25em',
       fontWeight: 300
   },
   body1: {
    fontSize: '1.25rem',
    color: dsGrey,
    fontWeight: 300
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
},
overrides: {
    MuiInputLabel: {
        root: {
            color: dsBlue,
            fontSize: '1rem'
        }
    },
    MuiInput: {
        root: {
            color: dsGrey,
            fontWeight: 300
        },
        underline: {
            '&:before': {
                borderBottom: `2px solid ${dsBlue}`
            },
            '&:hover:not($disabled):not($focused):not($error):before': {
                borderBottom: `2px solid ${dsBlue}`
            }
        }
    }
}
})