import React from "react";

function TeamMoto() {
  return (
    <div className="flex flex-col mt-[60px] md:mt-[70px] items-center w-screen justify-center gap-8 px-10 py-10 bg-gradient-to-r to-cyan-300 from-cyan-600">
      <div className="text-5xl md:text-[70px] text-center font-bold text-white">Meet Our Team</div>
      <div className="h-[1px] bg-white w-[95%] rounded-full"></div>
      <div className="flex items-center justify-center  py-5">
        <p className="text-white w-[85%] md:text-2xl text-center">
          Get to know our team of diverse and passionate individuals, united by
          their love for mathematics and their commitment to fostering a
          community of learning and discovery.
        </p>
      </div>
    </div>
  );
}

export default TeamMoto;
