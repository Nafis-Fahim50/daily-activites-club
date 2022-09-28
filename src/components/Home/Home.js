import React from 'react';
import Activites from '../Activites/Activites';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='text-red-500 font-extrabold mt-10'>Daily Activites Club</h1>
                <Activites></Activites>
            </div>
            <div>
                This is Cart Section
            </div>
            
        </div>
    );
};

export default Home;