import React from "react";
import Nav from "../Component/Nav/navbar";
import { useNavigate, useLocation, Link, NavLink } from "react-router-dom";
export default function Job(){
    return(
        <React.Fragment>
            
    {/* <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>   */}
    
    <Nav/>
    <div class="page-heading about-heading header-text defaultBackground">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-content">
              <h2>Việc làm</h2>             
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
                <div class="product-item">
                  <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
                  <div class="down-content">
                    <a href="job-details.html"><h4>Fresher C#</h4></a>

                    <h6>$60 000</h6>

                    <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i> FSoft</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-item">
                  <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
                  <div class="down-content">
                    <a href="job-details.html"><h4>Fresher C#</h4></a>

                    <h6>$60 000</h6>

                    <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i> FSoft</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-item">
                  <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
                  <div class="down-content">
                    <a href="job-details.html"><h4>Fresher C#</h4></a>

                    <h6>$60 000</h6>

                    <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i> FSoft</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-item">
                  <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
                  <div class="down-content">
                    <a href="job-details.html"><h4>Fresher C#</h4></a>

                    <h6>$60 000</h6>

                    <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i> FSoft</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-item">
                  <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
                  <div class="down-content">
                    <a href="job-details.html"><h4>Fresher C#</h4></a>

                    <h6>$60 000</h6>

                    <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i> FSoft</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                    </small>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="product-item">
                  <a href="job-details.html"><img src="assets/images/logo-fpt.jpg" alt=""/></a>
                  <div class="down-content">
                    <a href="job-details.html"><h4>Fresher C#</h4></a>

                    <h6>$60 000</h6>

                    <h4><small><i class="fa fa-briefcase"></i> Developer <br/> <strong><i class="fa fa-building"></i> FSoft</strong></small></h4>

                    <small>
                         <strong title="Posted on"><i class="fa fa-calendar"></i> 15-06-2020</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Type"><i class="fa fa-file"></i> OJT</strong> &nbsp;&nbsp;&nbsp;&nbsp;
                         <strong title="Location"><i class="fa fa-map-marker"></i> Ho Chi Minh</strong>
                    </small>
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
                  <input type="text" class="form-control" placeholder="Công ty, chuyên ngành" aria-label="Search" aria-describedby="basic-addon2"/>
                </div>

                <div class="col-4">
                  <button class="filled-button" type="button">Go</button>
                </div>
              </div>
            </div>

            {/* <div class="form-group">
              <h5>Lorem ipsum dolor sit amet</h5>
            </div>

            <p><a href="blog-details.html">Lorem ipsum dolor sit amet, consectetur adipisicing.</a></p>
            <p><a href="blog-details.html">Et animi voluptatem, assumenda enim, consectetur quaerat!</a></p>
            <p><a href="blog-details.html">Ducimus magni eveniet sit doloremque molestiae alias mollitia vitae.</a></p> */}
          </div>
        </div>
      </div>
    </div>

    {/* <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="inner-content">
              <p>Copyright © 2020 Company Name - Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Book Now</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="contact-form">
              <form action="#" id="contact">
                  <div class="row">
                       <div class="col-md-6">
                          <fieldset>
                            <input type="text" class="form-control" placeholder="Pick-up location" required=""/>
                          </fieldset>
                       </div>

                       <div class="col-md-6">
                          <fieldset>
                            <input type="text" class="form-control" placeholder="Return location" required=""/>
                          </fieldset>
                       </div>
                  </div>

                  <div class="row">
                       <div class="col-md-6">
                          <fieldset>
                            <input type="text" class="form-control" placeholder="Pick-up date/time" required=""/>
                          </fieldset>
                       </div>

                       <div class="col-md-6">
                          <fieldset>
                            <input type="text" class="form-control" placeholder="Return date/time" required=""/>
                          </fieldset>
                       </div>
                  </div>
                  <input type="text" class="form-control" placeholder="Enter full name" required=""/>

                  <div class="row">
                       <div class="col-md-6">
                          <fieldset>
                            <input type="text" class="form-control" placeholder="Enter email address" required=""/>
                          </fieldset>
                       </div>

                       <div class="col-md-6">
                          <fieldset>
                            <input type="text" class="form-control" placeholder="Enter phone" required=""/>
                          </fieldset>
                       </div>
                  </div>
              </form>
           </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div> */}
        </React.Fragment>
    )
}