import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupForm } from "@/components/SignupForm";
import '../styles/Signup.scss';
import SignupImage from '../assets/pexelsignup.jpg'; 
import { SuccessDialog } from "@/components/SuccessDialog";

export default function Signup() {
    const [signupSuccess, setSignupSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSignupSuccess = () => {
        setSignupSuccess(true);
    };

    const handleCloseDialog = () => {
        setSignupSuccess(false); // Set signup success back to default
    };

    const handleGoToLogin = () => {
        setSignupSuccess(false);
        navigate('/login'); // Navigate to login page after successful signup
    }
    return (
        <div className="page-container">
            <div className="left-form">
                {/* Signup form component */}
                <SignupForm onSignupSuccess={handleSignupSuccess}/>
            </div>
            <div className="right-image">
                <img src={SignupImage} alt="Signup Image" />
            </div>

            <SuccessDialog
                isOpen={signupSuccess}
                onClose={handleCloseDialog}
                onAction={handleGoToLogin}
                title="Signup Successful!"
                description="Your account has been created successfully. You can now log in to access your account."
                buttonText="Go to Login"
            />
        </div>
    )
}