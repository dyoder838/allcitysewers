import React from 'react';
import Typography from '@material-ui/core/Typography';
import Nav from '../Nav';
import CustomStyles from './style.module.css';

export default function SimplePaper() {

    return (
        <div className={CustomStyles.root}>
            <Nav />
            <div className={CustomStyles.text}>
                <Typography variant="h3">It's Time To Start Cleaning</Typography>
                <Typography variant="h4">Thorough. Efficient. Clean</Typography>
                <Typography variant="h5">Call for a consultation</Typography>
                <Typography component="a" color='inherit' variant="h5" href="tel:2065663528">1 (206) 566 3528</Typography>
            </div>
        </div>
    );
}