import React from 'react';

const Activites = ({activites}) => {
    console.log(activites)
    return (
        <div>
            <h1 className='font-bold mt-10'>Select Today's Activites</h1>
            {
                activites.map(activity => <li>activity</li>)
            }
        </div>
    );
};

export default Activites;