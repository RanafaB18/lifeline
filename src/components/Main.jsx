import Avatar from "../assets/avatar.png";
import Attachment from "../assets/attatchment-01.png";
import Send from "../assets/send.png";
import Translate from "../assets/translate.png";
import Improve from "../assets/improve.png";

const Main = () => {
  return (
    <main className="w-full bg-hero-image bg-no-repeat bg-center h-screen">
      <div className="border border-t-0 border-b-1 flex items-center h-20">
        <div className="ml-8 mr-4 bg-gray-300 rounded-full">
          <img src={Avatar} alt="Jane Doe" className="p-2 z-10" />
        </div>
        <div className=" flex flex-col font-open text-base">
          {" "}
          <h2 className="text-base">Jane Doe</h2>
          <span className="font-inter text-[#00A739] text-sm">. Active</span>
        </div>
      </div>

      {/* input div */}

      <div className="fixed bottom-0 w-full h-22">
        <div className="flex absolute  left-[20%] mt-2">
          <div className="mr-4 bg-[#EEEEEE] rounded-md py-1 px-2">
            <img src={Translate} alt="translate" className="inline mr-2" />
            Translate
          </div>
          <div className="mr-4 bg-[#EEEEEE] rounded-md py-1 px-2">
            <img src={Improve} alt="translate" className="inline mr-2" />
            Impove
          </div>
        </div>
        <form className="w-3/4  md:w-2/5 ml-[10%] md:ml-[20%] relative">
          <img
            src={Attachment}
            alt="attachment"
            className="absolute top-[3.75rem] left-2 cursor-pointer"
          />
          <img
            src={Send}
            alt="attachment"
            className="absolute top-16 right-4 cursor-pointer"
          />
          <label htmlFor="text"></label>
          <input
            type="text"
            name="text"
            id="text"
            className="w-full outline outline-1 mx-auto mt-12 mb-5 placeholder:font-inter placeholder:text-base h-10 rounded-lg pl-8"
            placeholder="Tell me your sympton"
          />
        </form>
      </div>
    </main>
  );
};

export default Main;
