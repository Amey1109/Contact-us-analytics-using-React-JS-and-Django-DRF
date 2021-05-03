import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ContactUs from "./ContactUs";
import Analytics from "./Analytics";
import icon from "../assets/imgs/icon.png";

export default function Home(props) {
  const [toggle, setToggle] = useState("contactus");
  let history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <div>
      <div style={{ display: "block", marginBottom: "2%" }}>
        <img
          style={{ width: "45px", height: "45px", margin: "1%" }}
          src={icon}
        />

        <label>Algospace</label>

        <div className="button-container" style={{ display: "inline-block" }}>
          <button
            className="nav-buttons"
            onClick={() => {
              setToggle("contactus");
            }}
          >
            Contact Us
          </button>
          <button
            className="nav-buttons"
            onClick={() => {
              setToggle("anlytics");
            }}
          >
            Analytics
          </button>
          <button
            className="nav-buttons"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {toggle == "contactus" ? (
        <div>
          <ContactUs toggle={toggle} setToggle={setToggle} />
        </div>
      ) : (
        <div>
          <Analytics />
        </div>
      )}
    </div>
  );
}
