import React from 'react';
import Activites from '../Activites/Activites';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div>
                <h1 className='text-red-500 font-extrabold mt-10'>Daily Activites Club</h1>
                    <Activites></Activites>
                </div>
                <div className='bg-white'>
                    This is Cart Section
                </div>
            </div>
        </div>
    );
};

export default Home;