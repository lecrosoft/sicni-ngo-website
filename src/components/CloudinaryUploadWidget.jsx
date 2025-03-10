import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CloudinaryUploadWidget = ({ onUploadSuccess }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dmy3untdy",
        uploadPreset: "nddhvqjq",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          onUploadSuccess(result.info.secure_url);
        }
      }
    );
  }, [onUploadSuccess]);

  return (
    <button
      type="button"
      className="p-2 mt-2 text-white rounded bg-secondary w-52 h-[3rem]"
      onClick={() => widgetRef.current.open()}
    >
      Upload File
    </button>
  );
};

CloudinaryUploadWidget.propTypes = {
  onUploadSuccess: PropTypes.func.isRequired,
};

export default CloudinaryUploadWidget;
