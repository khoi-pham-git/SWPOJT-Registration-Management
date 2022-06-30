import React from "react";
import Nav from "../Component/Nav/navbar";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Regisform() {
  const location = useLocation();
  var navigate = useNavigate();
  const data = location.state;
  const [job, setJob] = useState();
  const [student, setStudent] = useState();
  useEffect(() => {
    async function getJob() {
      var response = await axios.get(
        "https://localhost:44362/api/Jobs/" + data[0]
      );
      response = await response;
      //console.log(response.data);
      setJob(response.data);
    }
    async function getStudent() {
      var response = await axios.get(
        "https://localhost:44362/api/Students/" + data[1]
      );
      response = await response;
      //console.log(response.data);
      setStudent(response.data);
    }
    getJob();
    getStudent();
    console.log(data[0]);
    console.log(data[1]);
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <div class="page-heading about-heading header-text defaultBackground">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content">
                <h2>Registration</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {job == undefined || student == undefined ? (
        <></>
      ) : (
        <div>
          <div class="d-flex justify-content-center col-md-12 ">
            <div class="contact-form">
              <h1>{job.JobName}</h1>
              <form id="contact" action="" method="post">
                <div class="row">
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <h3>Tên sinh viên</h3>
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Họ và tên"
                        required=""
                        defaultValue={student.FullName}
                        readOnly={true}
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <h3>Chuyên ngành</h3>
                      <input
                        name="major"
                        type="text"
                        class="form-control"
                        id="major"
                        placeholder="Chuyên ngành"
                        required=""
                        defaultValue={student.Major.MajorName}
                        readOnly={true}
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <h3>Công ty đăng ký</h3>
                      <input
                        name="company"
                        type="text"
                        class="form-control"
                        id="company"
                        placeholder="Công ty đăng ký"
                        required=""
                        defaultValue={job.Company.CompanyName}
                        readOnly={true}
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <fieldset>
                      <h3>Công việc đăng ký</h3>
                      <input
                        name="job"
                        type="text"
                        class="form-control"
                        id="job"
                        placeholder="Công việc đăng ký"
                        required=""
                        defaultValue={job.JobName}
                        readOnly={true}
                      />
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <h3>Giới thiệu điểm mạnh của bản thân</h3>
                      <textarea
                        name="message"
                        rows="6"
                        class="form-control"
                        id="message"
                        placeholder="Lời nhắn"
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div class="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        class="filled-button"
                        onClick={(e) => regisOJT(e)}
                      >
                        Gửi
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
  async function regisOJT(e) {
    e.preventDefault();
    var stuId = student.StudentID;
    var companyId = job.Company.CompanyID;
    var Description = document.getElementById("message").value;
    var processNote = "";
    var status = 1;
    var tempId = student.Term.TermID;

    var sendData = {
      StudentID: stuId,
      CompanyID: companyId,
      Description: Description,
      ProcessNote: processNote,
      Status: status,
      TermID: tempId,
      EvaluationID: null,
      Company: null,
      Evaluation: null,
      Term: null,
      Student: null,
    };
    console.log(sendData);
    await axios
      .post("https://localhost:44362/api/Registrations", sendData)
      .then((respn) => {
        alert("You have registration successfully");
        navigate("/");
      });
  }
}
