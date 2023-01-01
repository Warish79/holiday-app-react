import React from 'react';

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Cruise</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://images.unsplash.com/photo-1548574505-12caf0050b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNydWlzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Beaches</h3>
        <img
        className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Activities;