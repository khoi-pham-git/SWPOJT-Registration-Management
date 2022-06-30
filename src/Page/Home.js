import React from "react";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
import Job from "./Job";
import Nav from "../Component/Nav/navbar";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Company from "../Model/Company";

//import FooterPage from "../Component/footer/footer";

export default function Home() {
  const location = useLocation();
  const data = location.state;
  const [stuId, setStuId] = useState();
  const jobDetail = useCallback((jobId, studentId) => {
    return async (e) => {
      navigate("/jobDetail", { state: [jobId, studentId] });
    };
  });

  //var jobsArr = [];
  var navigate = useNavigate();
  const [job, setJobs] = useState([]);

  useEffect(() => {
    console.log("wwwwwwww");
   
    if(data!=null&&data!=undefined){
      setStuId(data);
      console.log(data);
    }
    setStuId(data);
    async function getData() {
      // .then((res) => {
      //   jobsArr = res.data;
      //   setJobs(res.data);
      // });
      var response = await axios.get("https://localhost:44362/api/Jobs");
      response = await response;
      //console.log(response.data);
      setJobs(response.data);
    }
    getData();

    // console.log("after");
    // console.log(companyArr);
    //console.log();
  }, []);
  return (
    <React.Fragment>
      <Nav />

      {/* <div class="banner header-text">
      <div class="owl-banner owl-carousel">
        <div class="banner-item-01">
          <div class="text-content">
            <h4>Find your car today!</h4>
            <h2>Lorem ipsum dolor sit amet</h2>
          </div>
        </div>
        <div class="banner-item-02">
          <div class="text-content">
            <h4>Fugiat Aspernatur</h4>
            <h2>Laboriosam reprehenderit ducimus</h2>
          </div>
        </div>
        <div class="banner-item-03">
          <div class="text-content">
            <h4>Saepe Omnis</h4>
            <h2>Quaerat suscipit unde minus dicta</h2>
          </div>
        </div>
      </div>
    </div> */}

      <div class="homePage">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="text-content"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="latest-products">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Việc làm</h2>
                <a href="jobs.html">
                  Xem thêm<i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
            {job[0] == undefined ? (
              <></>
            ) : (
              <div class="col-md-4">
                <div class="product-item">
                  {/* <NavLink to="/jobDetail" className="nav-link" state={company[0].JobID}>
                  <img src="assets/images/logo-fpt.jpg" alt=""/>
                </NavLink>
                <a href="#" className="nav-link" onClick={updateWord(company[0].JobID)}>Test</a> */}
                  <a href="#" onClick={jobDetail(job[0].JobID, stuId)}>
                    <img src="assets/images/logo-fpt.jpg" alt="" />
                  </a>
                  <div class="down-content">
                    {/* <NavLink to="/jobDetail" className="nav-link">
                <h4>{job[0].JobName}</h4>
                </NavLink>   */}
                    <a href="#" onClick={jobDetail(job[0].JobID, stuId)}>
                      <h4>{job[0].JobName}</h4>
                    </a>
                    <h6>Open date: {job[0].OpenDate}</h6>
                    <h6>Close date: {job[0].CloseDate}</h6>
                    <h6>Student quantity: {job[0].StudentQuantity}</h6>

                    <h4>
                      <small>
                        <i class="fa fa-briefcase"></i>{" "}
                        {job[0].Major.MajorName} <br />{" "}
                        <strong>
                          <i class="fa fa-building"></i>
                          {job[0].Company.CompanyName}
                        </strong>
                      </small>
                    </h4>

                    {/* <small>
                     <strong title="Posted on"><i class="fa fa-calendar"></i>{company[0].OpenDate}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Type"><i class="fa fa-file"></i> {company[0].JobName}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                </small> */}
                  </div>
                </div>
              </div>
            )}

            {job[1] == undefined ? (
              <></>
            ) : (
              <div class="col-md-4">
                <div class="product-item">
                  {/* <NavLink to="/jobDetail" className="nav-link" state={job[0].JobID}>
                  <img src="assets/images/logo-fpt.jpg" alt=""/>
                </NavLink>
                <a href="#" className="nav-link" onClick={updateWord(job[0].JobID)}>Test</a> */}
                  <a href="#" onClick={jobDetail(job[1].JobID, stuId)}>
                    <img src="assets/images/logo-fpt.jpg" alt="" />
                  </a>
                  <div class="down-content">
                    {/* <NavLink to="/jobDetail" className="nav-link">
                <h4>{job[0].JobName}</h4>
                </NavLink>   */}
                    <a href="#" onClick={jobDetail(job[1].JobID, stuId)}>
                      <h4>{job[1].JobName}</h4>
                    </a>
                    <h6>Open date: {job[1].OpenDate}</h6>
                    <h6>Close date: {job[1].CloseDate}</h6>
                    <h6>Student quantity: {job[1].StudentQuantity}</h6>

                    <h4>
                      <small>
                        <i class="fa fa-briefcase"></i>{" "}
                        {job[1].Major.MajorName} <br />{" "}
                        <strong>
                          <i class="fa fa-building"></i>
                          {job[1].Company.CompanyName}
                        </strong>
                      </small>
                    </h4>

                    {/* <small>
                     <strong title="Posted on"><i class="fa fa-calendar"></i>{company[0].OpenDate}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Type"><i class="fa fa-file"></i> {company[0].JobName}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                </small> */}
                  </div>
                </div>
              </div>
            )}
            {job[2] == undefined ? (
              <></>
            ) : (
              <div class="col-md-4">
                <div class="product-item">
                  {/* <NavLink to="/jobDetail" className="nav-link" state={job[0].JobID}>
                  <img src="assets/images/logo-fpt.jpg" alt=""/>
                </NavLink>
                <a href="#" className="nav-link" onClick={updateWord(job[0].JobID)}>Test</a> */}
                  <a href="#" onClick={jobDetail(job[2].JobID, stuId)}>
                    <img src="assets/images/logo-fpt.jpg" alt="" />
                  </a>
                  <div class="down-content">
                    {/* <NavLink to="/jobDetail" className="nav-link">
                <h4>{job[0].JobName}</h4>
                </NavLink>   */}
                    <a href="#" onClick={jobDetail(job[2].JobID, stuId)}>
                      <h4>{job[2].JobName}</h4>
                    </a>
                    <h6>Open date: {job[2].OpenDate}</h6>
                    <h6>Close date: {job[2].CloseDate}</h6>
                    <h6>Student quantity: {job[2].StudentQuantity}</h6>

                    <h4>
                      <small>
                        <i class="fa fa-briefcase"></i>{" "}
                        {job[2].Major.MajorName} <br />{" "}
                        <strong>
                          <i class="fa fa-building"></i>
                          {job[2].Company.CompanyName}
                        </strong>
                      </small>
                    </h4>

                    {/* <small>
                     <strong title="Posted on"><i class="fa fa-calendar"></i>{company[0].OpenDate}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Type"><i class="fa fa-file"></i> {company[0].JobName}</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                     <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                </small> */}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div class="services">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-heading">
                <h2>Tin tức</h2>

                <a href="blog.html">
                  Xem thêm<i class="fa fa-angle-right"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <a href="#" class="">
                  <img
                    src="assets/images/blog-1-370x270.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>

                <div class="down-content">
                  <h4>
                    <a href="#">Tin tuyển dụng tháng 5</a>
                  </h4>

                  <p>
                    {" "}
                    Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                    &nbsp;&nbsp;|&nbsp;&nbsp; 114
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <a href="#" class="services-item-image">
                  <img
                    src="assets/images/blog-2-370x270.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>

                <div class="down-content">
                  <h4>
                    <a href="#">Tin tuyển dụng tháng 6</a>
                  </h4>

                  <p>
                    {" "}
                    Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                    &nbsp;&nbsp;|&nbsp;&nbsp; 114
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-item">
                <a href="#" class="services-item-image">
                  <img
                    src="assets/images/blog-3-370x270.jpg"
                    class="img-fluid"
                    alt=""
                  />
                </a>

                <div class="down-content">
                  <h4>
                    <a href="#">Tin tuyển dụng tháng 7</a>
                  </h4>

                  <p>
                    {" "}
                    Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30
                    &nbsp;&nbsp;|&nbsp;&nbsp; 114
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/custom.js"></script>
    <script src="assets/js/owl.js"></script> */}

      {/* <div>
          <FooterPage/>
        </div> */}
    </React.Fragment>
  );
}
