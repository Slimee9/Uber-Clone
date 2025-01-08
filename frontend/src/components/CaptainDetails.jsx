import React, { useContext } from "react";
import { CaptainDataContext } from "../context/CaptainContext"

const CaptainDetails = () => {

  const  {captain}  = useContext(CaptainDataContext)

  console.log(captain)
  
  return (
    <div>
      <div className="flex items-center justify-between border-gray-200 border-2 p-5 rounded-lg">
    
        <div className="flex items-center justify-start  gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://img.freepik.com/premium-photo/indian-cab-driver_599862-8125.jpg"
            alt=""
          />
          <h4 className="text-xl font-semibold capitalize">{captain.data.fullname.firstname+" "+captain.data.fullname.lastname}</h4>
        </div>
        <div>
          <h5 className="text-xl font-semibold">₹200.90</h5>
          <p className="text-sm text-gray-600 ">Earned</p>
        </div>
      </div>
      <div className="bg-yellow-300 border-2 border-black  mt-5 rounded-xl flex justify-between items-start h-[40%] px-3 py-2  grid-flow-col col-span-3">
        <div className="text-center px-2 py-1">
          <i className="ri-timer-2-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center px-2 py-1">
          <i className="ri-speed-up-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center px-2 py-1">
          <i className="ri-booklet-line text-3xl mb-2 font-thin"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
