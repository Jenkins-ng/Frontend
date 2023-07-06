import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import img from "../../assets/event_images/dashboard/eventcard.png";
import avatar1 from "../../assets/event_images/dashboard/Avatar 1.png";
import avatar2 from "../../assets/event_images/dashboard/Avatar 2.png";
import avatar3 from "../../assets/event_images/dashboard/Avatar 3.png";

const DashboardEventCard = () => {
  const [isLoveProfile, setIsLoveProfile] = useState(false);

  const toogleLoveProfile = () => {
    setIsLoveProfile(!isLoveProfile);
  };

  return (
    <div className="p-4 bg-white rounded-xl relative hover:scale-[1.01] duration-300">
      <img src={img} alt="" className="w-full rounded-xl" />
      <span
        onClick={toogleLoveProfile}
        className="cursor-pointer absolute right-8 top-8 transition-all bg-white rounded-full h-9 w-9 grid place-content-center p-1 pb-2"
      >
        {isLoveProfile ? (
          <BsHeartFill className="text-primary translate-y-1" size={20} />
        ) : (
          <BsHeart className="text-primary translate-y-1" size={20} />
        )}
      </span>
      <div className="flex justify-between items-center py-4">
        <div>
          <h4 className="text-lg leading-5 font-bold">Abstract Colors</h4>
          <span className="text-sm">By Esthera Jackson</span>
        </div>
        <div className="flex items-center">
          <img src={avatar1} alt="" className="shrink-0 w-6 h-6" />
          <img src={avatar2} alt="" className="shrink-0 w-7 -ml-3" />
          <img src={avatar3} alt="" className="shrink-0 w-7 -ml-3" />
          <div className="w-6 h-6 bg-slate-100 rounded-full -ml-3 grid place-content-center text-primary text-xs">
            8+
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center font-bold text-sm">
        <span className="text-navyBlue">Current Data</span>
        <Link
          to="/event/register"
          className="bg-navyBlue text-white rounded-[2cm] py-2 px-7"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default DashboardEventCard;
