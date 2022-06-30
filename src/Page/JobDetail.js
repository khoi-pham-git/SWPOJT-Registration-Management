import React from "react";
import Nav from "../Component/Nav/navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

export default function JobDetail() {
  const regis = useCallback((jobId, studentId) => {
    return async (e) => {
      navigate("/regis", { state: [jobId, studentId] });
    };
  });

  const location = useLocation();
  var navigate = useNavigate();
  const data = location.state;
  const [job, setJob] = useState();
  const [studentId, setStudentId] = useState();
  //const studentId = location.key;
  useEffect(() => {
    async function getJob() {
      var response = await axios.get(
        "https://localhost:44362/api/Jobs/" + data[0]
      );
      response = await response;
      //console.log(response.data);
      setJob(response.data);
    }
    getJob();
    setStudentId(data[1]);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      {job == undefined ? (
        <></>
      ) : (
        <div>
          <div class="page-heading about-heading header-text defaultBackground">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="text-content">
                    <h2>{job.JobName}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="products">
            <div class="container">
              <div class="row">
                <div class="col-md-9 col-sm-8">
                  <p class="lead">
                    <i class="fa fa-calendar"></i>Open date: {job.OpenDate}{" "}
                    &nbsp;&nbsp;
                    <i class="fa fa-calendar"></i>Close date: {job.CloseDate}{" "}
                    &nbsp;&nbsp;
                    <i class="fa fa-file"></i> {job.JobName}
                  </p>

                  <br />
                  <br />

                  <div class="form-group">
                    <h5>Thông tin tuyển dụng</h5>
                  </div>

                  <p>{job.JobDescription}</p>
                  <br />
                  <br />
                </div>

                <div class="col-md-3 col-sm-4">
                  <div class="contact-form">
                    <div class="form-group">
                      <button
                        type="submit"
                        onClick={regis(job.JobID, studentId)}
                        class="filled-button btn-block"
                      >
                        Đăng ký
                      </button>
                    </div>
                  </div>

                  <div>
                    <img
                      src="assets/images/logo-fpt.jpg"
                      alt=""
                      class="img-fluid wc-image"
                    />
                  </div>

                  <br />

                  <ul class="social-icons text-center">
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <div class="container">
              <div class="row">
                <div class="col-md-9">
                  <div class="section-heading">
                    <h2>Thông tin công ty</h2>
                  </div>

                  <p class="lead">
                    <i class="fa fa-map-marker"></i> Công ty:{" "}
                    {job.Company.CompanyName}
                  </p>

                  <p>{job.Company.Description}</p>
                  <br />
                </div>

                <div class="col-md-3">
                  <div class="section-heading">
                    <h2>Contact Details</h2>
                  </div>

                  <div class="left-content">
                    <p>
                      <span>Số điện thoại</span>

                      <br />

                      <strong>
                        <a href="#">{job.Company.PhoneNumber}</a>
                      </strong>
                    </p>

                    <p>
                      <span>Email</span>

                      <br />

                      <strong>
                        <a href="#">{job.Company.CompanyEmail}</a>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
