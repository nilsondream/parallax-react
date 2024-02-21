import React, { useEffect, useState } from 'react'
import IMG1 from '../assets/dest-01.webp';
import IMG2 from '../assets/dest-02.webp';
import IMG3 from '../assets/dest-03.webp';
import IMG4 from '../assets/dest-04.webp';

const Home = () => {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='styled-home'>
            <section className='parallax-container'>
                <div className='parallax' style={{ transform: `translateY(${offsetY * 0.125}px)` }}>
                    <h1 style={{ transform: `translateY(${offsetY * 0.175}px)` }}>Nature.</h1>
                    <div className='footer-hero'>
                        <span>04</span>
                        <p>Discover your world with us!</p>
                    </div>
                    <div className='gradient' />
                </div>
            </section>

            <section className='activities'>
                <div className='grid'>
                    <div className='item'>
                        <img src={IMG1} alt="activity" />
                        <h3>Adventures</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG2} alt="activity" />
                        <h3>Experiences</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG3} alt="activity" />
                        <h3>Activities</h3>
                    </div>
                    <div className='item'>
                        <img src={IMG4} alt="activity" />
                        <h3>Campaings</h3>
                    </div>
                </div>
            </section>

            <section className='contact'>
                <h2>support@nature.com</h2>
                <p>
                    <span>© 2024 Nature</span>
                    <span>/</span>
                    <span>Code by nilsondream</span>
                </p>
            </section>
        </div>
    )
}

export default Home