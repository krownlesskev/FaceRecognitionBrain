import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt pa3' tiltMaxAngleX={40} tiltMaxAngleY={40}>
                <div>
                    <img src={brain} alt="logo" style={{ paddingTop: '5px' }} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
