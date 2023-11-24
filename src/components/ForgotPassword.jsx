/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";


const Forgotpassword = () => {
  const [email, setEmail] = useState();
  return (
    <div className="w-96 bg-white shadow-lg p-4 cursor-pointer rounded-lg">
      <div>
        <p className=" font-bold m-1 text-lg">Reset Password</p>
        <p className=" text-xs text-gray-400 m-1 mt-2">
          Enter the email assocaited with this account we will send you a link
          to reset your password
        </p>
        <label className="font-bold mt-4">
          Email Address <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          placeholder="e.g johndoe@gmail.com"
          className="p-2 bg-gray-300 text-sm outline-none w-full border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-blue-400 p-2 text-white font-bold mt-4 rounded w-full">
          Continue
        </button>
        <p className="text-center text-xs text-blue-400 font-bold mt-3">
          Return to sign In
        </p>
      </div>
    </div>
  );
}

export default Forgotpassword