import React from "react";

function TeamName({ team }) {
  return (
    <div className="flex items-center w-full px-20 h-16 justify-center gap-5 overflow-hidden bg-gradient-to-r from-white via-blue-200 to-white">
      <div className="w-10 h-36 bg-gradient-to-b  from-[#009DD6] to-[#00CBD6] -rotate-[30deg]"></div>
      <div className="w-10 h-36 bg-gradient-to-b  from-[#009DD6] to-[#00CBD6] -rotate-[30deg]"></div>
      <div className="w-10 h-36 bg-gradient-to-b  from-[#009DD6] to-[#00CBD6] -rotate-[30deg]"></div>
      <div className="text-sm inline-block md:text-3xl text-center text-blue-400 font-bold">{team}</div>
      <div className="w-10 h-36 bg-gradient-to-b  from-[#009DD6] to-[#00CBD6] -rotate-[30deg]"></div>
      <div className="w-10 h-36 bg-gradient-to-b  from-[#009DD6] to-[#00CBD6] -rotate-[30deg]"></div>
      <div className="w-10 h-36 bg-gradient-to-b  from-[#009DD6] to-[#00CBD6] -rotate-[30deg]"></div>
    </div>
  );
}

export default TeamName;

// /* Header bg */

// position: absolute;
// width: 1440px;
// height: 380px;
// left: 0px;
// top: 0px;

// /* Rectangle 95 */

// position: absolute;
// height: 380px;
// left: 0px;
// right: 0px;
// top: 0px;

// /* blue gradient */
// background: linear-gradient(90deg, #009DD6 0%, #00CBD6 100%);

// /* pseudo */

// position: absolute;
// height: 319.88px;
// left: 0px;
// right: 0px;
// top: 60.12px;

// background: url(.png);
