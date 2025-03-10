import { useState } from "react";
import {
  StyledH1,
  StyledParagraph,
} from "../GeneralStyles/Headings/Headings.styles";
import posterImg from "../../assets/africaGirl.jpeg";
import { StyledButton } from "../Button/Button.style";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("Message Sent Successfully!");
      setIsSubmitting(false);
      setFormData({
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div className="relative mt-[2rem]">
      {/* Background Image and Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${posterImg})` }}
      ></div>

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="relative flex justify-end items-center w-full h-auto px-4 md:px-[3rem] z-10">
        <div className="bg-secondary w-full md:w-[45%] h-full p-[2rem]  text-white flex flex-col justify-between">
          <div>
            <StyledParagraph className="mb-2 text-lg text-amber-200 md:text-xl">
              Get In Touch
            </StyledParagraph>
            <StyledH1 className="mb-4 text-2xl font-semibold text-center md:text-2xl">
              Send Us Your Message!
            </StyledH1>
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="h-[3rem] w-full p-4 rounded-[0.5rem] border-none outline-none bg-white text-black placeholder:text-gray-400"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone"
                required
                className="h-[3rem] w-full p-4 rounded-[0.5rem] border-none outline-none bg-white text-black placeholder:text-gray-400"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                required
                className="h-[8rem] w-full p-4 rounded-[0.5rem] border-none outline-none bg-white text-black placeholder:text-gray-400"
              />
            </div>
            <div className="form-group">
              <StyledButton
                type="submit"
                className={`w-full md:w-[170px] mx-auto transition-all ease-in-out duration-300  bg-primary ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-200 hover:bg-amber-300"
                }`}
                style={{ height: "3rem" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </StyledButton>
            </div>
          </form>

          {/* Form Submission Status */}
          {formStatus && (
            <div className="mt-4 text-lg text-green-500">{formStatus}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
