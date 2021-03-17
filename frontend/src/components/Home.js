import React, { useState } from "react";
import ContactUs from "./ContactUs";
import Analytics from "./Analytics";

export default function Home(props) {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div className="button-container">
        <button
          className="nav-buttons"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Contact Us
        </button>
        <button
          className="nav-buttons"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          Analytics
        </button>
        <button className="nav-buttons">Logout</button>
      </div>

      {toggle ? <Analytics /> : <ContactUs />}
    </div>
  );
}
