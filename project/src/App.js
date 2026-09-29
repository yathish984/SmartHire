import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/loginpage";
import RegisterPage from "./components/registerpage";
import ForgotPasswordPage from "./components/forgotpasswordpage";

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<LoginPage />}
                />

                <Route
                    path="/register"
                    element={<RegisterPage />}
                />

                <Route
                    path="/forgot-password"
                    element={<ForgotPasswordPage />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;