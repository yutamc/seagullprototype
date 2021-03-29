import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css'
import {Link} from 'react-router-dom'
import SimpleModal from './Modal';
import SignInModal from './SignInModal'
function Navbar() {
    const [click, setClick] = useState(false);

    const handleClose = () => {
        setClick(false);
    }

    const handleOpen = () => {
        setClick(true);
    }

    window.addEventListener('resize', function(){
       if(window.innerWidth<991){
           setClick(false);
       }
    })

    return (
        <div className="navbar">
            <div className="navbar-container sm:max-h-16 h-24 items-center">
                <Link to='/'>
                    <div className="logo font-bold">
                        SEAGULL
                    </div>
                </Link>
                <div className="navbar-items">
                    <Link to='/'>
                        <div className={click?("item-container text-container show"):("item-container")}>
                            <h3 className='font-semibold uppercase'>Home</h3>
                        </div>
                    </Link>
                    <Link to='/teachers'>
                        <div className={click?("item-container text-container show"):("item-container")}>
                            <h3 className='font-semibold uppercase'>Teachers</h3>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div className={click?("item-container text-container show"):("item-container")}>
                            <h3 className='font-semibold uppercase'>Why Seagull?</h3>
                        </div>
                    </Link>
                    <div className={click?("item-container modal show"):("item-container")}>
                        <SimpleModal />
                    </div>
                    <div className={click?("item-container modal show"):("item-container")}>
                        <SignInModal />
                    </div>
                </div>
                <div className="hamburger">
                    {click?(<button onClick={handleClose}><CloseIcon /></button>):(<button onClick={handleOpen}><MenuIcon /></button>)}
                </div>
                
            </div>
        </div>

    )
}

export default Navbar
