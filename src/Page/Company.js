import React from "react";
import Nav from "../Component/Nav/navbar";
import { NavLink } from "react-router-dom";

export default function Company(){
    return(
        <React.Fragment>
            <Nav/>
    <div class="page-heading about-heading header-text defaultBackground">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h2>Các công ty hợp tác liên kết với đại học FPT</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="products">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-6">
                <div class="service-item">
                {/* <NavLink to="/companyDetail" className="nav-link">
                  <img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/>
                </NavLink> */}
                 
                <a href="blog-details.html" class="services-item-image"><img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/></a>
                  <div class="down-content">
                    <NavLink to="/companyDetail" className="nav-link">
                        <h4>KMS Technology</h4>
                    </NavLink>           

                    <p> Số lượng việc làm &nbsp;&nbsp;:&nbsp;&nbsp;114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">KMS Technology</a></h4>

                    <p> Số lượng việc làm &nbsp;&nbsp;:&nbsp;&nbsp;114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">KMS Technology</a></h4>

                    <p> Số lượng việc làm &nbsp;&nbsp;:&nbsp;&nbsp;114</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">KMS Technology</a></h4>

                    <p> Số lượng việc làm &nbsp;&nbsp;:&nbsp;&nbsp;114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">KMS Technology</a></h4>

                    <p> Số lượng việc làm &nbsp;&nbsp;:&nbsp;&nbsp;114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/KMS-Technology.png" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">KMS Technology</a></h4>

                    <p> Số lượng việc làm &nbsp;&nbsp;:&nbsp;&nbsp;114</p>
                  </div>
                </div>
              </div>

              <div class="col-md-12">
                <ul class="pages">
                  <li class="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">4</a></li>
                  <li><a href="#"><i class="fa fa-angle-double-right"></i></a></li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="contact-form">
              <div class="form-group">
                <h5>Tìm kiếm</h5>
              </div>

              <div class="row">
                <div class="col-8">
                  <input type="text" class="form-control" placeholder="Tên công ty" aria-label="Search" aria-describedby="basic-addon2"/>
                </div>

                <div class="col-4">
                  <button class="filled-button" type="button">Go</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    )
}