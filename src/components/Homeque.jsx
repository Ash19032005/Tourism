import React from 'react';
import { Link } from 'react-router-dom';
import Data from "../../Data/Detailed.json";

const Homeque = () => {
  const data = Data.destinations;
  const showdetail = (index) => {
    console.log(index);
  };
  return (
    <section className='grid grid-cols-3 gap-4 '>
      {data.map((ele, i) => (

          <div class="group relative mt-[5rem]">
          <div class="px-4 py-2 m-5 text-white rounded">
          <img src={data[i].image} className='w-[25rem] h-[30rem] bg-cover' alt="Heritage Image"/>
            </div>
          <div class="absolute bottom-0 left-0  mb-[1.75rem] ml-[2.2rem]  w-[84.5%] h-0   bg-gradient-to-br from-green-200 via-red-200  to-transparent rounded-sm transition-height duration-500 overflow-hidden group-hover:h-[90%]">
              <div class="flex flex-col justify-center items-center text-center text-white h-full">
                  <h3 class="text-[2.5rem] mb-5 text-black">{data[i].name}</h3>
                  <p className='text-lg text-gray-600'>{data[i].description}</p>
                  <Link to={`/detail/?id=${i}`} key={i}>
            <button onClick={() => showdetail(i)} className='w-[80px] h-[40px] mt-2 cursor-pointer  rounded-xl  hover:bg-white duration-[0.7s] text-gray-800 text-md'>Explore</button>
            </Link>
              </div>
          </div>
          </div>
      ))}
    </section>
  );
};

export default Homeque;

{/* 
// <div key={i} className='w-[20rem] h-[25rem] m-[5rem] py-10 rounded-xl relative flex flex-col justify-center items-center relative overflow-hidden '>
        //   <div className='w-[20rem] h-[30rem] py-[-20px] overflow-hidden rounded-xl'>
        //     <img src={data[i].image} className='w-[25rem] h-[30rem] bg-cover' alt="Heritage Image"/>
        //   </div>

        //   <div class="absolute bottom-0 left-0 w-[10rem] h-0 bg-gradient-to-t from-black to-ff004f bg-opacity-60 rounded-md transition-height duration-500 overflow-hidden group-hover:h-full">
        //     <div class="flex flex-col justify-center items-center text-center text-white h-full">
        //         <h3 class="font-medium mb-5">Heading</h3>
        //         <button>Explore</button>
        //     </div>
        //   </div> */}

          {/* <div className=' mt-[-30rem] z-[2] rounded-[30px] h-[20rem] flex flex-col justify-center items-center'>
            <h1 className='text-[2rem] mt-[0px] text-center leading-[60px] z-[2] text-[white]'>{data[i].name}</h1>
            <Link to={`/detail/?id=${i}`} key={i}>
            <button onClick={() => showdetail(i)} className='w-[80px] h-[30px]  rounded-xl text-[black] backdrop-blur  cursor-pointer text-[white] duration-[0.4s] mt-[5rem]'>Explore</button>
            </Link>
            </div> */}
        {/* // </div> */}
