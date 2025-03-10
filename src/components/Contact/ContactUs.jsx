import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  return (
    <div className="mt-[4rem] mb-[4rem] p-10 mx-auto text-center text-white shadow-lg bg-gradient-to-br from-gray-800 to-gray-900">
      <h2 className="mb-6 text-3xl font-bold">Contact Us</h2>

      <div className="space-y-6">
        {/* Phone Number */}
        <div className="flex items-center justify-center gap-4 p-4 transition duration-300 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600">
          <FontAwesomeIcon icon={faPhone} className="text-xl text-blue-400" />
          <span className="text-lg font-semibold">+2348104986022</span>
        </div>

        {/* Email Address */}
        <div className="flex items-center justify-center gap-4 p-4 transition duration-300 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl text-yellow-400"
          />
          <span className="text-lg font-semibold">
            contact@nextbestcreativehotbed
          </span>
        </div>

        {/* Office Address */}
        <div className="flex items-center justify-center gap-4 p-4 transition duration-300 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600">
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="text-xl text-red-400"
          />
          <span className="text-lg font-semibold">
            Ilupeju , Lagos, Nigeria
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
