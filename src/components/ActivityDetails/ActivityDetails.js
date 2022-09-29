import React from 'react';

const ActivityDetails = ({activites, details, setDetails}) => {
    // console.log(activites);

   
    
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
                            <input className='bg-slate-100 rounded-lg py-2 px-7 mb-3' type="text" placeholder='Activites time' />
                            <input className=' bg-slate-100 rounded-lg py-2 px-7' type="text" placeholder='Break time' />
                        </div>
                    </div>
                <button className='mt-7 bg-blue-600 text-white font-semibold px-12 py-2 text-center ml-8 mb-5'>Activity Completed</button>
            </div>
        </div>
    );
};

export default ActivityDetails;