import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";

const CallToAction = () => {
  return (
    <div className="p-10 mx-auto mt-[4rem] text-center text-white shadow-lg bg-gradient-to-r  bg-primary rounded-2xl">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">Stay Updated</h2>
      <p className="mb-6 text-lg">
        Join our newsletter and get the latest job listings and career insights
        delivered straight to your inbox.
      </p>
      <button className="flex items-center justify-center gap-2 px-6 py-3 mx-auto font-semibold transition duration-300 bg-white rounded-full text-primary hover:bg-gray-200">
        Notify me
      </button>
      {/* <button className="flex items-center justify-center gap-2 px-6 py-3 mx-auto font-semibold text-blue-700 transition duration-300 bg-white rounded-full hover:bg-gray-200">
        <FontAwesomeIcon icon={faHandHoldingHeart} /> Notify me
      </button> */}
    </div>
  );
};

export default CallToAction;
