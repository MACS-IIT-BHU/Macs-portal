"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
    <div className="bg-lightBlue-100 p-4 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-4 text-lightBlue-800">Students</h1>
      {students &&
        students.map((student) => (
          <div
            onClick={() => handleViewProfile(student)}
            key={student.id}
            className="bg-white p-6 mb-4 cursor-pointer rounded-lg shadow-md"
          >
            <h2 className="text-xl font-bold mb-2 text-lightBlue-800">
              {student.name}
            </h2>
            <p className="text-lightBlue-600">Email: {student.email}</p>
            <p className="text-lightBlue-600">
              Year of Joining: {student.yearOfJoining}
            </p>
            <p className="text-lightBlue-600">
              Skills: nextjs, reactjs, nodejs, fastapi
              {/* {student.skills.join(", ")} */}
            </p>
            <p className="text-lightBlue-600">
              Resume:{" "}
              <a
                // href={student.resumeUrl}
                href="#"
                download
                className="text-lightBlue-800 hover:underline"
              >
                Download
              </a>
            </p>
            <p className="text-lightBlue-600">
              GitHub:
              {student.github}
            </p>
            <p className="text-lightBlue-600">LinkedIn: {student.linkedin}</p>
          </div>
        ))}
    </div>
  );
};

export default Students;
