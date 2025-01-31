import React from "react";
import Link from "next/link"
import TeamName from "./TeamName";
import Member from "./Member";
import memImg from "../../public/home/pexels-pixabay-220453.jpg";
import Sanyam from "../../public/home/sanyam.JPG";
import Divyansh from "../../public/home/divyansh.jpg";
import Pranathi from "../../public/home/pranathi.jpg";
import kartik_malik from "../../public/home/kartik_malik.jpg"
import akshat_shah from "../../public/home/akshat_shah.jpg"
import chirag from "../../public/home/DP_CHIRAG.jpg"
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
          {/* <Link href="https://www.iitbhu.ac.in/dept/mat/people/skpandeyapm" passHref> */}
            {/* <a className="no-underline text-inherit"> */}
            <Member
            name={"Prof SK Pandey"}
            position={"President"}
            image={skp}
            />
            {/* </a> */}
          {/* </Link> */}
          {/* <Link href="https://www.iitbhu.ac.in/dept/mat/people/rkpandeymat" passHref> */}
            {/* <a className="no-underline text-inherit"> */}
            <Member
              name={"Dr Rajesh Kumar Pandey"}
              position={"Treasurer"}
              image={rkp}
            />
            {/* </a> */}
          {/* </Link> */}
        
        </div>
        <div className="flex flex-col md:flex-row gap-10">
        <Member
          name={"Kartik Malik"}
          position={"Vice President"}
          image={kartik_malik}
        />
        <Member
          name={"Akshat Shah"}
          position={"General Secretary"}
          image={akshat_shah}
         />
        </div>
        
      </div>
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Events Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          {/* <Link href="https://www.iitbhu.ac.in/dept/mat/people/vksinghmat" passHref> */}
            {/* <a className="no-underline text-inherit"> */}
            <Member
              name={"Dr. Vineet Kumar Singh"}
              position={"Faculty Supervisor"}
              image={vks}
            />
            {/* </a> */}
          {/* </Link> */}
          
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
        {/* <Link href="https://www.iitbhu.ac.in/dept/mat/people/lavanyasmat" passHref> */}
          {/* <a className="no-underline text-inherit"> */}
          <Member
            name={"Dr. Lavanya Selvaganesh"}
            position={"Faculty Supervisor"}
            image={ls}
          />
          {/* </a> */}
        {/* </Link> */}

        {/* <Link href="https://www.iitbhu.ac.in/dept/mat/people/mukhosantapm" passHref> */}
          {/* <a className="no-underline text-inherit"> */}
          <Member
            name={"Prof. Santwana Mukhopadhyay"}
            position={"Faculty Supervisor"}
            image={sm}
          />
          {/* </a> */}
        {/* </Link> */}
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Chirag Goel"}
            position={"Secretary"}
            image={chirag}
          />
          <Member
            name={"Pranathi S"}
            position={"Jt. Secretary"}
            image={Pranathi}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
