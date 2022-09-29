import React from 'react';

const ActivityDetails = ({details}) => {
    // console.log(activites);
    let total = 0;
    console.log(details);
    for (const time of details){
        total = total + time;
    }
 

    return (
        <div>
            <div>
            <div className='mt-12  ml-5'>
                <h1 className='font-bold'>Add a break</h1>
                    <div className='bg-slate-100 mr-5 rounded-lg p-3 mt-3'>
                        <button className='rounded-full text-black bg-white p-2 ml-4'>20s</button>
                        <button className='rounded-full text-black bg-white p-2 ml-3'>30s</button>
                        <button className='rounded-full text-black bg-white p-2 ml-3'>40s</button>
                        <button className='rounded-full text-black bg-white p-2 ml-3'>50s</button>
                    </div>
                    </div>
                    <div className='mt-12 ml-5'>
                        <h1 className='font-bold'>Activites Details</h1>
                        <div className='mt-5'>
                            <h1 className='bg-slate-100 py-3 rounded-md mr-5'> <span className='pl-5 font-bold'> Activites Time: {total} </span></h1>
                            <h1 className='bg-slate-100 py-3 rounded-md mt-5 mr-5'> <span className='pl-5 font-bold'> Break Time: 0</span></h1>
                        </div>
                    </div>
                <button className='mt-7 bg-blue-600 text-white font-semibold px-12 py-2 text-center ml-8 mb-5 rounded-md'>Activity Completed</button>
            </div>
        </div>
    );
};

export default ActivityDetails;