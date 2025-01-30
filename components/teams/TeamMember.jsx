import React from "react";
import TeamName from "./TeamName";
import Member from "./Member";
import memImg from "../../public/home/pexels-pixabay-220453.jpg";
import Sanyam from "../../public/home/sanyam.JPG";
import Divyansh from "../../public/home/divyansh.jpg";
import Pranathi from "../../public/home/pranathi.jpg";
import skp from "../../public/home/skp2.png";
import rkp from "../../public/home/rkp1.png";
import vks from "../../public/home/vks1.png";
import sm from "../../public/home/sm1.png";
import ls from "../../public/home/ls1.png";


function TeamMember() {
  return (
    <div className="box-border flex flex-col gap-10 pt-10 pb-20 items-center justify-between w-screen">
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Core Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          <a href="https://www.iitbhu.ac.in/dept/mat/people/skpandeyapm">
          <Member
          name={"Prof SK Pandey"}
          position={"President"}
          image={skp}
        /></a>
        <a href="https://iitbhu.ac.in/dept/mat/people/rkpandeymat">
        <Member
          name={"Dr Rajesh Kumar Pandey"}
          position={"treasure"}
          image={rkp}
         /></a>
        
        </div>
        <div className="flex flex-col md:flex-row gap-10">
        <Member
          name={"Kartik Malik"}
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
          <a href="https://iitbhu.ac.in/dept/mat/people/vksinghmat">
          <Member
            name={"Dr. Vineet Kumar Singh"}
            position={"Faculty Supervisor"}
            image={vks}
          /></a>
          
        </div>
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
          <a href="https://www.iitbhu.ac.in/dept/mat/people/lavanyasmat">
          <Member
            name={"Dr. Lavanya Selvaganesh"}
            position={"Faculty Supervisor"}
            image={ls}
          />
          </a>
          <a href="https://www.iitbhu.ac.in/dept/mat/people/mukhosantapm">
          <Member
            name={"Prof. Santwana Mukhopadhyay"}
            position={"Faculty Supervisor"}
            image={sm}
          /></a>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Chirag Goel"}
            position={"Secretary"}
            image={memImg}
          />
          <Member
            name={"Pranithi S"}
            position={"Jt. Secretary"}
            image={Pranathi}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
