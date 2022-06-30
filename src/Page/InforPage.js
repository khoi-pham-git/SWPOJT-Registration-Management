import React from "react";
import Nav from "../Component/Nav/navbar";

export default function InforPage(){
    return(
        <React.Fragment>
    <Nav/>
    <div class="page-heading about-heading header-text defaultBackground">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h4>Các thông tin nổi bật</h4>
              <h2>Tin tức</h2>
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
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/blog-1-370x270.jpg" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">Tin tuyển dụng tháng 9</a></h4>

                    <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/blog-2-370x270.jpg" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">Tin tuyển dụng tháng 8</a></h4>

                    <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/blog-3-370x270.jpg" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">Tin tuyển dụng tháng 5</a></h4>

                    <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/blog-4-370x270.jpg" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">Tin tuyển dụng tháng 5</a></h4>

                    <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/blog-5-370x270.jpg" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">Tin tuyển dụng tháng 5</a></h4>

                    <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="service-item">
                  <a href="blog-details.html" class="services-item-image"><img src="assets/images/blog-6-370x270.jpg" class="img-fluid" alt=""/></a>

                  <div class="down-content">
                    <h4><a href="blog-details.html">Tin tuyển dụng tháng 5</a></h4>

                    <p> Long &nbsp;&nbsp;|&nbsp;&nbsp; 12/06/2020 10:30 &nbsp;&nbsp;|&nbsp;&nbsp; 114</p>
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
                  <input type="text" class="form-control" placeholder="Tin tức" aria-label="Search" aria-describedby="basic-addon2"/>
                </div>

                <div class="col-4">
                  <button class="filled-button" type="button">Go</button>
                </div>
              </div>
            </div>

            <div class="form-group">
              <h5>Các tin nổi bất</h5>
            </div>

            <p><a href="blog-details.html">Tin tuyển dụng tháng 9</a></p>
            <p><a href="blog-details.html">Tin tuyển dụng tháng 8</a></p>
            <p><a href="blog-details.html">Tin tuyển dụng tháng 5</a></p>
          </div>
        </div>
      </div>
    </div>
        </React.Fragment>
    )
}