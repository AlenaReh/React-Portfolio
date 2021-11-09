import React from 'react';
import './Intro.css';
import Headshot from '../../Assets/images/Headshot.png'

const Intro = () => {
    return (
        <div className='intro'>
            <div className='intro-left'> 
                <div className='intro-left-wrapper'>
                    <h2 className='intro-hello'>Hello, my name is</h2>
                    <h1 className='intro-name'>Alena</h1>
                    <div className='intro-title'>
                        <div className='intro-title-wrapper'>
                            <div className='intro-title-item'>MERN Stack Developer</div>
                            <div className='intro-title-item'>Photographer</div>
                            <div className='intro-title-item'>Lifelong Learner</div>
                            <div className='intro-title-item'>Dreamer</div>
                        </div>
                    </div>
                    <p className='intro-text'>
                    I enjoy traveling, yoga, photography, reading, and learning. I recently became fascinated by the web development. This industry is constantly evolving and I love that a person can enhance their creativity, challenge their critical thinking skills, and travel around the world while doing something that inspires and makes a difference in this world.
                    </p>
                </div>
            </div>
            <div className='intro-right'>
                <div className='intro-bg'></div>
                <img src={Headshot} alt='Headshot' className='intro-img'/>
            </div>
        </div>
    )
}

export default Intro
