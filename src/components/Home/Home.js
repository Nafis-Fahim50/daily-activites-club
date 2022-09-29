import React, { useEffect, useState } from 'react';
import Activites from '../Activites/Activites';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import './Home.css'

const Home = () => {
    const [activites, setActivites] = useState([])
    const [details, setDetails] = useState([])

    useEffect(()=>{
        fetch(`activites.json`)
        .then(res => res.json())
        .then(data => setActivites(data))
    },[])

    const handleToAddList = (activites) =>{
       let newDetails = [...details, activites];
       setDetails(newDetails);
    }

    return (
        <div>
            <div className='home-container mb-16'>
                <div>
                <h1 className='text-red-500 font-extrabold mt-10 text-xl'>Daily Activites Club</h1>
                    <Activites
                    activites = {activites}
                    handleToAddList = {handleToAddList}
                    ></Activites>
                </div>

                {/* Details section  */}
                <div className='bg-white sticky top-0'>
                    <div className='mt-5 text-center'>
                        <h1 className='font-semibold'>Nafis Fahim</h1>
                        <p>Rajshahi,Bangladesh</p>
                    </div> 
                    <ActivityDetails
                    activites = {activites}
                    details = {details}
                    ></ActivityDetails>
                </div>
            </div>
        </div>
    );
};

export default Home;