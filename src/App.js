import React, { useState } from 'react';


function App() {

 
    const [isChecked, setIsChecked] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
      
    };

    const handleCheckbox2Change = () => {
     
      setIsChecked2(!isChecked2);
     
    };


  return (
   <div className="bg-[#f5f5f5] h-screen ">
    <div className=" overflow-hidden flex justify-center">
         <h1 className="text-[100px] font-sans text-custom-red">todos</h1>
    </div>
    <div className="overflow-hidden  shadow-xl w-[600px] mx-auto">
    <div className=" overflow-hidden flex justify-center items-center sadow-xl mb-[2px] w-[600px] mx-auto  bg-white bg-opacity-[.85] pl-[5px]">
    <button className=" bg-white bg-opacity-[.85] pl-[20px] text-gray-600 text-2xl ">˅</button>
      <input 
       
       className="  pt-[16px] pr-[16px] pb-[16px] pl-[30px] w-[600px] outline-none focus:ring-0  italic placeholder-gray-300  placeholder-opacity-100  text-[25px]  bg-white bg-opacity-[.85]"
      
       placeholder="What needs to be done?"
       type="text"
      />

      
    </div>
   
    <div className="flex justify-between items-center mx-auto  w-[600px] bg-white border-t p-[16px] group relative">
    <div className="flex items-center ">
    <label htmlFor="myCheckbox" className="flex items-center cursor-pointer">
      <div className="relative inline-block w-7 h-7 mr-2 items-center rounded-full border border-gray-400 bg-white">
        <input
          type="checkbox"
          id="myCheckbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="absolute opacity-0 w-0 h-0"
        />
        {isChecked && (
          <svg
            className="absolute top-0 left-0 w-5 h-5 text-green-500 items-center "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.707 5.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 14.586l8.293-8.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      
    </label>
     
      <div className="pl-[30px]">
           task
      </div>
    </div>

    <button className="text-lg font-[900] text-red-700 pr-[6px] opacity-0  group-hover:opacity-[.50] ">
       ✕
    </button>
     
    </div>
    <div className="flex justify-between items-center mx-auto  w-[600px] bg-white border-t p-[16px] group relative">
    <div className="flex items-center ">
    <label htmlFor="myCheckbox2" className="flex items-center cursor-pointer">
      <div className="relative inline-block w-7 h-7 mr-2 items-center rounded-full border border-gray-400 bg-white">
        <input
          type="checkbox"
          id="myCheckbox2"
          checked={isChecked2}
          onChange={handleCheckbox2Change}
          className="absolute opacity-0 w-0 h-0"
        />
        {isChecked2 && (
          <svg
            className="absolute top-0 left-0 w-5 h-5 text-green-500 items-center "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M17.707 5.293a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L8 14.586l8.293-8.293a1 1 0 0 1 1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
      
    </label>
      <div className="pl-[30px]">
           task
      </div>
    </div>

    <button className="text-lg font-[900] text-red-700 pr-[6px] opacity-0  group-hover:opacity-[.50] ">
       ✕
    </button>
     
    </div>
    <div className="flex justify-between mx-auto  w-[600px] bg-white border-t p-[10px] pl-[16px] pr-[16px]">
      <div className="text-slate-500">
        1 item left
      </div>
      <div className="text-slate-500 flex" >
      <button className="mr-[13px] pl-[5px] pr-[5px] rounded border border-transparent hover:border-red-100 focus:border-red-100 text-center">All</button>
      <button className="mr-[13px] pl-[5px] pr-[5px] rounded border border-transparent hover:border-red-100 focus:border-red-100 text-center">Active</button>
      <button className="mr-[13px] pl-[5px] pr-[5px] rounded border border-transparent hover:border-red-100 focus:border-red-100 text-center">Completed</button>
    </div>
    <div className="text-slate-500">
      <button className="hover:underline" >
         Clear Completed
      </button>
    </div>
    </div>
   
    </div>
    <div className="mx-auto drop-shadow-xl  w-[590px] bg-neutral-100 border-b p-[2.5px]">

</div>
<div className="mx-auto drop-shadow-xl  w-[580px] bg-neutral-100 border-b p-[2.5px]">

</div>
   </div>
  );
}

export default App;
