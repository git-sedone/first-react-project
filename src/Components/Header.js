import React from 'react';
import './Header.css';
import './ShareJoke';
import RegisterForm from './Form';
import ShareJoke from './ShareJoke';
import JokeComponent from './JokeComponent';

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            showJoke:false,
            showShare:false,
            showRegister:false,
            

        }
        this.closeOverlay = this.closeOverlay.bind(this);
        this.openShare = this.openShare.bind(this);
        this.openRegister = this.openRegister.bind(this);
        this.closeRegisterContainer = this.closeRegisterContainer.bind(this);

    }
    closeOverlay(){
        this.setState({

            showShare:false,
        })
        console.log('click');
    }
    openShare(){
        this.setState({

            showShare: !this.state.showShare,
            showRegister:false,
            showJoke:false,

        })
        console.log('open share');

    }
    openRegister(){
        this.setState({
            showRegister: !this.state.showRegister,
            showShare:false,
            showJoke:false,

        })

    }
    closeRegisterContainer(){
        this.setState({
            showRegister:false
        })
    }

    render(){
        return(
            <div>
            <div className='header-container'>
                <a  onClick={this.openRegister} href="#" >Register</a>
                <a onClick={this.openShare} href="#">Share Your Joke</a>
                
            </div>
            {this.state.showShare ? 
            
            <div className='overlay'>
                {/* <i onClick={this.closeOverlay} className="fa fa-times fa-3x"></i> */}
            <div className='share-container'>
                <ShareJoke />
                
            </div>
            </div>
            : null
            }

            {this.state.showRegister ?
            
            <div className='register-overlay'>
                {/* <i onClick={this.closeRegisterContainer}className="fa fa-times fa-3x"></i> */}
                <div className='register-overlay-container'>
                    {/* <h3>register form</h3> */}
                    <RegisterForm />
                </div>

            </div>
            : null
            }
            </div>
        )
    }
}

export default Header;