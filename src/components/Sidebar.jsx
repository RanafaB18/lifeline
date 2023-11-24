<<<<<<< HEAD


const Sidebar = () => {
  return (
    <div className="h-screen border-r-2 ">
        Sidebar
    </div>
  )
}

export default Sidebar
=======
import LifelineIcon from "../assets/sidebar-lifeline.png";
import Clock from "../assets/Clock-d.png";
import Bulb from "../assets/bulb.png";
import Right from "../assets/Right.png";

const history = [
  { text: "I have a headache and...." },
  { text: "My back hurts badly an.." },
  { text: "I have a headache and...." },
];

const Sidebar = () => {
  return (
    <aside className=" w-full md:w-[290px] flex flex-row md:flex-col  md:border md:border-r-1 shadow-md">
      {/* LifeLIne */}
      <div className="flex flex-col mt-4 w-[80%] mx-auto ">
        <h1 className="text-[#141414] font-bold text-[24px] font-open mb-2">
          Lifeline{" "}
          <img src={LifelineIcon} alt="Life Icon" className="inline w-10" />
        </h1>
      </div>
      {/* history */}
      <div className=" hidden md:flex left-0  z-50  bg-gray-200  md:bg-white h-full   flex-col w-1/2 md:z-0 md:w-[230px] md:static">
        <div className="w-[90%] mx-auto mt-3 flex justify-center flex-col mb-auto">
          <h3 className="text-sm">History</h3>
          <div className="mt-2 ">
            <div className="flex items-baseline  bg-custom ">
              {" "}
              <span>
                <img src={Clock} alt="date" className="inline mx-1 mb-1"></img>
              </span>
              <h5 className="text-sm font-[inter] text-[#40a9ff]">This week</h5>
            </div>
            {history.map((item, id) => {
              return (
                <p key={id} className="font-sans text-sm mb-1">
                  <span>
                    <img
                      src={Right}
                      alt="arrow-right"
                      className="inline text-gray-600"
                    />
                  </span>
                  {item.text}
                </p>
              );
            })}
          </div>
        </div>

        {/* article and actions */}
        <div className="w-[90%]  mt-auto relative flex flex-col mx-auto gradient-bg font-open rounded-md text-white">
          <img src={Bulb} alt="bulb" className="absolute -top-16 left-7" />
          <h3 className="font-semibold text-base pt-10 text-center mb-2">
            Malaria: The silent-killer
          </h3>
          <p className="text-center text-sm mb-3">
            Lorem ipsum dolor sit amet consectetur. Posuere in amet nulla urna
            nibh tempus. At id.
          </p>
          <button className="w-[60%] mx-auto mb-6 bg-[#EDF8FF] text-[#18A1CC] font-[inter] rounded py-1">
            View article <img src={Right} alt="go" className="inline" />
          </button>
        </div>

        <div className="hidden md:block border border-t-1 my-5"></div>

        <nav className="flex flex-col ml-6 my-4 text-sm font-open">
          <div className="flex items-center mb-2 cursor-pointer">
            <ion-icon name="trash-outline"></ion-icon>
            <p className="ml-2">Clear conversations</p>
          </div>

          <div className="flex items-center cursor-pointer">
            <ion-icon name="log-out-outline"></ion-icon>
            <p className="ml-2">Logout</p>
          </div>
        </nav>
      </div>

      {/* icon */}
      <div className="md:hidden mt-4 mr-4">
        <ion-icon name="menu-outline" size="large"></ion-icon>
      </div>
    </aside>
  );
};

export default Sidebar;
>>>>>>> 813fea33e8231d9304afc96232e5a3c9fe65c800
