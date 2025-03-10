import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProgressBar = ({ profileCompletion, userId }) => {
  const navigate = useNavigate();
  const isCompleted = profileCompletion === 100;

  return (
    <div className="w-full p-4 bg-gray-100 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-2">
        <span className="font-medium text-gray-700">Profile Completion</span>
        <span className="text-sm font-semibold text-gray-600">
          {profileCompletion}%
        </span>
      </div>
      <div className="relative w-full h-4 overflow-hidden bg-gray-300 rounded-full">
        <div
          className={`h-full transition-all duration-500 ease-in-out ${
            isCompleted
              ? "bg-green-500"
              : "bg-gradient-to-r from-purple-300 to-purple-400"
          }`}
          style={{ width: `${profileCompletion}%` }}
        ></div>
      </div>
      <button
        onClick={() => navigate(`/profile/${userId}`)}
        className="w-full py-2 mt-4 font-semibold text-white transition rounded-lg shadow-md bg-primary hover:bg-secondary"
      >
        {isCompleted ? "View Profile" : "Complete Profile"}
      </button>
    </div>
  );
};

ProgressBar.propTypes = {
  profileCompletion: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};

export default ProgressBar;
