import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import registerLottie from '../../src/assets/lottie/register.json';
import Lottie from "lottie-react";
import { AuthContext } from "./AuthProvider";
import SocialLogin from "./SocialLogin";
import axios from "axios";

const Register = () => {
  const PasswordValid = /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/;
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUserProfile, isDarkMode } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageInput = form.image;

    if (!PasswordValid.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password must include uppercase, lowercase, number, and special character.",
        icon: "error",
      });
      return;
    }

    if (!imageInput.files || imageInput.files.length === 0) {
      Swal.fire({
        title: "Error!",
        text: "Please select an image.",
        icon: "error",
      });
      return;
    }

    const imageFile = imageInput.files[0];
    if (imageFile.size > 2 * 1024 * 1024) {
      Swal.fire({
        title: "Error!",
        text: "Image size exceeds 2MB.",
        icon: "error",
      });
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const imageUrl = data?.data?.url;
      await createUser(email, password, name);
      await updateUserProfile({ displayName: name, photoURL: imageUrl });
      setUser({ displayName: name, photoURL: imageUrl });

      Swal.fire({ title: "Success!", text: "Successfully Registered", icon: "success" });
      navigate("/");
    } catch (error) {
      Swal.fire({ title: "Error!", text: error.message, icon: "error" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Register | ProdigyBoard</title>
      </Helmet>
      <div className={`min-h-screen mt-24 flex justify-center items-center ${isDarkMode ? "bg-gray-800" : ""}`}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96 lg:w-full">
            <Lottie animationData={registerLottie} loop={true} />
          </div>
          <div className={`card max-w-2xl w-full rounded-lg p-10 shadow-xl ${isDarkMode ? "bg-gray-900 text-white" : "bg-teal-800 text-gray-200"}`}>
            <h2 className="text-3xl font-bold text-center mb-6">Sign Up Your Account</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2 rounded border focus:outline-none ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "border-gray-300 text-gray-200"}`}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Select Image</label>
                <input
                  required
                  type="file"
                  name="image"
                  accept="image/*"
                  className="file-input file-input-bordered w-full text-gray-200 bg-teal-800 border-gray-300"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2 rounded border focus:outline-none ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "text-gray-200 border-gray-300"}`}
                  required
                />
              </div>
              <div className="relative">
                <label className="block mb-1 font-medium">Password</label>
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`w-full px-4 py-2 rounded border focus:outline-none ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "text-gray-200 border-gray-300"}`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-9 text-lg"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="mt-6">
                <button type="submit" className="btn proCardButton w-full">
                  Sign Up
                </button>
                <div className="divider">OR</div>
                <SocialLogin />
              </div>
            </form>
            <p className="text-center mt-4 font-semibold">
              Already Have An Account?{" "}
              <Link to="/login" className="text-red-600 underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default Register;
