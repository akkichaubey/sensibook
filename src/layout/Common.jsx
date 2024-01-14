import React from "react";
import { Outlet } from "react-router-dom";

// component
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Common = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

export default Common;
