import Image from "next/image";
import React from "react";
import SenaBotRoboIconNew from "../../../../public/assets/logo/senaAiIcon.png";
const SenaBotIcon = () => {
  return (
    <div className="flex justify-center gap-2 w-[56px] bg-black py-2 px-2 rounded-[25px]">
      <div
        className="flex items-center py-1 px-1 cursor-pointer rounded-[25px]"
        role="presentation"
      >
        <Image
          src={SenaBotRoboIconNew}
          alt="senaBotRoboIcon"
          className="w-[20px] h-auto invert"
        />
      </div>
    </div>
  );
};

export default SenaBotIcon;
