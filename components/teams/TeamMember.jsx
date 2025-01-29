import React from "react";
import TeamName from "./TeamName";
import Member from "./Member";
import memImg from "../../public/home/pexels-pixabay-220453.jpg";
import Sanyam from "../../public/home/Sanyam.jpg";
import Divyansh from "../../public/home/Divyansh.jpg";


function TeamMember() {
  return (
    <div className="box-border flex flex-col gap-10 pt-10 pb-20 items-center justify-between w-screen">
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Core Team"} />
        <div className="flex flex-col md:flex-row gap-10">
        <Member
          name={"Kartik Mishra"}
          position={"Vice President"}
          image={memImg}
        />
        <Member
          name={"Akshat Shah"}
          position={"General Secretary"}
          image={memImg}
         />
        </div>
        
      </div>
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Events Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Divyansh Sahu"}
            position={"Secretary"}
            image={Divyansh}
          />
          <Member
            name={"Sanyam Jain"}
            position={"Jt. Secretary"}
            image={Sanyam}
          />
        </div>
      </div>
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Publications & Alumni Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Chirag Goel"}
            position={"Secretary"}
            image={memImg}
          />
          <Member
            name={"Pranithi S"}
            position={"Jt. Secretary"}
            image={memImg}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
