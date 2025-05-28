import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import logInLottie from '../assets/lottie/login.json';
import Lottie from "lottie-react";
import SocialLogin from "./SocialLogin";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUser, isDarkMode } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await userLogin(email, password);
            const user = result.user;
            setUser(user);

            //  Get JWT token
            await axios.post("http://localhost:5000/jwt", { email }, { withCredentials: true });

            Swal.fire({
                title: "Good job!",
                text: "Login successful",
                icon: "success",
                didClose: () => {
                    navigate(location?.state ? location.state : "/");
                    location.reload(); 
                }
            });

        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Login failed. Please check your email and password!",
            });
        }
    };


    return (
        <>
            <Helmet>
                <title>Login | ProdigyBoard</title>
                <meta name="description" content="Login page for ProdigyBoard" />
            </Helmet>

            <div className={`min-h-screen mt-24 flex justify-center items-center ${isDarkMode ? "bg-gray-800" : ""}`}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96 lg:w-full">
                        <Lottie animationData={logInLottie} loop={true} />
                    </div>

                    <div className={`card max-w-2xl w-full rounded-lg p-10 shadow-xl ${isDarkMode ? "bg-gray-900 text-white" : "bg-teal-800 text-gray-200"}`}>
                        <h2 className="text-3xl font-bold text-center mb-6">Sign In Your Account</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter your password"
                                    className={`w-full px-4 py-2 rounded border pr-10 focus:outline-none ${isDarkMode ? "bg-gray-700 text-white border-gray-600" : "text-gray-200 border-gray-300"}`}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-9 text-lg text-gray-300 hover:text-white"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>

                            <div className="mt-6">
                                <button type="submit" className="btn proCardButton w-full">
                                    Sign In
                                </button>
                                <div className="divider">OR</div>
                                <SocialLogin />
                            </div>
                        </form>

                        <p className="text-center mt-4 font-semibold">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-red-500 underline">
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
