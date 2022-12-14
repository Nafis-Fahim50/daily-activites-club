import React, { useEffect, useState } from 'react';
import Activites from '../Activites/Activites';
import ActivityDetails from '../ActivityDetails/ActivityDetails';
import Image from '../Image/pp.jpg'
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
                <div className='bg-red-500'>
                    <div className='mt-5 text-center'>
                        <div className='flex ml-16 gap-5'>
                            <img className='rounded-full w-7' src={Image} alt="" />
                            <h1 className='font-semibold'>Nafis Fahim</h1>
                        </div>
                        <p className='mt-2'>Junior Web Developer</p>
                        <p>Rajshahi, Bangladesh</p>
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