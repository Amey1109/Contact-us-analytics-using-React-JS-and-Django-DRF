import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import FacebookLogin from "react-facebook-login";

import GoogleLogin from "react-google-login";

export default function Login() {
  const responseFacebook = (response) => {
    console.log(response);
    if (response) {
      localStorage.setItem("name", response.name);
      localStorage.setItem("accessToken", response.accessToken);
      window.location.reload();
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    if (response) {
      localStorage.setItem("name", response.gt.Ue);
      window.location.reload();
    }
  };

  if (localStorage.name) {
    return <Redirect to="/home" />;
  }

  return (
    <div style={{ width: "45%", marginTop: "13%", marginLeft: "25%" }}>
      <div class="card text-center">
        <div class="card-header">
          Welcome to <strong>Algospace</strong>
        </div>
        <div class="card-body">
          <h5 class="card-title">Log In with your social accounts</h5>
          <p class="card-text">
            <div style={{ marginTop: "5%" }}>
              <FacebookLogin
                appId="258564845773685"
                //autoLoad={true}
                fields="name,email,picture"
                onClick={() => {
                  console.log("Clicked Me");
                }}
                callback={responseFacebook}
                icon="fa-facebook"
              />
            </div>
            <div style={{ marginTop: "5%", marginBottom: "2%" }}>
              <GoogleLogin
                clientId="684429798600-hvp7armkcqe2kfkclco8fhc8qkojt6vr.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>
          </p>
        </div>
        <div class="card-footer text-muted">Copyright 2021-2022</div>
      </div>
    </div>
  );
}
