import React,{ useState, useEffect } from 'react'
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
  
export default function HomeSignIn() { 
    
    const [user, setUser ] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = (event) => {
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(alert('Sign In Successful'))
        .catch((error) => alert(error.message))
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if(authUser){
                console.log(authUser);
                setUser(authUser);

            }else{
                setUser(null);
            }
        })
        return () => {unsubscribe()}
    },[user])
    
    
    

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
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <form className='sign-up'>
            <Input placeholder='email' type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Input placeholder='password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button className='button-primary' onClick={signIn}>Sign In</button>
        </form>
      </div>
    );
  
        return (
            <div className='flex items-center justify-between'>
              <button className = 'button-secondary' type="button" onClick={handleOpen}>
                    Sign In
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