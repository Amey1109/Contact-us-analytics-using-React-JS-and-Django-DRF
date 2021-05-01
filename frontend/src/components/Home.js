import React, { useState } from "react";
import ContactUs from "./ContactUs";
import Analytics from "./Analytics";
import icon from "../assets/imgs/icon.png";

export default function Home(props) {
  const [toggle, setToggle] = useState(true);
  return (
    <div>
      <div style={{ display: "block", marginBottom: "2%" }}>
        <img
          style={{ width: "45px", height: "45px", margin: "1%" }}
          src={icon}
        />

        <div className="button-container" style={{ display: "inline-block" }}>
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
      </div>

      {toggle ? (
        <div>
          <Analytics />
        </div>
      ) : (
        <div>
          <ContactUs />
        </div>
      )}
    </div>
  );
}
