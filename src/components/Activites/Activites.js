import React from 'react';
import Activity from '../Activity/Activity';

const Activites = ({activites}) => {
    // console.log(activites)
    return (
        <div>
            <h1 className='font-bold mt-10 text-lg'>Select Today's Activites</h1>
            <div className='grid grid-cols-3 gap-5'>
            {
                activites.map(activity => <Activity
                key={activity.id}
                activity ={activity}
                ></Activity> )
            }
            </div>
            
        </div>
    );
};

export default Activites;