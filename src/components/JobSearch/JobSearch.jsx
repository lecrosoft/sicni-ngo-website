import { useContext, useState, useEffect, useCallback } from "react";
import { AuthContext } from "../AuthForm/AuthContext";
import JobCard from "../JobCard/JobCard";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const JobSearch = () => {
  const { user } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [activeTab, setActiveTab] = useState("jobsForYou");
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchJobs();
    fetchJobsForYou();
    fetchCategories();
    fetchLocations();
  }, []);
  const navigate = useNavigate();
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
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/jobs`);
      const data = await response.json();
      console.log("Fetched jobs:", data);
      setJobs(data.success ? data.data : []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchAppliedJobs = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/check-application/${user.id}`
      );
      const data = await response.json();
      console.log("Fetched applied jobs:", data);

      // Ensure we correctly extract applications array
      setAppliedJobs(Array.isArray(data.applications) ? data.applications : []);
    } catch (error) {
      console.error("Error fetching applied jobs:", error);
      setAppliedJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchJobsForYou = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/jobs-for-you?category=${
          user.skills || user.job_role
        }`
      );
      const data = await response.json();
      console.log("Fetched Jobs for You:", data);
      setJobs(data.success ? data.data : []);
    } catch (error) {
      console.error("Error fetching jobs for you:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const handleSearch = async () => {
    setLoading(true);
    setRecentSearches([
      ...recentSearches,
      { searchQuery, selectedCategory, selectedLocation },
    ]);

    try {
      let url = `${import.meta.env.VITE_API_URL}/jobs?`;
      if (searchQuery) url += `title=${searchQuery}&`;
      if (selectedCategory) url += `category=${selectedCategory}&`;
      if (selectedLocation) url += `location=${selectedLocation}&`;

      const response = await fetch(url);
      const data = await response.json();
      console.log("Searched jobs:", data);
      setJobs(data.success ? data.data : []);
    } catch (error) {
      console.error("Error fetching searched jobs:", error);
      setJobs([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (!searchQuery ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (!selectedCategory ||
        job.category.toLowerCase() === selectedCategory.toLowerCase()) &&
      (!selectedLocation ||
        job.location.toLowerCase() === selectedLocation.toLowerCase())
    );
  });
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    if (filteredJobs.length > 0 && !selectedJob) {
      setSelectedJob(filteredJobs[0]); // Select the first job only if none is selected
    }
  }, [filteredJobs, selectedJob]);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleApply = (job) => {
    navigate("/job-application", { state: { selectedJob: job } });
  };

  const handleCopyURL = () => {
    if (selectedJob) {
      navigator.clipboard.writeText(selectedJob.url);
      alert("Job URL copied to clipboard!");
    }
  };

  const handleSaveJob = () => {
    alert("Job saved successfully!");
  };
  return (
    <div className="max-w-6xl p-6 mx-auto mt-[7rem]">
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "jobsForYou" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setActiveTab("jobsForYou");
            fetchJobsForYou();
          }}
        >
          Jobs for You
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "recentSearches"
              ? "bg-primary text-white"
              : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("recentSearches")}
        >
          Recent Searches
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            activeTab === "myJobs" ? "bg-primary text-white" : "bg-gray-200"
          }`}
          onClick={() => {
            setActiveTab("myJobs");
            fetchAppliedJobs();
          }}
        >
          My Jobs
        </button>
      </div>

      {activeTab === "jobsForYou" && (
        <>
          <div className="flex flex-wrap gap-4 mb-6">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full p-2 border rounded-md md:w-1/3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <input
              type="text"
              placeholder="Search category..."
              className="w-full p-2 border rounded md:w-1/4"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              list="category-list"
            />
            <datalist id="category-list">
              {categories.map((category) => (
                <option key={category.id} value={category.title} />
              ))}
            </datalist>

            <input
              type="text"
              placeholder="Search location..."
              className="w-full p-2 border rounded md:w-1/4"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              list="location-list"
            />
            <datalist id="location-list">
              {locations.map((location) => (
                <option key={location.id} value={location.title} />
              ))}
            </datalist>
            <button
              className="px-4 py-2 text-white rounded-md bg-primary"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {loading ? (
            <Loader />
          ) : (
            <div className="flex flex-col w-full gap-6 p-4 md:flex-row">
              {/* Left Section - Job List */}
              <div className="w-full p-4 overflow-y-auto border-r border-gray-300 md:w-1/3">
                {filteredJobs.length > 0 ? (
                  filteredJobs.map((job) => (
                    <div
                      key={job.id}
                      onClick={() => handleJobSelect(job)}
                      className={`p-4 border rounded-lg mb-2 cursor-pointer transition-all ${
                        selectedJob?.id === job.id
                          ? "bg-primary text-white"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      <h3 className="font-semibold">{job.title}</h3>
                      <p className="text-sm text-gray-600">{job.company}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No jobs found.</p>
                )}
              </div>

              {/* Right Section - Selected Job Details */}
              <div className="w-full p-6 bg-white rounded-lg shadow-lg md:w-2/3">
                {selectedJob ? (
                  <div>
                    <h2 className="mb-2 text-2xl font-bold">
                      {selectedJob.title}
                    </h2>
                    <p className="text-gray-700">
                      <strong>Company:</strong> {selectedJob.company_name}
                    </p>
                    <p className="text-gray-700">
                      <strong>Location:</strong> {selectedJob.location}
                    </p>
                    <p className="text-gray-700">
                      <strong>Salaray:</strong> {selectedJob.currency}
                      {parseFloat(
                        selectedJob.salary_range_from
                      ).toLocaleString()}
                      {" - "}
                      {selectedJob.currency}
                      {parseFloat(selectedJob.salary_range_to).toLocaleString()}
                    </p>
                    {selectedJob?.job_summary ? (
                      <p
                        className="mt-2 text-gray-600"
                        dangerouslySetInnerHTML={{
                          __html: selectedJob.job_summary,
                        }}
                      />
                    ) : (
                      <p className="mt-2 text-gray-600">
                        No details available.
                      </p>
                    )}

                    <div className="flex mt-6 space-x-4">
                      <button
                        className="px-4 py-2 text-white rounded-md bg-primary hover:bg-secondary"
                        onClick={() => {
                          handleApply(selectedJob);
                        }}
                      >
                        Apply
                      </button>
                      <button
                        className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        onClick={handleCopyURL}
                      >
                        Copy Job URL
                      </button>
                      <button
                        className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
                        onClick={handleSaveJob}
                      >
                        Save Job
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">Select a job to see details.</p>
                )}
              </div>
            </div>
          )}
        </>
      )}
      {activeTab === "recentSearches" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Searches</h2>
            {recentSearches.length > 0 && (
              <button
                className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                onClick={() => setRecentSearches([])}
              >
                Clear Recent Searches
              </button>
            )}
          </div>

          {recentSearches.length > 0 ? (
            <ul className="space-y-2">
              {recentSearches.map((search, index) => (
                <li
                  key={index}
                  className="p-2 border rounded-md cursor-pointer hover:bg-gray-200"
                  onClick={() => {
                    setSearchQuery(search.searchQuery);
                    setSelectedCategory(search.selectedCategory);
                    setSelectedLocation(search.selectedLocation);
                    handleSearch(); // Trigger search
                    setActiveTab("jobsForYou"); // Switch to job results tab
                  }}
                >
                  {search.searchQuery || "Any"} -{" "}
                  {search.selectedCategory || "Any"} -{" "}
                  {search.selectedLocation || "Any"}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center">No recent searches found.</p>
          )}
        </div>
      )}

      {activeTab === "myJobs" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading ? (
            <Loader />
          ) : appliedJobs.length > 0 ? (
            appliedJobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <p className="text-center col-span-full">No applied jobs found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default JobSearch;
