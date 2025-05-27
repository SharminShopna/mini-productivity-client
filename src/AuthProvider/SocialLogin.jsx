import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../Firebase/firebase.init';
import "../Shared/Pro.css"

const SocialLogin = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                Swal.fire({
                    title: "Success!",
                    text: "Successfully Google SignIn",
                    icon: "success",
                });
                console.log("Successfully Google SignIn", result);
            })
            .catch((error) => {
                Swal.fire({
                    title: "Error!",
                    text: `Google login failed: ${error.message}`,
                    icon: "error",
                });
            });
    };
    return (
        <div className='w-full'>
            <Link to="/" onClick={handleGoogleSignIn} className="btn w-full proCardButton" data-tooltip-id="my-tooltip" data-tooltip-content="Click if you want to register with Google">
                <FcGoogle size={20} /> Login with Google
            </Link>
        </div>
    );
};

export default SocialLogin;