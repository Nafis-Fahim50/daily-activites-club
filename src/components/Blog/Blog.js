import React from 'react';

const Blog = () => {
    return (
        <div className='mb-16'>
            <h1 className='font-extrabold bg-emerald-500 p-5 m-5'>Simple Question & Answer</h1>
            <div>
                <div className='mb-5'>
                    <h1 className='font-semibold'>1. How Does React Work?</h1>

                    <p> <span className='font-medium'>Answer: </span>

                    React uses a declarative paradigm that makes it easier to reason about our application and aims to be both efficient and flexible. It designs simple views for each state in our application, and React will efficiently update and render just the right component when our data changes. </p>
                </div>
                <div className='mb-5'>
                    <h1  className='font-semibold'>2. Difference between props vs state</h1>

                    <p><span className='font-medium'>Answer: </span>

                    <table class="table-fixed border-collapse border border-slate-400">
                    <thead>
                        <tr>
                        <th className='border border-slate-400' >Props</th>
                        <th className='border border-slate-400'>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className='border border-slate-400'>Props are read-only.</td>
                        <td className='border border-slate-400'>State changes can be asynchronous.</td>
                        </tr>
                        <tr>
                        <td className='border border-slate-400'>Props are immutable.</td>
                        <td className='border border-slate-400'>State is mutable.</td>
                        </tr>
                        <tr>
                        <td className='border border-slate-400'>Stateless component can have Props.</td>
                        <td className='border border-slate-400'>Stateless components cannot have State</td>
                        </tr>
                    </tbody>
                    </table>
                    </p>
                </div>
                <div className='mb-5'>
                    <h1  className='font-semibold'>3. Uses of useEffect.</h1>

                    <p> <span className='font-medium'>Answer: </span>
                    The useEffect() is used for causing side effects in functional components and it is also capable for handling componentDidMount(), componentDidUpdate() and componentWillUnmount() life-cycle methods of class based components into functional component </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;