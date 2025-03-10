import PropTypes from "prop-types";
import { Briefcase, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const handleJobClick = (job) => {
    navigate("/job-application", { state: { selectedJob: job } });
  };
  return (
    <div className="p-4 transition-transform bg-white border border-gray-200 shadow-lg rounded-2xl">
      {/* Featured Badge */}

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
            className="flex items-center h-2 px-2 py-3 mt-4 border rounded-lg border-primary text-primary hover:bg-secondary hover:text-white"
            onClick={() => handleJobClick(job)}
          >
            View Details
          </button>
          {job.application_status && (
            <button className="flex items-center h-2 px-2 py-3 mt-4 text-white rounded-full shadow-md ont-bold bg-gradient-to-r from-yellow-400 to-primary">
              {job.application_status}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    application_status: PropTypes.string.isRequired,
    company_name: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    salary_range_from: PropTypes.string.isRequired,
    salary_range_to: PropTypes.string.isRequired,
  }).isRequired,
};

export default JobCard;
