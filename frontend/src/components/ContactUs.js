import React, { useState } from "react";

import SecureAxios from "../config/SecureAxios";

export default function Home(props) {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = () => {
    SecureAxios({
      method: "POST",
      url:"QueriesAPI/postQuery/",
      data: {
        fname: fname,
        lname: lname,
        email: email,
        subject: subject,
      },
    })
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <div className="container">
        <h1>Contact Us Form</h1>
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            onChange={(e) => {
              setFname(e.target.value);
            }}
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />

          <label for="Email">Email</label>
          <input
            type="email"
            id="lname"
            name="lastname"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            style={{ height: "200px" }}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          ></textarea>

          <input type="submit" value="SUBMIT" onClick={()=>{handleSubmit()}}/>
        </form>
      </div>
    </div>
  );
}
