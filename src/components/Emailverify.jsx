/* eslint-disable react/no-unescaped-entities */


const Emailverify = () => {
  return (
    <div className="w-96 bg-white shadow-lg p-4 cursor-pointer rounded-lg">
        <div>
            
        </div>
      <div>
        <p className="text-center font-bold m-1 text-lg">
          Verify your email using the link sent to johndoe@gmail.com
        </p>
        <p className="text-center text-xs text-gray-400 m-1 mt-2">
          Didn't get any email ? check your spam folder
        </p>
        <p className="text-center text-gray-400 m-1">Or</p>
        <div className="flex items-center justify-center">
          <p className="text-blue-300 m-1">Resend Link</p>
          <p className="text-blue-300 m-1">/</p>
          <p className="text-blue-300 m-1">Change email</p>
        </div>
      </div>
    </div>
  );
}

export default Emailverify