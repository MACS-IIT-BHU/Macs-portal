"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Student from "@/components/Student/Student";
const Students = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/me");
        const studentArray = res.data.data;
        setStudents(studentArray);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleViewProfile = (student) => {
    router.push(`/students/${student._id}`);
  };

  return (
    <div className="bg-lightBlue-100 p-4 py-24 min-h-[80vh]">
      <h1 className="text-3xl font-bold  mb-4 text-lightBlue-800">Students</h1>
      <div className="flex items-center justify-center h-fit w-screen  p-4">
        <input type="text" className="bg-slate-500/30 text-xl outline-none w-96 h-10 px-2 border-[3px] border-slate-400 text-blue-500 rounded-md " placeholder="search student"
          onChange={(e) => {
            setSearch(e.target.value)
          }} />
      </div>
      <div className="flex flex-wrap flex-col md:flex-row md:gap-4 justify-center ">
        {students &&
          students.map((student) => {
            let temp = student.name.toLowerCase();
            if (temp.search(search.toLowerCase()) != -1) {
              return (
                <>
                  <Student key={student.id} event={handleViewProfile} student={student} />
                </>
              )
            }
          })
        }
      </div>
    </div>
  );
};

export default Students;
