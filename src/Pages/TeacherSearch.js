import React, { useEffect, useState } from 'react'
import TeacherCard from '../Components/TeacherCard'
import './TeacherSearch.css'
import {dummyObjOne} from '../Components/DummyData'
import { Link } from 'react-router-dom'
import { db } from '../firebase'

function TeacherSearch() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        db.collection('teacher profile').onSnapshot(snapshot => {
            setProfile(snapshot.docs.map(doc => doc.data()));
        }

        )
    },)

    return (
        <div className='teacher-screen'>
            <div className="become-one">
                <h1 className='hero-text'>be the one</h1>
                <p className="becoming-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, sed nesciunt vel corrupti, facilis dolore in suscipit deserunt ratione maiores a nam ex beatae natus voluptatem illo, assumenda optio? Omnis!</p>
                <Link to='/signasteacher'>
                    <div className="button">
                        <h3>become a teacher</h3>
                    </div>
                </Link>
            </div>
            <TeacherCard {...dummyObjOne} />
            {
                profile.map(prof => (
                <TeacherCard quote={prof.quote} name={prof.name} age={prof.age} img={prof.fileURL} subject={prof.subject} description={prof.desc} /> 
                ))
            }
        </div>
    )
}

export default TeacherSearch
