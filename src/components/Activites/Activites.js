import React from 'react';
import Activity from '../Activity/Activity';

const Activites = ({activites}) => {
    // console.log(activites)
    return (
        <div>
            <h1 className='font-bold mt-10'>Select Today's Activites</h1>
            {
                activites.map(activity => <Activity
                key={activity.id}
                activity ={activity}
                ></Activity> )
            }
        </div>
    );
};

export default Activites;