import React, { Component } from 'react';
import './Contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div className='contacts-bar'>
                <ul>
                    <li><a href='https://github.com/git-sedone?tab=repositories'><i class="fa fa-github fa-2x"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/kuily-balendran/'><i class="fa fa-linkedin fa-2x"></i></a></li>
                    <li><a href='mailto:kuily.niroshan@gmail.com'><i class="fa fa-envelope fa-2x"></i></a></li>
                </ul>
            </div>
        )
    }
}
export default Contacts;
