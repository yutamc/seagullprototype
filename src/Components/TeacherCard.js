import { CheckRounded, ThumbUp } from '@material-ui/icons'
import React from 'react'
import './TeacherCard.css'
function TeacherCard({
    quote,
    img,
    alt,
    name,
    subject,
    age,
    description,
    num,
}) {
    return (
        <div className='teacher-card shadow-2xl'>
            <div className="quote-container p-4">
                <p className='teacher-quote font-bold'>{quote}</p>
            </div>
            <img className='teacher-image' src={img} alt={alt}/>
            <div className="under-image px-4">
                <h1 className='teacher-name font-bold'>{name}</h1>
                <h3 className='teacher-subject'>{subject}</h3>
                <h3 className='teacher-age'>Age: {age}</h3>
            </div>
            <div className="teacher-lower-body px-4">
                <p className="teacher-description">{description}</p>
                
                <div className="lower-lower py-2">
                    <div className="like-button">
                        <button><ThumbUp /></button>
                    </div>
                    <div className='online-status'>
                        <CheckRounded />
                    </div>
                    <div className="experience-num">
                        { num }
                    </div>
                </div>
                </div>
            
        </div>
    )
}

export default TeacherCard
