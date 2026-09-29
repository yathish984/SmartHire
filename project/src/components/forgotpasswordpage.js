import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./forgotpasswordpage.css";

function ForgotPasswordPage() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(
            "If an account exists with this email, a password reset link will be sent."
        );
    };

    return (
        <div className="forgot-container">

            <div className="forgot-card">

                <div className="forgot-logo">
                    SmartHire
                </div>

                <div className="lock-icon">
                    🔐
                </div>

                <h2>Forgot Password?</h2>

                <p className="forgot-description">
                    Enter your registered email address and
                    we'll help you reset your password.
                </p>

                <form onSubmit={handleSubmit}>

                    <label>Email Address</label>

                    <input
                        type="email"
                        placeholder="Enter your registered email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Send Reset Link
                    </button>

                </form>

                {message && (
                    <p className="success-message">
                        {message}
                    </p>
                )}

                <div className="back-login">
                    <Link to="/">
                        ← Back to Login
                    </Link>
                </div>

            </div>

        </div>
    );
}

export default ForgotPasswordPage;