import React, {useEffect, useState} from 'react'
import Modal from '@material-ui/core/Modal'
import {makeStyles} from '@material-ui/core/styles'
import './Modal.css'
import { Input } from '@material-ui/core';
import { auth } from '../firebase';

function getModalStyle() {
    return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    };
  }
  
 

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
export default function HomeModal() { 
    
    const [user, setUser ] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signUp = (event) => {
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(alert('Sign Up Successful'))
        .catch((error) => alert(error.message))
    };

    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                console.log(authUser);
                setUser(authUser);

                if(authUser.displayName){

                }else{
                    return authUser.updateProfile({
                        displayName: username,
                    });
                }
            }else{
                setUser(null);
            }
        })
        return () => {
          unsubscribe();
        }
    },[user, username])
    
    
    

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSignOut = () => {
        auth.signOut().then(() => {
            console.log('Sign Out Successful');
          }).catch((error) => {
            alert(error);
          });
    }
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <form className='sign-up'>
            <Input placeholder='username' type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <Input placeholder='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='button-primary' onClick={signUp}>Sign Up</button>
        </form>
      </div>
    );
  
    return (
      <div className='flex items-center justify-between'>
     <button className = 'button-primary' type="button" onClick={handleOpen}>
          Sign Up
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }