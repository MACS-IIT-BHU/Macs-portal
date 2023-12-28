"use client";
// Import necessary modules and styles
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import UserEditForm from "@/components/editUserComponent";

const UserProfilePage = ({ params }) => {
  const { data: session } = useSession();

  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/users/me?user=${params.id}`
        );
        setUser(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.id]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleFormSubmit = async (updatedUserData) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/users/me?user=${params.id}`,
        {
          updatedUserData,
        }
      );

      setUser(res.data.data);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-[80vh] pt-20 flex justify-center">
      {user && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">{user.name}</h2>

          {editMode ? (
            <UserEditForm user={user} onSubmit={handleFormSubmit} />
          ) : (
            <>
              <p className="text-gray-600 mb-2">Email: {user.email}</p>
              <p className="text-gray-600 mb-2">
                Year of Joining: {user.yearOfJoining}
              </p>
              <p className="text-gray-600 mb-2">
                Skills: {user.skills}
                {/* {user.skills.join(", ")} */}
              </p>
              <p className="text-gray-600 mb-2">
                About: {user.about}
                {/* {user.skills.join(", ")} */}
              </p>
              <p className="text-gray-600 mb-2">
                Resume:{" "}
                <a
                  href={user.resumeUrl}
                  download
                  className="text-blue-600 hover:underline"
                >
                  Download
                </a>
              </p>
              <p className="text-gray-600 mb-2">GitHub: {user.github}</p>
              <p className="text-gray-600 mb-2">LinkedIn: {user.linkedin}</p>
            </>
          )}

          {user && session && user.email === session.user.email ? (
            <>{!editMode && <button onClick={handleEditClick}>Edit</button>}</>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default UserProfilePage;
