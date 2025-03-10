import { useEffect, useState } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { StyledH2 } from "../GeneralStyles/Headings/Headings.styles";
import { Link, useNavigate } from "react-router-dom";
import emptyJobsImg from "../../assets/no-jobs.jpg"; // Add an illustration for "No jobs found"
import Loader from "../Loader/Loader";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/featuredjobs`) // Update with your API URL
      .then((response) => response.json())
      .then((data) => {
        setJobs(data.data || []); // Ensure data exists
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      });
  }, []);

  // Handle Apply & View Details
  const handleJobClick = (job) => {
    navigate("/job-application", { state: { selectedJob: job } });
  };

  return (
    <div className="mx-auto mb-6 p-[2rem]">
      <div className="flex justify-between mb-6">
        <StyledH2>Featured Jobs</StyledH2>
        <Link to="/jobs" className="text-primary">
          View All
        </Link>
      </div>

      {loading ? (
        <p className="text-lg text-center text-gray-600">
          <Loader />
        </p>
      ) : jobs.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={emptyJobsImg} alt="No jobs found" className="h-auto w-60" />
          <p className="mt-4 text-lg font-semibold text-gray-600">
            No jobs found
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-4 transition-transform bg-white border border-gray-200 shadow-lg rounded-2xl"
            >
              {/* Featured Badge */}
              <span className="absolute px-3 py-1 text-xs font-bold text-white rounded-full shadow-md top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500">
                Featured
              </span>

              <div>
                <h3 className="flex items-center gap-2 text-xl font-semibold">
                  <Briefcase size={20} className="text-secondary" /> {job.title}
                </h3>
                <p className="mt-1 text-gray-600">{job.company_name}</p>
                <div className="flex items-center justify-between mt-3 text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    <MapPin size={16} /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-secondary">
                    {job.currency}
                    {parseInt(job.salary_range_from).toLocaleString()} {" - "}
                    {job.currency}
                    {parseInt(job.salary_range_to).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <button
                    className="px-2 py-2 mt-4 border rounded-lg border-primary text-primary hover:bg-secondary hover:text-white"
                    onClick={() => handleJobClick(job)}
                  >
                    View Details
                  </button>
                  <button
                    className="px-2 py-2 mt-4 border rounded-lg border-primary text-primary hover:bg-secondary hover:text-white"
                    onClick={() => handleJobClick(job)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default JobList;
