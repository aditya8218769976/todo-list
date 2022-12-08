import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/header/Header";
import LoginPage from "../pages/login/LoginPage";
import SignUp from "../pages/signup/SignUp";

const RouterPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
};

export default RouterPage;
