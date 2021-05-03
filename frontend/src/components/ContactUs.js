import React, { useState } from "react";

import Recaptcha from "react-recaptcha";

import SecureAxios from "../config/SecureAxios";

export default function Home(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const handleSubmit = () => {
    if (fname && lname && email && subject) {
      SecureAxios({
        method: "POST",
        url: "QueriesAPI/postQuery/",
        data: {
          fname: fname,
          lname: lname,
          email: email,
          subject: subject,
        },
      })
        .then((res) => {
          alert("Query submitted");
          props.setToggle("anlytics");
        })
        .catch((e) => console.log(e));
    } else {
      alert("Please fill the data");
    }
  };

  const verifyCallback = (response) => {
    console.log(response);
    if (response) {
      setIsVerified(true);
    }
  };

  const captchaLoaded = () => {
    console.log("Captcha Loaded");
  };
  return (
    <div>
      <div className="container">
        <h1>Contact Us Form</h1>

        <label for="fname">First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          required
          onChange={(e) => {
            setFname(e.target.value);
          }}
        />
        <label for="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          required
          onChange={(e) => {
            setLname(e.target.value);
          }}
        />
        <label for="Email">Email</label>
        <input
          type="email"
          id="lname"
          name="lastname"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          required
          style={{ height: "200px" }}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        ></textarea>

        <div style={{ margin: "2%", marginLeft: "20%" }}>
          <Recaptcha
            sitekey="6LffxMEaAAAAANvSmMpBWcPjZwnX1RmzI45aNUD7"
            render="explicit"
            verifyCallback={verifyCallback}
            onloadCallback={captchaLoaded}
          />
        </div>

        <input
          type="submit"
          value="SUBMIT"
          onClick={() => {
            if (isVerified) {
              handleSubmit();
            } else {
              alert("Please verify yourself that you are human !!");
            }
          }}
        />
      </div>
    </div>
  );
}
