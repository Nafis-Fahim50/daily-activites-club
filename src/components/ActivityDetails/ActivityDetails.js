import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivityDetails = ({details}) => {
    let total = 0;
    for (const time of details){
        total = total + time;
    }

    const notify = () => toast("Congratulations! You completed your today's acitivites");

    const [breakTime, setBreakTime] = useState(0)
    const handleBreakTime = (e) =>{
        setBreakTime(e);
        // console.log(breakTime);
    }
    

    return (
        <div>
            <div>
            <div className='mt-12  ml-5'>
                <h1 className='font-bold'>Add a break</h1>
                    <div className='bg-slate-100 mr-5 rounded-lg p-3 mt-3'>
                        <button onClick={(e)=>handleBreakTime(e.target.innerText)} className='rounded-full text-black bg-white p-2 ml-3 font-bold'>20s</button>
                        <button onClick={(e)=>handleBreakTime(e.target.innerText)}  className='rounded-full text-black bg-white p-2 ml-3 font-bold'>30s</button>
                        <button onClick={(e)=>handleBreakTime(e.target.innerText)}  className='rounded-full text-black bg-white p-2 ml-3 font-bold'>40s</button>
                        <button onClick={(e)=>handleBreakTime(e.target.innerText)}  className='rounded-full text-black bg-white p-2 ml-3 font-bold'>50s</button>
                    </div>
                    </div>
                    <div className='mt-12 ml-5'>
                        <h1 className='font-bold'>Activites Details</h1>
                        <div className='mt-5'>
                            <h1 className='bg-slate-100 py-3 rounded-md mr-5'> <span className='pl-5'> <span className='font-bold'>Activites Time: </span> {total} seconds </span></h1>
                            <h1 className='bg-slate-100 py-3 rounded-md mt-5 mr-5'> <span className='pl-5 font-bold'> Break Time: {breakTime}</span></h1>
                        </div>
                    </div>
                        <button onClick={notify} className='mt-7 bg-blue-600 text-white font-semibold px-12 py-2 text-center ml-8 mb-5 rounded-md'>Activity Completed</button>
            </div>
        </div>
    );
};

export default ActivityDetails;