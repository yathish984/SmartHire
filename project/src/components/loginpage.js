import React from "react";
import "./loginpage.css";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <div className="login-container">

            <div className="login-left">
                <h1>SmartHire</h1>

                <h2>Smart Hiring. Better Careers.</h2>

                <p>
                    Connect talented candidates with the right
                    employers through a smarter recruitment platform.
                </p>

                <p>✓ Find relevant jobs</p>
                <p>✓ Apply with ease</p>
                <p>✓ Track your applications</p>
            </div>

            <div className="login-right">

                <div className="login-card">

                    <h2>Welcome Back!</h2>

                    <p>Login to your SmartHire account</p>

                    <form>

                        <label>Email Address</label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter your password"
                        />

                        <div className="login-options">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>

                            <a href="/forgot-password">
      Forgot Password?
</a>
                        </div>

                        <button type="submit">
                            Login
                        </button>

                    </form>

                    <p className="register">
                        Don't have an account?
                        <a href="/register"> Create Account</a>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;