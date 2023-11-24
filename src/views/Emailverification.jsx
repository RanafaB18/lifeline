import Emailverify from "../components/Emailverify"

const Emailverification = () => {
  return (
    <div className='h-screen p-10 '>
        <div className='flex items-center justify-end'>
            <p className="font-bold">Already have an account?</p>
            <button className='ml-2 p-1 font-bold text-white bg-blue-500 rounded'>Sign in</button>
        </div>
        <div className='m-auto  h-full flex justify-center items-center '>
            <Emailverify/>
        </div>
    </div>
  )
}

export default Emailverification