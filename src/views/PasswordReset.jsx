/* eslint-disable react/no-unescaped-entities */
import Resetpassword from "../components/Resetpassword";

const PasswordReset = () => {
  return (
    <div className="h-screen p-10 ">
      <div className="flex items-center justify-end">
        <p className="font-bold">Don't have an account?</p>
        <button className="ml-2 p-1 font-bold text-white bg-blue-500 rounded">
          Sign Up
        </button>
      </div>
      <div className="m-auto  h-full flex justify-center items-center ">
        <Resetpassword />
      </div>
    </div>
  );
}

export default PasswordReset