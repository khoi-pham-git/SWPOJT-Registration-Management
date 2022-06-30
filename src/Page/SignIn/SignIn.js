import axios from "axios";
import React from "react";
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SignIn() {
  var navigate = useNavigate();
  return (
    <React.Fragment>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-10">
              <div class="wrap d-md-flex">
                <div class="img signInimg"></div>
                <div class="login-wrap p-4 p-md-5">
                  <div class="d-flex">
                    <div class="w-100">
                      <h3 class="mb-4">Đăng nhập</h3>
                    </div>
                    <div class="w-100">
                      <p class="social-media d-flex justify-content-end">
                        <a
                          href="#"
                          class="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span class="fa fa-google"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form action="#" class="signin-form">
                    <div class="form-group mb-3">
                      <label class="label" for="name">
                        Username
                      </label>
                      <input
                        type="text"
                        id="userEmail"
                        class="form-control"
                        placeholder="Username"
                        required
                      />
                    </div>
                    <div class="form-group mb-3">
                      <label class="label" for="password">
                        Password
                      </label>
                      <input
                        type="password"
                        id="userPassword"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary rounded submit px-3"
                        onClick={(e) => login(e)}
                      >
                        Sign In
                      </button>
                    </div>
                    {/* <div class="form-group d-md-flex">
		            	
									<div class="w-50 text-md-left">
										<a href="#">Forgot Password</a>
									</div>
		            </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
  async function login(e) {
    e.preventDefault();
    var email = document.getElementById("userEmail").value;
    var pass = document.getElementById("userPassword").value;
    console.log(email);
    var res = await axios.get(
      "https://localhost:44362/login/" + email + "/" + pass
    );
    res = await res;
    var data = res.data;
    console.log(res.data);
    if (data[0] != undefined) {
      //console.log(data[0].RoleID);
      if (data[0].RoleID == 1) {
        console.log(1);
        navigate("/", { state: data[0].Students[0].StudentID });
      } else if (data[0].RoleID == 2) {
        console.log(2);

        navigate("/checkRegis", { state: data[0].Companies[0].CompanyID });
      }
    } else {
      alert("Wrong username or password");
    }
  }
}
