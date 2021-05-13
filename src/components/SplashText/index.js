import React from 'react';
import Typography from '@material-ui/core/Typography';
import CustomStyles from './style.module.css';
import Logo from '../../assets/ACSRLogo2.png'

export default function SimplePaper() {

    return (
            <div className={CustomStyles.text}>
                <img alt='company logo' src={Logo} className={CustomStyles.image}></img>
                <br />
                <Typography variant="p">Call for a Consultation</Typography>
                <br />
                <Typography component="a" color='inherit' variant="p" href="tel:+12065663528">1 (206) 566 3528</Typography>
                <br />
                <Typography variant="p">Or Text Us At</Typography>
                <br />
                <Typography component="a" color='inherit' variant="p" href="sms:+12065663528">1 (206) 566 3528</Typography>
                <br />
                <Typography variant="p">Licensed, Bonded & Insured</Typography>
                <br />
                <Typography variant="p">ALLCICS790KD</Typography>
            </div>
    );
}