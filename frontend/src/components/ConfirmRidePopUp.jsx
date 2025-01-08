import React, { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (params) => {
  const [otp, setOtp] = useState("")
const  submitHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <div className="">
      <h5
        onClick={() => {
          params.setRidePopPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0 "
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        {" "}
        Confirm this ride to start{" "}
      </h3>
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
        <div className="mt-6 w-ful flex justify-center items-center ">
          <form
            action=""
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              className="bg-[#eee] px-6 py-4 flex font-mono text-lg rounded-lg w-full mt-3 text-center placeholder:text-center placeholder:text-gray-500"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e)=>{setOtp(e.target.value)}}
            />

            <Link to={"/captain-riding"}
             className="bg-green-600 items-center flex justify-center mt-3 text-white p-3 rounded-lg font-semibold text-lg "> 
            Confirm </Link>
            <button onClick={() => {
                params.setconfirmedRidePopUp(false);
                params.setRidePopPanel(false);
              }}
              className="bg-red-500 items-center justify-center flex mt-2  text-white p-3 rounded-lg font-semibold text-lg w-full "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
