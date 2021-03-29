import React from 'react'
import './Home.css'
import { IoPencilSharp } from 'react-icons/io5'
import { IconContext } from 'react-icons'
import HomeModal from './HomeModal'
import HomeSignIn from './HomeSignIn'
function Home() {
    return (
        <div className='home-container w-screen'>
            <div className="hero-container">
                <div className="hero-text font-bold pl-7 w-1/2">
                    <h1>RISE.</h1>
                    <h3>Open Source Of Education</h3>
                </div>
                <div className="row-container">
                    <div className='hero-text-two w-1/2 pr-7'>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium reiciendis rerum saepe magnam sit consectetur quo facilis soluta, accusantium molestias illum! Veniam repellendus vero beatae tempore accusamus explicabo nesciunt cum.
                        </p>
                    </div>
                </div>
            </div>
            <div className="login-buttons">
                <div className="button">
                    <HomeModal />
                </div>
                <div className="button">
                    <HomeSignIn />
                </div>
            </div>
            <IconContext.Provider value={{color: '#000', size: '50px'}}>
                <div className="features py-7 px-7">
                    <div className="three-col flex justify-center w-1/5">
                        <div className="col flex flex-col shadow-lg">
                            <IoPencilSharp />
                            <h4 className='my-5'>Learn AnyTime</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda voluptatum deleniti cum provident, accusamus unde magnam suscipit possimus fugit.</p>
                        </div>
                        <div className="col flex flex-col shadow-lg">
                            <IoPencilSharp />
                            <h4 className="my-5">Learn AnyTime</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda voluptatum deleniti cum provident, accusamus unde magnam suscipit possimus fugit.</p>
                        </div>
                        <div className="col flex flex-col shadow-lg">
                            <IoPencilSharp />
                            <h4 className="my-5">Learn AnyTime</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus assumenda voluptatum deleniti cum provident, accusamus unde magnam suscipit possimus fugit.</p>
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </div>
    )
}

export default Home
