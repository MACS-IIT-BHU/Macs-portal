import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import app from "./firebase";

const UserEditForm = ({ user, onSubmit }) => {
  console.log(user);
  const [file, setFile] = useState(null);
  const [resumeLink, setResumeLink] = useState("");

  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
    yearOfJoining: user.yearOfJoining,
    github: user.github,
    linkedin: user.linkedin,
    skills: user.skills,
    about: user.about,
    resume: user.resume,

    // Add other fields as needed
  });

  const handleChange = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(updatedUser);
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;

          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setResumeLink(downloadURL);
          setUpdatedUser({
            ...updatedUser,
            ["resume"]: downloadURL,
          });
          console.log("YES");
        });
      }
    );
  };

  return (
    <div className='mb-20'>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={updatedUser.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={updatedUser.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            disabled // Email is disabled for editing
          />
        </div>

        <div className="mb-4">
          <label htmlFor="yearOfJoining" className="block text-gray-600">
            Year of Joining:
          </label>
          <input
            type="text"
            id="yearOfJoining"
            name="yearOfJoining"
            value={updatedUser.yearOfJoining}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="github" className="block text-gray-600">
            GitHub:
          </label>
          <input
            type="text"
            id="github"
            name="github"
            value={updatedUser.github}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="linkedin" className="block text-gray-600">
            LinkedIn:
          </label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={updatedUser.linkedin}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block text-gray-600">
            Skills:
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={updatedUser.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="about" className="block text-gray-600">
            About: 
          </label>
          <textarea
            id="about"
            name="about"
            value={updatedUser.about}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="file" className="block text-gray-600">
            Resume:
          </label>
          {updatedUser.resume ? (
            <div className="mt-4">
              <p className="text-lg font-semibold mb-2">Current Resume:</p>
              <div className="flex items-center">
                <>
                  <embed
                    src={updatedUser.resume}
                    type="application/pdf"
                    width="200"
                    height="150"
                    className="mr-4 border"
                  />

                  <a
                    href={updatedUser.resume}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Download Resume
                  </a>
                </>
              </div>
            </div>
          ) : (
            <div className="mt-4">No Resume Uploaded Yet!</div>
          )}

          <input
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            id="file"
            accept=".pdf"
            className="mt-1 block w-full py-2 px-3 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />

          <button
            onClick={handleSubmitFile}
            className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Upload Resume
          </button>
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => setEditMode(false)}
            className="bg-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserEditForm;
