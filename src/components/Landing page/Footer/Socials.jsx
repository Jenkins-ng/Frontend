import react from "react";

const Social = () => {
  return (
    <span className="flex gap-[5px] items-center">
      <a href="mailto:jenkins@info.com">
        <img src="../../src/assets/Mail.png" alt="" className="w-[30px]" />
      </a>
      <span>
        <a href="">
          <img src="../../src/assets/twitter.png" alt="" className="w-[35px]" />
        </a>
      </span>
      <span>
        <a href="">
          <img
            src="../../src/assets/linkedin 1.png"
            alt=""
            className="w-[35px]"
          />
        </a>
      </span>
      <span>
        <a href="">
          <img
            src="../../src/assets/facebook 1.png"
            alt=""
            className="w-[35px]"
          />
        </a>
      </span>
      <span>
        <a href="mailto:">
          <span className="material-symbols-outlined">call</span>
        </a>
      </span>
    </span>
  );
};

export default Social;
