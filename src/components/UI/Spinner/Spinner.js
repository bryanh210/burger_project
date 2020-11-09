import React from 'react';
import classes from './Spinner.css';

const spinner = () => {
    // if the css isn't shown, then the text is shown
    return (
        <div className={classes.Spinner}>Loading...</div>
    )
}

export default spinner;