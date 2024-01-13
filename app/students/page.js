"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Student from "@/components/Student/Student";
const Students = () => {
  const [students, setStudents] = useState([]);

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
      <div className="flex flex-col md:flex-row md:gap-4">
        {students &&
          students.map((student) => (
            <>
              <Student key={student.id} event={handleViewProfile} student={student} />
            </>
          ))}
      </div>
    </div>
  );
};

export default Students;
