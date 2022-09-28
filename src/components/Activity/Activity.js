import React from 'react';

const Activity = ({activity}) => {
    const {name,img,time} = activity;
    return (
        <div>
            <div>
                <img src={img} alt="" />
                <h4>Name: {name}</h4>
                <p>Time: {time}</p>
            </div>
        </div>
    );
};

export default Activity;