import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { Tab } from "@headlessui/react";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
import Select from "react-select";
// import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ProfilePageComponent = () => {
  const { userId } = useParams();
  const [profileCompletion, setProfileCompletion] = useState(0);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [locations, setLocations] = useState([]);
  //   const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    resume: "",
    password: "",
    confirmPassword: "",
    job_role: "",
    skills: [],
    photo: "",
    city: "",
    state: "",
    gender: "",
    dob: "",
  });

  useEffect(() => {
    fetchCategories();
    fetchLocations();
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/get-user-details/${userId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setFormData({ ...data });
        calculateProfileCompletion(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserDetails();
  }, [userId]);

  const calculateProfileCompletion = (data) => {
    const totalFields = Object.keys(data).length;
    const filledFields = Object.values(data).filter((value) => value).length;
    const completionPercentage = Math.round((filledFields / totalFields) * 100);
    setProfileCompletion(completionPercentage);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUploadSuccess = (url, field) => {
    setFormData({ ...formData, [field]: url });
  };
  const handleSkillsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      skills: selectedOptions.map((option) => option.value),
    });
  };
  const handleJobRoleChange = (e) => {
    setFormData({ ...formData, job_role: e.target.value });
  };
  const handleStateChange = (e) => {
    setFormData({ ...formData, state: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    const updatedData = {
      ...formData,
      skills: Array.isArray(formData.skills)
        ? formData.skills.join(",")
        : formData.skills,
      profileCompletion,
    };
    console.log("Updated Data being sent:", updatedData); // ✅ De
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/update-user-details/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Fetch Error:", error);
      toast.error("Failed to update profile.");
    } finally {
      setLoading(false);
    }
  };
  const fetchCategories = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/categories`);
    const data = await response.json();
    if (data.success) {
      setCategories(data.data);
    }
  };
  const fetchLocations = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/locations`);
    const data = await response.json();
    if (data.success) {
      setLocations(data.data);
    }
  };
  const skillOptions = [
    // Tech & IT
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "React", label: "React" },
    { value: "Node.js", label: "Node.js" },
    { value: "Python", label: "Python" },
    { value: "PHP", label: "PHP" },
    { value: "Larevel", label: "Laravel" },
    { value: "Java", label: "Java" },
    { value: "Next Js", label: "Next Js" },
    { value: "Type Script", label: "Type Script" },
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
    { value: "Full Stack", label: "Full Stack" },
    { value: "Machine Learning", label: "Machine Learning" },
    { value: "Cybersecurity", label: "Cybersecurity" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "DevOps", label: "DevOps" },

    // Business & Management
    { value: "Project Management", label: "Project Management" },
    { value: "Business Analysis", label: "Business Analysis" },
    { value: "Marketing Strategy", label: "Marketing Strategy" },
    { value: "Sales", label: "Sales" },
    { value: "Public Speaking", label: "Public Speaking" },

    // Design & Creativity
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "UI/UX Design", label: "UI/UX Design" },
    { value: "Photography", label: "Photography" },
    { value: "Video Editing", label: "Video Editing" },
    { value: "Illustration", label: "Illustration" },

    // Healthcare
    { value: "Nursing", label: "Nursing" },
    { value: "Pharmaceuticals", label: "Pharmaceuticals" },
    { value: "Physical Therapy", label: "Physical Therapy" },
    { value: "Medical Research", label: "Medical Research" },
    { value: "Emergency Medicine", label: "Emergency Medicine" },

    // Engineering & Science
    { value: "Mechanical Engineering", label: "Mechanical Engineering" },
    { value: "Electrical Engineering", label: "Electrical Engineering" },
    { value: "Data Analysis", label: "Data Analysis" },
    { value: "AI & Robotics", label: "AI & Robotics" },
    { value: "Environmental Science", label: "Environmental Science" },

    // Finance & Accounting
    { value: "Accounting", label: "Accounting" },
    { value: "Financial Analysis", label: "Financial Analysis" },
    { value: "Risk Management", label: "Risk Management" },
    { value: "Investment Banking", label: "Investment Banking" },
    { value: "Taxation", label: "Taxation" },

    // Education & Writing
    { value: "Teaching", label: "Teaching" },
    { value: "Content Writing", label: "Content Writing" },
    { value: "Copywriting", label: "Copywriting" },
    { value: "Translation", label: "Translation" },
    { value: "Research", label: "Research" },

    // Trades & Skilled Labor
    { value: "Carpentry", label: "Carpentry" },
    { value: "Plumbing", label: "Plumbing" },
    { value: "Electrician", label: "Electrician" },
    { value: "Welding", label: "Welding" },
    { value: "Auto Repair", label: "Auto Repair" },

    // Soft Skills
    { value: "Communication", label: "Communication" },
    { value: "Leadership", label: "Leadership" },
    { value: "Problem-Solving", label: "Problem-Solving" },
    { value: "Critical Thinking", label: "Critical Thinking" },
    { value: "Time Management", label: "Time Management" },
  ];

  return (
    <div className=" p-6 mx-auto bg-white rounded-lg shadow-md mt-[5rem]">
      <h2 className="mb-4 text-2xl font-semibold">Update Your Profile</h2>
      <div className="w-full h-4 mb-4 overflow-hidden bg-gray-300 rounded-full">
        <div
          className="h-full transition-all duration-500 bg-gradient-to-r from-purple-300 to-purple-400"
          style={{ width: `${profileCompletion}%` }}
        ></div>
      </div>
      <Tab.Group>
        <Tab.List className="flex pb-2 space-x-2 border-b">
          <Tab className="px-4 py-2 rounded-md focus:outline-none">
            Profile Info
          </Tab>
          <Tab className="px-4 py-2 rounded-md focus:outline-none">
            Resume Upload
          </Tab>
          <Tab className="px-4 py-2 rounded-md focus:outline-none">
            Profile Picture Upload
          </Tab>
          <Tab className="px-4 py-2 rounded-md focus:outline-none">
            Security
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <form onSubmit={handleSubmit} className="flex flex-wrap space-y-4">
              {formData.resume && (
                <a
                  href={formData.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline md:w-[50%] w-[100%] mt-[2rem]"
                >
                  Preview Resume
                </a>
              )}
              <input
                type="text"
                name="firstName"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="p-2 border rounded md:w-[50%] w-[100%]  mt-2"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-2 border rounded md:w-[50%] w-[100%]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="md:w-[50%] w-[100%] p-2 border rounded"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="md:w-[50%] w-[100%] p-2 border rounded"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date Of Birth"
                className="md:w-[50%] w-[100%] p-2 border rounded"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="md:w-[50%] w-[100%] p-2 border rounded"
              />

              <input
                type="text"
                name="job_role"
                placeholder="Select Role..."
                className="md:w-[50%] w-[100%] p-2 border rounded"
                value={formData.job_role}
                onChange={handleJobRoleChange}
                list="category-list"
              />
              <datalist id="category-list">
                {categories.map((category) => (
                  <option key={category.id} value={category.title} />
                ))}
              </datalist>
              <input
                type="text"
                name="state"
                placeholder="Search Current location..."
                className="md:w-[50%] w-[100%] p-2 border rounded"
                value={formData.state}
                onChange={handleStateChange}
                list="location-list"
              />
              <datalist id="location-list">
                {locations.map((location) => (
                  <option key={location.id} value={location.title} />
                ))}
              </datalist>
              <Select
                isMulti
                options={skillOptions}
                className="md:w-[50%] w-[100%] p-2 border rounded"
                value={skillOptions.filter(
                  (option) => formData.skills?.includes(option.value) // Using optional chaining
                )}
                onChange={handleSkillsChange}
                placeholder="Select skills..."
              />

              <textarea
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street Address"
                className="md:w-[50%] w-[100%] p-2 border rounded h-[100px]"
              />
              <input
                type="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="md:w-[50%] w-[100%] p-2 border rounded"
              />
              <button
                type="submit"
                className="py-2 text-white rounded w-52 bg-primary h-[3rem]"
              >
                {loading ? "Processing..." : "Update Profile"}
              </button>
            </form>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col justify-between boxes md:flex-row">
              <div className="box">
                <h1 className="mt-4 mb-4 font-bold">
                  {formData.resume
                    ? "Upload New Resume!"
                    : "Upload Your  Resume!"}
                </h1>
                <form onSubmit={handleSubmit}>
                  <CloudinaryUploadWidget
                    onUploadSuccess={(url) =>
                      handleUploadSuccess(url, "resume")
                    }
                  />
                  <button
                    type="submit"
                    className="py-2 text-white rounded w-52 bg-primary h-[3rem]"
                  >
                    {loading ? "Processing..." : "Submit Uploaded resume"}
                  </button>
                </form>
              </div>
              <div className="box">
                {formData.resume && (
                  <div>
                    <h1 className="mt-4 font-bold mb-7">
                      Your uploaded Resume
                    </h1>
                    <a
                      href={formData.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 py-3 text-white rounded w-52 bg-primary h-[3rem] p-4"
                    >
                      View Uploaded Resume
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="flex flex-col justify-between boxes md:flex-row">
              <div className="box">
                <h1 className="mt-4 mb-4 font-bold">
                  {formData.photo
                    ? "Change Profile Picture!"
                    : "Upload Profile Picture!"}
                </h1>
                <form onSubmit={handleSubmit}>
                  <CloudinaryUploadWidget
                    onUploadSuccess={(url) => handleUploadSuccess(url, "photo")}
                  />
                  <button
                    type="submit"
                    className="py-2 text-white rounded w-52 bg-primary h-[3rem]"
                  >
                    {loading ? "Processing..." : "Submit Uploaded picture"}
                  </button>
                </form>
              </div>
              <div className="box">
                {formData.photo ? (
                  <img
                    src={formData.photo}
                    alt={FormData.firstname}
                    style={{ height: "200px", width: "200px" }}
                    className="mt-4 rounded-full"
                  />
                ) : (
                  <FaUserCircle
                    size={100}
                    style={{ height: "200px", width: "200px" }}
                  />
                )}
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full p-2 border rounded"
            />
            <button className="w-full py-2 mt-2 text-white bg-red-500 rounded">
              Change Password
            </button>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

ProfilePageComponent.propTypes = {
  userId: PropTypes.string,
};

export default ProfilePageComponent;
