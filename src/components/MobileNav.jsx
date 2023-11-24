import { useState } from "react";
import Right from "../assets/Right.png";

const history = [
  { text: "I have a headache and...." },
  { text: "My back hurts badly an.." },
  { text: "I have a headache and...." },
];

const MobileNav = ({ navState }) => {
  const [historyState, setHistoryState] = useState(false);
  const toggleHistory = () => {
    setHistoryState((prev) => !prev);
  };

  const navPosition = navState ? "top-14" : "-translate-y-full";

  return (
    <nav
      className={`md:hidden w-full absolute ${navPosition} transition-all duration-500 bg-gray-200 pt-2 pl-10`}
    >
      <div className="cursor-pointer mb-1">
        <h4 onClick={toggleHistory}>
          History <img src={Right} className="inline" />
        </h4>
        <div className={historyState ? "block" : "hidden"}>
          {" "}
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
      <div className="flex items-center mb-1 cursor-pointer">
        <ion-icon name="trash-outline"></ion-icon>
        <p className="ml-2">Clear conversations</p>
      </div>
      <div className="flex items-center mb-2 cursor-pointer">
        <ion-icon name="log-out-outline"></ion-icon>
        <p className="ml-2">Logout</p>
      </div>
    </nav>
  );
};

export default MobileNav;
