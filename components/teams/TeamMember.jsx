import React from "react";
import TeamName from "./TeamName";
import Member from "./Member";
import memImg from "../../public/home/pexels-pixabay-220453.jpg";

function TeamMember() {
  return (
    <div className="box-border flex flex-col gap-10 pt-10 pb-20 items-center justify-between w-screen">
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Core Team"} />
        <Member
          name={"Atul Tyagi"}
          position={"Vice President"}
          image={memImg}
        />
        <div className="grid md:grid-cols-2 md:flex-row gap-10">
          <Member

            name={"Gatla Sushmita"}
            position={"General Secretary"}
            image={memImg}
          />
          <Member
            name={"Shivangi Nayak"}
            position={"Student Advisor"}
            image={memImg}
          />
          <Member
            name={"Akshat Shah"}
            position={"Jt. General Secretary"}
            image={memImg}
          />
          <Member
            name={"Kartik Malik"}
            position={"Jt. General Secretary"}
            image={memImg}
          />
        </div>
      </div>
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Events Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Harsh Lalit Parmar"}
            position={"Secretary"}
            image={memImg}
          />
          <Member
            name={"Akshat Jain"}
            position={"Jt. Secretary"}
            image={memImg}
          />
        </div>
      </div>
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Publications & Alumni Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Lavish Bansal"}
            position={"Secretary"}
            image={memImg}
          />
          <Member
            name={"B Niranjan"}
            position={"Jt. Secretary"}
            image={memImg}
          />
        </div>
      </div>
      <div className="flex w-full  flex-col  items-center justify-center gap-10 ">
        <TeamName team={"Resource & Development Team"} />
        <div className="flex flex-col md:flex-row gap-10">
          <Member
            name={"Lakshya Vardhan Singh Rathore"}
            position={"Secretary"}
            image={memImg}
          />
          <Member
            name={"Divyansh Sahu"}
            position={"Secretary"}
            image={memImg}
          />
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
