import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CustomStyles from './style.module.css';
import Typography from '@material-ui/core/Typography';
import Nav from '../../components/Nav';
import SplashText from '../../components/SplashText'
import Accordion from '../../components/Accordion2';
import Footer from '../../components/Footer';
import AccordionDb from '../../Accordion2.json';
import ReactGA from 'react-ga';

ReactGA.initialize('AW-382230630/ADn_CNPtwckCEObAobYB')
ReactGA.event({
    category: 'conversion', 
    action: 'navigation',
    nonInteraction: true,
})
const useStyles = makeStyles((theme) => ({

    root: {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold', 
    },
    headersubtext: {
        fontSize: 30,
        textAlign: 'center',
        margin: 'auto',
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
    },

}));

export default function MainPage() {

    const classes = useStyles();

    return (

        <Grid container className={classes.root}>

            <Grid item xs={12}>

                <div className={CustomStyles.root}>

                    <Nav />
                    <SplashText />
                </div>

            </Grid>

            <Grid item xs={12}>

                <Typography variant="h3" className={classes.header}>
                    Our Services 
                </Typography>
                <Typography className={classes.headersubtext}>
                     
                </Typography>

            </Grid>

            {AccordionDb.map((data, index) =>
            <Grid item xs={12} key={index}>
                <Accordion 
                    key={index}
                    id={data.id}
                    accordiontitle={data.title}
                    roomsarr={data.rooms}
                
                />
            </Grid>)}

            <Grid item xs={12}>
                <Footer />
            </Grid>

        </Grid>
    
    )
}