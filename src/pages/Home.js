// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className='home'>Find local events around Atlanta, GA</h1>
       
            <p className='homeInfo'>Check out these websites for more information:</p>
            <ul>
                <li>
                    <a className='eventLinks' href="https://www.instagram.com/p/C2-YTflOnXi/" target='_blank'>Heck House: Make greeting cards for nursing homes</a>
                </li>
                <li>
                    <a className='eventLinks' href="https://thebakeryatlanta.com/calendar/collagenightfeb2024" target= '_blank'>The Bakery: Monthly Collage Night</a>
                </li>
                    <a className='eventLinks' href="https://themoth.org/events/dazzled-atlanta-2024" target= '_blank'>The Moth: Storytelling Show</a>
            </ul>
        </div>
    );
}

export default Home;
