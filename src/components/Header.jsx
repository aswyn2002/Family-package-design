import React from "react";
import "../styles/Header.css";
import DatePicker from "../components/DatePicker";

const Header = () => (
  <header className="header">
    <img
      src="https://meryalwaterpark.com/_next/image?url=https%3A%2F%2Fliadmin.meryalwaterpark.com%2Fstorage%2Fmedia%2Fseason%2Fimage%2FMW_FamilyPackage_1320x540.jpg&w=1920&q=75"
      alt=""
    />
    <DatePicker />
  </header>
);

export default Header;
