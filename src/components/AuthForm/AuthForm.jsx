import { useState, useContext, useEffect } from "react"; // Add useEffect
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom"; // For navigation
import { AuthContext } from "./AuthContext";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { user, login } = useContext(AuthContext); // Access user and login function
  const navigate = useNavigate();

  // Redirect to home page if user is already logged in
  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to home page if user is logged in
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp && formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    const endpoint = isSignUp
      ? `${import.meta.env.VITE_API_URL}/register`
      : `${import.meta.env.VITE_API_URL}/login`;

    const payload = isSignUp
      ? {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword,
        }
      : {
          email: formData.email,
          password: formData.password,
        };

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors ? Object.values(data.errors).join(", ") : data.error
        );
      }

      toast.success(isSignUp ? "Signup successful!" : "Login successful!");

      if (!isSignUp) {
        login(data.user); // Save user in context
        navigate("/"); // Redirect to home page
      } else {
        setIsSignUp(false); // Show login form after signup
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r bg-primary to-gray-700">
      <div className="relative w-full max-w-md p-6 overflow-hidden bg-white shadow-xl rounded-2xl mt-[5rem]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-4 text-2xl font-bold text-center text-gray-900">
            {isSignUp ? "Create an Account" : "Welcome Back"}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <input
                  name="firstname"
                  placeholder="First Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  onChange={handleChange}
                  required
                />
                <input
                  name="lastname"
                  placeholder="Last Name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
              onChange={handleChange}
              required
            />
            {isSignUp && (
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary"
                onChange={handleChange}
                required
              />
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 text-white transition rounded-lg bg-primary hover:bg-secondary"
            >
              {loading ? "Processing..." : isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <span
              className="ml-1 cursor-pointer text-primary hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </motion.div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}