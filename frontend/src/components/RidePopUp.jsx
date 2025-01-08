import React from "react";

const RidePopUp = (params) => {
  return (
    <div>
      <h5
        onClick={() => {
          params.setRidePopPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available! </h3>
      <div className="flex items-center justify-between p-3 border-black border-2 bg-yellow-200 rounded-xl  mt-4">
        <div className="flex items-center  gap-3 ">
          <img
            className="h-16 w-16 rounded-full object-cover border-black"
            src="https://i1.sndcdn.com/avatars-000339084123-nag0p1-t1080x1080.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium ">Harsh Patel</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 kM</h5>
      </div>
      <div className="flex flex-col gap-2 justify-between items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 562/11-a</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Nashik
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-2-fill text-lg"></i>
            <div>
              <h3 className="text-lg font-medium"> 562/11-a</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab , Nashik
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash-cash</p>
            </div>
          </div>
        </div>
        <div className="flex mt-5 items-center w-full justify-between gap-3">
        
        <button
            onClick={() => {
              params.setRidePopPanel(false);
            }}
            className="bg-gray-300  text-gray-700 p-3 px-10 rounded-lg font-semibold text-2xl "
          >
            Ignore
          </button>
          
          <button
            onClick={() => {
              params.setconfirmedRidePopUp(true);
            }}
            className="bg-green-600  text-white p-3 px-10 rounded-lg font-semibold text-2xl "
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
