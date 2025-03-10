import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthForm/AuthContext";
import { uploadToCloudinary } from "../../utils/cloudinaryUpload";
import ProfileComplete from "../ProfileComplete";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";

const JobApplication = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, authLoading } = useContext(AuthContext); // Add authLoading

  const [profileCompletion, setProfileCompletion] = useState(0);
  const [resumeURL, setResumeURL] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);
  const [checkingApplication, setCheckingApplication] = useState(true);

  // Redirect unauthenticated users to the auth page
  useEffect(() => {
    if (!authLoading) {
      // Only proceed if auth state is fully loaded
      if (!user) {
        navigate("/auth", { replace: true }); // Use replace to prevent history stack issues
      } else {
        setIsPageLoading(false); // Allow the page to render once the user is confirmed
      }
    }
  }, [user, authLoading, navigate]);

  // Initialize form data from sessionStorage or default values
  const [formData, setFormData] = useState(() => {
    const savedFormData = sessionStorage.getItem("jobApplicationFormData");
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
          name: "",
          email: "",
          resume: null,
          coverLetter: "",
          experience: "",
        };
  });

  // Fetch profile completion and initialize user-specific data
  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        name: user.firstname || "",
        email: user.email || "",
        resume: user.resume || null,
      }));

      fetch(`${import.meta.env.VITE_API_URL}/get-profile-completion/${user.id}`)
        .then((res) => res.json())
        .then((data) => setProfileCompletion(data.profileCompletion))
        .catch((err) =>
          console.error("Error fetching profile completion:", err)
        );

      if (user?.resume) {
        setResumeURL(user.resume);
      }
    }
  }, [user]);

  // Save form data to sessionStorage whenever it changes
  useEffect(() => {
    if (user) {
      sessionStorage.setItem(
        "jobApplicationFormData",
        JSON.stringify(formData)
      );
    }
  }, [formData, user]);

  // Persist selected job details in sessionStorage
  useEffect(() => {
    if (location.state?.selectedJob) {
      sessionStorage.setItem(
        "selectedJob",
        JSON.stringify(location.state.selectedJob)
      );
      setSelectedJob(location.state.selectedJob);
    } else {
      const savedJob = sessionStorage.getItem("selectedJob");
      if (savedJob) {
        setSelectedJob(JSON.parse(savedJob));
      }
    }
  }, [location.state]);

  useEffect(() => {
    if (user && selectedJob) {
      const checkApplicationStatus = async () => {
        try {
          const res = await fetch(`
            ${import.meta.env.VITE_API_URL}/check-application/${user.id}/${
            selectedJob.id
          }`);
          const data = await res.json();
          setHasApplied(data.applied);
        } catch (error) {
          console.error("Error checking application status:", error);
        } finally {
          setCheckingApplication(false);
        }
      };
      checkApplicationStatus();
    }
  }, [user, selectedJob]);
  const isEligible = profileCompletion >= 80;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedURL = await uploadToCloudinary(file);
      setFormData((prevData) => ({ ...prevData, resume: uploadedURL }));
      setResumeURL(uploadedURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEligible) {
      toast.error("Your profile completion must be at least 80% to apply.");
      return;
    }
    if (
      !formData.name ||
      !formData.email ||
      !formData.resume ||
      !formData.experience
    ) {
      toast.error("All fields except cover letter are required.");
      return;
    }

    setLoading(true);

    const applicationData = {
      userId: user.id,
      jobId: selectedJob.id,
      name: formData.name,
      email: formData.email,
      resume: formData.resume,
      coverLetter: formData.coverLetter,
      experience: formData.experience,
    };

    try {
      const res = await fetch(
        `
        ${import.meta.env.VITE_API_URL}/submit-application`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(applicationData),
        }
      );

      if (res.ok) {
        toast.success("Application submitted successfully");
        setTimeout(() => navigate("/jobs"), 1500);
      } else {
        throw new Error("Failed to submit application");
      }
    } catch (error) {
      toast.error("Error submitting application." + " " + error);
    } finally {
      setLoading(false);
    }
  };

  // Show loading state until the page is ready
  if (isPageLoading || authLoading || checkingApplication) {
    return <Loader />;
  }

  return (
    <div className=" max-w-6xl gap-6 p-6 mx-auto mt-[4rem] flex md:flex-row flex-col">
      <div className="col-span-2 p-6 border-r">
        <h2 className="text-3xl font-bold text-gray-800">
          {selectedJob?.title || "Unknown Job"}
        </h2>

        {selectedJob?.job_summary ? (
          <p
            className="mt-2 text-gray-600 mb-[2rem]"
            dangerouslySetInnerHTML={{ __html: selectedJob.job_summary }}
          />
        ) : (
          <p className="mt-2 text-gray-600 mb-[2rem]">No details available.</p>
        )}

        <hr />
        <div className="mt-4 text-gray-700 mb-[2rem]">
          <p>
            <strong>Company:</strong> {selectedJob?.company_name || "N/A"}
          </p>
          <p>
            <strong>Location:</strong> {selectedJob?.location || "Remote"}
          </p>
          <p>
            <strong>Salary:</strong>{" "}
            {selectedJob.currency +
              parseFloat(selectedJob?.salary_range_from).toLocaleString() +
              " - " +
              selectedJob.currency +
              parseFloat(selectedJob?.salary_range_from).toLocaleString() ||
              "Negotiable"}
          </p>
          <p>
            <strong>Job Type:</strong> {selectedJob?.jobType}{" "}
            {selectedJob?.work_mode ? `(${selectedJob.work_mode})` : ""}
          </p>
        </div>
        <hr />
        <h2 className="font-bold mt-[2rem]">Job Description / Requirement</h2>

        {selectedJob?.description ? (
          <p
            className="mt-2 text-gray-600"
            dangerouslySetInnerHTML={{ __html: selectedJob.description }}
          />
        ) : (
          <p className="mt-2 text-gray-600">No details available.</p>
        )}
      </div>
      <div className="col-span-1 p-6 w-[100%]">
        <h3 className="text-xl font-semibold mb-[1rem]">Apply Now</h3>
        <ProfileComplete
          profileCompletion={profileCompletion}
          userId={user.id}
        />
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border rounded"
            required
          />
          {resumeURL ? (
            <div className="p-3 bg-gray-100 border rounded">
              <p className="text-sm text-gray-700">Using saved resume</p>
              <a
                href={resumeURL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary"
              >
                Preview Resume
              </a>
            </div>
          ) : (
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-3 border rounded"
              required
            />
          )}
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            required
          >
            <option value="">Select Years of Experience</option>
            <option value="Less than 1 year">Less than 1 year</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="5+ years">5+ years</option>
          </select>
          <textarea
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Cover Letter (Optional)"
            className="w-full h-24 p-3 border rounded"
          ></textarea>
          <button
            type="submit"
            className={`w-full p-3 rounded ${
              hasApplied
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-primary hover:bg-secondary-700 text-white"
            }`}
            disabled={hasApplied || loading}
          >
            {hasApplied
              ? "Already Applied"
              : loading
              ? "Submitting..."
              : "Submit Application"}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
