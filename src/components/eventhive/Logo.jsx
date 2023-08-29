import { Link } from "react-router-dom";
import PurpleText from "./PurpleText";
import Jenkin from "../../assets/images/company-logo.png";

const Logo = ({ size, color }) => {
  return (
    <Link
      to="/"
      className={`font-semibold ${size ? size : "text-[40px]"} ${
        color ? color : "text-black"
      }`}
    >
      <div className="flex items-center gap-1 sm:gap-2">
        <img src={Jenkin} alt="" className="block w-[50px] sm:w-[100px]" />{" "}
        <PurpleText text="Events" />
      </div>
    </Link>
  );
};

export default Logo;
