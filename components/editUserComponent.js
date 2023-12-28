import { useState } from "react";

const UserEditForm = ({ user, onSubmit }) => {
  console.log(user);
  const [updatedUser, setUpdatedUser] = useState({
    name: user.name,
    email: user.email,
    yearOfJoining: user.yearOfJoining,
    github: user.github,
    linkedin: user.linkedin,
    skills: user.skills,
    about: user.about,

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

  return (
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
        <label htmlFor="yearOfGraduation" className="block text-gray-600">
          Year of Graduation:
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
  );
};

export default UserEditForm;
