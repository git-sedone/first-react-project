import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import './Footer.css';

class Footer extends React.Component{
    constructor(){
        super()

    }
    render(){
        return(
            <div className='footer-container'>
                <p>Kuily Balendran 2020 &copy;</p>
            </div>
        )
    }
}

export default Footer;