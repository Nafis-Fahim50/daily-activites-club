import React from 'react';
import './Activity.css'

const Activity = ({activity,handleToAddList}) => {
    const {name,img,time} = activity;


    return (
        <div className='mt-5 activity-list'>
            <div className=' bg-white rounded-lg'>
                <div className='rounded-lg w-52 ml-11 pt-5'>
                    <img className='activity-img' src={img} alt="" />
                </div>
                <div className='ml-5 mt-3'>
                    <h4 className='font-semibold'>{name}</h4>
                    <p className='font-semibold'>Time: <span className='font-semibold'> {time}</span>s</p>
                </div>
                <button onClick={()=>handleToAddList(activity.time)} className='mt-3 bg-blue-600 text-white font-semibold px-12 py-2 text-center ml-16 mb-5 rounded-md hover:bg-green-600'>Add to list</button>
            </div>
        </div>
    );
};

export default Activity;