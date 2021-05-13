import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomStyles from './style.module.css';
import Logo from '../../assets/ACSRLogo2.png'

export default function SimplePaper() {

    return (
            <div className={CustomStyles.text}>
                <img alt='company logo' src={Logo} className={CustomStyles.image}></img>
                <br />
                <Typography component="p" variant='h4'>Call for a Consultation</Typography>
                
                <Typography component="a" variant='h4' color='inherit' href="tel:+12065663528">1 (206) 566 3528</Typography>
             
                <Typography component="p" variant='h4' >Or Text Us At</Typography>
             
                <Typography component="a" variant='h4' color='inherit' href="sms:+12065663528">1 (206) 566 3528</Typography>
              
                <Typography component="p" variant='h4' >Licensed, Bonded & Insured</Typography>
             
                <Typography component="p" variant='h4' >ALLCICS790KD</Typography>
            </div>
    );
}