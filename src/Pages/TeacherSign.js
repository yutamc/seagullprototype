import React, { useState } from 'react'
import TeacherCard from '../Components/TeacherCard';
import './TeacherSign.css'
import {Input, TextareaAutosize} from '@material-ui/core'
import { auth, db, storage } from '../firebase'
function TeacherSign() {
    const [name, setName] = useState('');
    const [quote, setQuote] = useState('');
    const [age, setAge] = useState('');
    const [subject, setSubject] = useState('');
    const [desc, setDesc] = useState('');
    const [fileURL, setFileURL] = useState(null);
    const [progress, setProgress ] = useState(0);
    const [login, setLogin] = useState(false);
    let userId = '';
    let username;
    auth.onAuthStateChanged((user) => {
        if(user){
            setLogin(true);
            userId = user.uid
            username = user.displayName;
        }else{
            setLogin(false);
        }
    })
    
    
    const handleChange = async (e) => {

        const file = e.target.files[0];
        const storageRef = storage.ref()
        const fileRef = storageRef.child(file.name)
        const task = fileRef.put(file)
        task.on("state_changed",(snapshot) => {
            const progress =Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(progress);
        })
        await task
        console.log("uploaded" +file.name)
        setFileURL(await fileRef.getDownloadURL());
    }
    
    const onSubmit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line no-undef
        
        if(login){
            await db.collection('teacher profile').doc(userId).set({
            username: username,
            name: name,
            quote: quote,
            age: age,
            subject: subject,
            desc: desc,
            fileURL: fileURL,
            })
            alert('Everything is done, we will get you back to the teachers page')
        }else{
            alert('You must be logged in to use this feature!')
        }
    }


    return (
        <div className='teacher-sign-up'>
            <h1>Sign up to become a teacher!</h1>
            <TeacherCard img={fileURL} name={name?(name):('Your name is here')} quote={quote?(quote):('Your quote here')} age={age?(age):('Age here')} subject={subject?(subject):('Subject goes here')} description={desc?(desc):('Your description goes here')} />
                <div className="input-container">  
                    <form onSubmit={onSubmit}>
                        <TextareaAutosize aria-label="Input Quote" placeholder="Input a short quote that describes you!" onChange={(e)=>{setQuote(e.target.value)}} required={true} /><br></br>
                        <Input className='name-input' placeholder='Your full name here' type='text'  onChange={(e)=>{setName(e.target.value)}} required={true} /><br></br>
                        <Input className='number-input' placeholder='Age' type='number' onChange={(e)=>{setAge(e.target.value)}} required={true} />
                        <Input className='subject-input' placeholder='subject' type='text' onChange={(e)=>{setSubject(e.target.value)}} required={true} /><br></br>
                        <TextareaAutosize aria-label='Input Desc' placeholder="Input your description!" rowsMin='3' onChange={(e)=>{setDesc(e.target.value)}} required={true} /><br></br>
                        <Input type='file' onChange={handleChange} required={true} /><br></br>
                        <button className="submit-button" type='submit'>Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default TeacherSign
